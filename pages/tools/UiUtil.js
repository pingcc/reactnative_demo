import {ToastAndroid} from "react-native";

const UiUtil={
    showToast(str){
        return ToastAndroid.showWithGravity(str,ToastAndroid.SHORT,ToastAndroid.CENTER);
    }

}

module.exports=UiUtil