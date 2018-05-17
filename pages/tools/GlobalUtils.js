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
}

global.GlobalUtil = GlobalUtils

global.LLAxio = LLAxios //获取全局网络工具类
