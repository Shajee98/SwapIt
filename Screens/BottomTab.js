import React from 'react'
import Homepage from './Homepage'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';


const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator initialRouteName="HomePage" activeColor="#006400" barStyle={{backgroundColor: "green"}} labeled={false}>
        <Tab.Screen name="HomePage" component={Homepage} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
        </Tab.Navigator>
    )
}

export default BottomTab
