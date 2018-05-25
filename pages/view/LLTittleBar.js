import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform,Dimensions} from "react-native";
import CommonStyle from "../Common/CommonStyle.js";

/**
 *  one custom header TittleBar
 */

class LLTittleBar extends Component {
    static props = {
        inVisibleLeftImage: false,
        requireLeftImage:null,
        clickLeftImageCallBack: undefined,
        clickRightImageCallBack: undefined,
        inVisibleRightImage: false,
        requireRightImage:null ,
        backgroundColor: null,
        middleView: undefined,
    }

    _createLeftImage() {
        var self = this;
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => self.props.clickLeftImageCallBack()}>
                <Image style={[CommonStyle._title_bar_image_left, {display: self.props.inVisibleLeftImage ? 'flex' : 'none'}]}
                       source={self.props.requireLeftImage}
                />
            </TouchableOpacity>
        )
    }

    _createRightImage() {
        var self = this;
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => self.props.clickRightImageCallBack()}>
                <Image style={[CommonStyle._title_bar_image_right, {display: self.props.inVisibleRightImage ? 'flex' : 'none'}]}
                       source={self.props.requireRightImage}/>
            </TouchableOpacity>
        )
    }


    render() {
        // debugger
        var self = this;
        const leftImageComponent = self._createLeftImage();
        const rightImageComponent = self._createRightImage();
        return (
            <View>
                <View style={{height:Platform.OS=='ios'?GlobalCommonFunc.isIphoneX()?44:20:0,backgroundColor:'#2f88ff'}}></View>
                <View style={{flexDirection: "row",
                    height: Platform.OS=='ios'?44:56,
                    backgroundColor: self.props.backgroundColor?self.props.backgroundColor:'red'
                }}>

                    {leftImageComponent}

                    {self.props.middleView}

                    {rightImageComponent}

                </View>
            </View>


        )


    }


}



export default LLTittleBar
