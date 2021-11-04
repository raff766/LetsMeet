import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'
import Button from '../components/Button'
import GlobalStyles from '../core/GlobalStyles'

export default function Home({ navigation }) {
  return (
    <View style={GlobalStyles.background}>
      <Text style={GlobalStyles.header}>Your Events</Text>
      <ScrollView style={{width: "100%"}}>
        <Text style={GlobalStyles.paragraph}>
          Now it's time to make some new friends!
        </Text>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1, borderTopWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Fri, Nov 5 @ 12:00pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Lunch In
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Bring your own food or drinks. Only 18+ can join!
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Sun, Nov 7 @ 6:00pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Meetup at the hookah lounge
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Come meetup for a quick chat. Don't forget your wallets this time 😤!
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Mon, Nov 8 @ 10:00am
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Group Biking
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Bring your best mountain bike for the Malibu hills. It might rain so bring a jacket.
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Mon, Nov 8 @ 1:00pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Physics Study Session
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Learn more about physics and help prepare for midterms or finals.
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Tue, Nov 9 @ 9:00am
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Goat Yoga
          </Text>
          <Text style={GlobalStyles.paragraph}>
            What's better than normal yoga? Goat Yoga! Now you can meditate with a little friend.
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Thu, Nov 11 @ 4:30pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Basketball Scrims
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Practice with 5v5 scrims make teams before you show up.
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Thu, Nov 11 @ 9:00pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Movie Night!
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Come watch Dune together in the IMAX theater!
          </Text>
        </View>
        <View style={{textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: "bold", marginTop: 10}}>
            Fri, Nov 12 @ 4:00pm
          </Text>
          <Text style={{fontWeight: "bold", fontSize: 18, margin: 10}}>
            Car Meet
          </Text>
          <Text style={GlobalStyles.paragraph}>
            Come meetup to see the cleanest cars in LA. 
          </Text>
        </View>
      </ScrollView>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }>
        Logout
      </Button>
    </View>
  )
}