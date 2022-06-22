import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker'

export default class CreatePost extends Component{
    constructor(){
        super();
        this.state={
            fontsLoaded:false,
            previewImage:'image_1',
            dropDownHeight:40
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }

    componentDidCatch(){
        this.async_loadFontsAsync();
    }

    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        }else{
            var previewImages={
                'image_1':require('../assets/image_1.jpg'),
                'image_2':require('../assets/image_2.jpg'),
                'image_3':require('../assets/image_3.jpg'),
                'image_4':require('../assets/image_4.jpg'),
                'image_5':require('../assets/image_5.jpg'),
                'image_6':require('../assets/image_6.jpg'),
                'image_7':require('../assets/image_7.jpg'),
        }
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')} style={{width:60, height:60, 
                        resizeMode:'contain', marginLeft:10}}/>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Create a Story</Text>
                    </View>
                    <View style={styles.fieldsContainer}>
                        <ScrollView>
                            <Image source={previewImages[this.state.previewImage]} style={{width:'93%', 
                        height:RFValue(250), resizeMode:'contain', marginVertical:RFValue(10), borderRadius:RFValue(10),
                        alignSelf:'center'}}/>
                        <View style={{height:RFValue(this.state.dropDownHeight)}}>
                            <DropDownPicker
                            items={[
                                {label:'Image_1', value:'image_1'},
                                {label:'Image_2', value:'image_2'},
                                {label:'Image_3', value:'image_3'},
                                {label:'Image_4', value:'image_4'},
                                {label:'Image_5', value:'image_5'},
                            ]}
                            defaultValue={this.state.previewImage}
                            containerStyle={{
                                height:40, 
                                borderRadius:RFValue(20),
                                marginBottom:RFValue(10),
                                marginHorizontal:RFValue(20)
                                }}
                                onOpen={()=>{
                                    this.setState({dropDownHeight:170})
                                }}
                                onClose={()=>{
                                    this.setState({dropDownHeight:40})
                                }}
                                style={{backgroundColor:'transparent'}}     
                                ItemStyle={{justifyContent:'flex-start'}}
                                dropDownStyle={{backgroundColor:'teal'}}
                                labelStyle={{color:'white', fontFamily:'Bubblegum-Sans'}}
                                arrowStyle={{color:'white', fontFamily:'Bubblegum-Sans'}}
                                onChangeItem={(item)=>{
                                    this.setState({previewImage:item.value})
                                }}
                                />
                                <TextInput
                                    placeholder={'Title'}
                                    placeholderTextColor='white'
                                    onChangeText={(title)=>{
                                        this.setState({title})
                                    }}  
                                />
                                <TextInput
                                    placeholder={''}
                                    placeholderTextColor='white'
                                    onChangeText={(description)=>{
                                        this.setState({description})
                                    }}  
                                />
                                <TextInput
                                    placeholder={'Moral of the story'}
                                    placeholderTextColor='white'
                                    onChangeText={(moral)=>{
                                        this.setState({moral})
                                    }}  
                                    multiline={true}
                                    numberOfLines={4}
                                    style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                                />
                               

                                
                        </View>
                        </ScrollView>
                    </View>
                </View>
                 
            </View>
        )
            }   
        }
    }

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#15193c" }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) }, appTitle: { flex: 0.07, flexDirection: "row" }, appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" }, iconImage: { width: "100%", height: "100%", resizeMode: "contain" }, appTitleTextContainer: { flex: 0.7, justifyContent: "center" }, appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" }, fieldsContainer: { flex: 0.85 }, previewImage: { width: "93%", height: RFValue(250), alignSelf: "center", borderRadius: RFValue(10), marginVertical: RFValue(10), resizeMode: "contain" }, inputFont: { height: RFValue(40), borderColor: "white", borderWidth: RFValue(1), borderRadius: RFValue(10), paddingLeft: RFValue(10), color: "white", fontFamily: "Bubblegum-Sans" }, inputFontExtra: { marginTop: RFValue(15) }, inputTextBig: { textAlignVertical: "top", padding: RFValue(5) } });