import React from 'react'
import {View, Text} from 'react-native'
import Item from '../components/Item'

function Homepage() {
    return (
        <View style={{
            // flex: 1,
         flexDirection: "row", flexWrap: "wrap",alignContent: "flex-start", justifyContent: "space-between"}}>
         <Item owner="Shajee Bin Waqar" contact="03312358680" name="Car" image="/home/shajee/Documents/Builds/SwapIt/assets/img/car1.jpeg" description="It is a car"/>
         <Item owner="Shajee Bin Waqar" contact="03312358680" name="Car" image="/home/shajee/Documents/Builds/SwapIt/assets/img/car1.jpeg" description="It is a car"/>
         <Item owner="Shajee Bin Waqar" contact="03312358680" name="Car" image="/home/shajee/Documents/Builds/SwapIt/assets/img/car1.jpeg" description="It is a car"/>
         <Item owner="Shajee Bin Waqar" contact="03312358680" name="Car" image="/home/shajee/Documents/Builds/SwapIt/assets/img/car1.jpeg" description="It is a car"/>
        </View>
    )
}

export default Homepage
