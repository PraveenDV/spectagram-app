import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

export default class Feed extends Component{
    renderItem=()=>{
        return <PostCard
            story={post}
        />
    }
    keyExtractor=(item, index)=>{
        index.toString();
    }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View>
                        <Image
                        source={require("../assets/logo.png")}>    
                        </Image>
                    </View>
                    <View>
                        <Text>Spectagram App</Text>
                    </View>
                    <View>
                        <FlatList
                         keyExtractor={this.keyExtractor}
                         data={posts}
                         renderItem={this.renderItem}
                        />
                    </View>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#15193c" }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) }, appTitle: { flex: 0.07, flexDirection: "row" }, appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" }, iconImage: { width: "100%", height: "100%", resizeMode: "contain" }, appTitleTextContainer: { flex: 0.7, justifyContent: "center" }, appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" }, cardContainer: { flex: 0.93 } });