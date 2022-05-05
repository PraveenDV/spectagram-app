import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed';
import CreatePost from '../screens/createPost';

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
    <Tab.Navigator>
        screenOptions={({route})=>({
            tabBarIcon:({focused, size, color})=>{
                var iconName
                if(route.name==="Feed"){
                    iconName=focused ? 'home' : 'home-outline';
                }else if(route.name==="CreatePost"){
                    iconName=focused ? 'add-circle' : 'add-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            }
        })}
        tabBarOptions={({
            activeTintColor:"tomato",
            inactiveTintColor:"grey"
        })}
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Create" component={CreatePost}/>
    </Tab.Navigator>
}

export default BottomTabNavigator;