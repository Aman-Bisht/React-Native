import { 
    StyleSheet, 
    Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg',
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3} style={styles.bodyText}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/scrollview')}
            >
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/scrollview')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 30
    },
    elevatedCard: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10,
    },
    bodyText:{
        color:"#000",
        fontWeight: '400',
    fontSize:14},
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})