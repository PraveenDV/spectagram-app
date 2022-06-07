import * as React from 'react'
import { StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed';
import CreatePost from '../screens/createPost';

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    <Tab.Navigator>
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused, size, color})=>{
                var iconName
                if(route.name==="Feed"){
                    iconName=focused ? 'home' : 'home-outline';
                }else if(route.name==="CreatePost"){
                    iconName=focused ? 'add-circle' : 'add-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            activeColor:"tomato",
            inactiveColor:"grey"
        })}
        
        
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Create" component={CreatePost}/>
    </Tab.Navigator>
}

const styles=StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:'#2f345d',
        height:'8%',
        bottomTopLeftRadius:30,
        bottomTopRightRadius:30,
        position:'absolute',
        overflow:'hidden'
    },
    icon:{
        width:RFValue(30),
        height:RFValue(30)
    }
})

export default BottomTabNavigator;