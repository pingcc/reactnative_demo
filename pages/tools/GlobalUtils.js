import {Dimensions} from "react-native";
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
    }

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
