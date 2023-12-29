import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootList} from '../../App';

type Item = {
  id: number;
  category: string;
  productName: string;
  productPrice: number;
  description: string;
  isOff: boolean;
  offPercentage?: number;
  productImage: any;
  isAvailable: boolean;
  productImageList: any[];
};
type cartProps = {
  navigation: NativeStackScreenProps<RootList, 'MyCart'>['navigation'];
};
const MyCart = ({navigation}: cartProps) => {
  const [product, setProduct] = useState<Item[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<{[id: number]: number}>({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items: string | null = await AsyncStorage.getItem('cartItems');
    if (items) {
      items = JSON.parse(items);
      let productData: Item[] = [];

      Items.forEach(data => {
        if (items && items.includes(String(data.id))) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
      initializeQuantities(productData);
    } else {
      setProduct(null);
      getTotal([]);
      setQuantities({});
    }
  };

  //initial Quantity
  const initializeQuantities = (productData: Item[]) => {
    const initialQuantities: {[id: number]: number} = {};
    productData.forEach(data => {
      initialQuantities[data.id] = 1; // Set initial quantity to 1 for each item
    });
    setQuantities(initialQuantities);
  };

  //Updation
  const updateQuantity = (id: number, change: number) => {
    const updatedQuantities = {...quantities};
    updatedQuantities[id] = Math.max(1, quantities[id] + change); // Ensure quantity is not negative
    setQuantities(updatedQuantities);
  };

  //get total price of all items in the cart
  const getTotal = (productData: Item[] | []) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart
  const removeItemFromCart = async (id: number) => {
    try {
      const itemArrayString = await AsyncStorage.getItem('cartItems');

      if (!itemArrayString) {
        console.error('Cart items not found.');
        return;
      }

      let cartItems: number[] = [];

      try {
        cartItems = JSON.parse(itemArrayString);
      } catch (error) {
        console.error('Error parsing cart items JSON:', error);
        return;
      }

      if (!Array.isArray(cartItems)) {
        console.error('Parsed cart items is not an array.');
        return;
      }

      cartItems = cartItems.map(Number);

      const index = cartItems.indexOf(id);

      if (index !== -1) {
        cartItems.splice(index, 1);

        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));

        getDataFromDB();
      } else {
        console.error('Item with ID', id, 'not found in cart.');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  const renderProducts = (data: Item, index: number) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                &#8377;{data.productPrice}
              </Text>
              <Text>
                (~&#8377;
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => updateQuantity(data.id, 1)}>
                <View
                  style={{
                    borderRadius: 100,
                    marginRight: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: COLOURS.backgroundMedium,
                    opacity: 0.5,
                  }}>
                  <MaterialCommunityIcons
                    name="minus"
                    style={{
                      fontSize: 16,
                      color: COLOURS.backgroundDark,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Text>{quantities[data.id]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(data.id, 1)}>
                <View
                  style={{
                    borderRadius: 100,
                    marginLeft: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: COLOURS.backgroundMedium,
                    opacity: 0.5,
                  }}>
                  <MaterialCommunityIcons
                    name="plus"
                    style={{
                      fontSize: 16,
                      color: COLOURS.backgroundDark,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    // color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: COLOURS.blue,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: '500',
                    }}>
                    Mahaveer WaterMark Kondapur.
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLOURS.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    5000512, Hyderabad
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    // color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLOURS.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9234
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#8377;{total !== null ? total / 20 : 0.0}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                &#8377;{total !== null ? total + total / 20 : 0.0}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : 0)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            CHECKOUT (&#8377;{total !== null ? total + total / 20 : ''} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
