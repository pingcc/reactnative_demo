import {Dimensions} from "react-native";

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

