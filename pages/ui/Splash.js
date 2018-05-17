import React, {Component} from "react";
import {View,Image,Dimensions, StyleSheet} from "react-native";
import NavigationActions from 'react-navigation/src/NavigationActions';
export default class Splash extends Component<Props> {

    static navigationOptions = {
    header:null
}


    render() {//创建视图，改变视图的方法
        return (
            <View style={styles.container}>

                <Image source={require('../../image/bg_splash.jpg')}
                           style={styles._img_style}
                    />

            </View>
        );
    }

    componentDidMount(){

        const { dispatch }=this.props.navigation

      const resetGuide = NavigationActions.reset({
            index: 0,
            actions: [ NavigationActions.navigate({ routeName: 'Main'}) ] })

        this.timer=setTimeout(() => {
            dispatch(resetGuide)
        }, 2000);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    _img_style: {

        flex: 1,
        width: Dimensions.get('window').width ,
        // // 设置高度
        height: Dimensions.get('window').height,
        /*
         cover 保持图片宽高比，直到宽度和高度都大于等于容器视图的尺寸（参考下图效果）
              contain 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸
               stretch 拉伸图片且不维持宽高比，直到宽高都刚好填满容器
               center 居中不拉伸*/
        resizeMode: 'cover'
    }
})