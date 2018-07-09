import React from 'react';
import {
    Dimensions, Platform, StatusBar,
} from "react-native";
import LLAxios from '../network/LLAxios'

const GlobalUtils = {
    log(...params) {
        if (GLOBAL.__DEV__)
            console.log(params)
    },
    getDeviceWidth() {
        return Dimensions.get('window').width
    },
    getDeviceHeight() {
        return Dimensions.get('window').height
    },
    // 千分位
    thousandthToQfw(n) {
        var str_n = n.toString();
        var result = "";
        while (str_n.length > 3) {
            result = "," + str_n.slice(-3) + result;
            str_n = str_n.slice(0, str_n.length - 3)
        }
        if (str_n) {
            console.log(str_n + result)
            return str_n + result
        }
    },
    getStatusBar(color) {
        if (Platform.OS === 'ios')
            return <StatusBar
                barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
            />
        return (
            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false}  //是否隐藏状态栏。+
                backgroundColor={color ? color : "#548AFF"} //状态栏的背景色
                translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
            />
        )
    },

}
// 按钮防止连续点击,默认间隔一秒 ,使用： onPress={()=>CallOnceInInterval.onPress( ()=>{})}
const CallOnceInIntervals = {
    lastPressTime: 1,
    onPress(callback) {
        let curTime = new Date().getTime();
        if (curTime - this.lastPressTime > 1000) {
            this.lastPressTime = curTime;
            callback();
        }
    },

};

global.GlobalUtil = GlobalUtils
global.CallOnceInInterval = CallOnceInIntervals

global.LLAxio = LLAxios //获取全局网络工具类
