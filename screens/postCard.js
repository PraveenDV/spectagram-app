import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platfrom, StatusBar, Image} from 'react-native';
/*import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';*/
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize'

export default class PostCard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeAreaView}/>
                <View style={styles.appTitle}>
                    <Image source={require('../assets/logo.png')} style={{width:60, 
                        height:60, resizeMode:'contain', marginLeft:10}}/>
                </View>
                <View style={styles.TitleContainter}>
                    <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
                    <Text style={styles.storyTitleText}>{this.props.story.author}</Text>
                    <Text style={styles.storyTitleText}>{this.props.story.description}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={'heart'} color={'white'} size={RFValue(30)}/>
                        <Text style={styles.storyTitleText}>12K</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
         flex: 1 
       },
     cardContainer: { 
         margin: RFValue(13), 
         backgroundColor: "#2f345d", 
         borderRadius: RFValue(20) 
       }, 
       storyImage: { 
           resizeMode: "contain", 
           width: "95%", 
           alignSelf: "center", 
           height: RFValue(250)
        }, 
        titleContainer: { 
            paddingLeft: RFValue(20), 
            justifyContent: "center"
        }, 
        storyTitleText: {
             fontSize: RFValue(25), 
             fontFamily: "Bubblegum-Sans", 
             color: "white" 
           }, 
           storyAuthorText: { 
               fontSize: RFValue(18), 
               fontFamily: "Bubblegum-Sans", 
               color: "white"
            },
                descriptionText: {
                     fontFamily: "Bubblegum-Sans", 
                     fontSize: 13, 
                     color: "white", 
                     paddingTop: RFValue(10) 
                   }, 
                   actionContainer: { 
                       justifyContent: "center", 
                       alignItems: "center", 
                       padding: RFValue(10) 
               },
                likeButton: {
                     width: RFValue(160), 
                     height: RFValue(40), 
                     justifyContent: "center", 
                     alignItems: "center", 
                     flexDirection: "row", 
                     backgroundColor: "#eb3948", 
                     borderRadius: RFValue(30) 
                   },
                    likeText: {
                         color: "white", 
                         fontFamily: "Bubblegum-Sans", 
                         fontSize: RFValue(25), 
                         marginLeft: RFValue(5) 
                       } 
                   });