/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
// import ToastExample from '../ToastExample';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToolbarAndroid,
    ToastAndroid,
    Platform,
    BackHandler,
    NativeModules,
} from 'react-native';
import * as UiUtils from "../tools/UiUtil";
import Toast, {DURATION} from 'react-native-easy-toast'
import BaseComponent from "./BaseComponent";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

var currTime;
var nativeModule = NativeModules.OpenNativeModule;
export default class App extends BaseComponent {


    static navigationOptions = (params) => {

    };



    // 安卓返回按钮点击监听
    onBackAndroid = () => {

        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();

        if (this.refs.toast) {
            this.refs.toast.show('再按一次退出应用');

            return true;
        }
    };

    constructor(props) {
        super(props);
        this.state = {showText: 0, text: true};


    }

    componentDidMount() {
        super.componentDidMount();
        // 每1000毫秒对showText状态做一次取反操作
        var i = 0;

        this.timer = setInterval(() => {
            this.setState(() => {
                return {showText: i++};
            });
        }, 1000);
    }


    componentWillUnmount() {
        super.componentWillUnmount()
        this.timer && clearInterval(this.timer);
    }

    renderStatusBar() {
        return (<StatusBar
            animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
            hidden={false}  //是否隐藏状态栏。
            backgroundColor={'gray'} //状态栏的背景色
            translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
            barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
        />)
    }

    renderComponent() {
        let display = this.state.showText;
        let displays = this.state.text ? "取消点击cancel" : "我被点击ok";
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    // activeOpacity={0.5}
                    onPress={() => this._onClickText()}>
                    <Text style={styles.welcome}>
                        Welcome to React Native! Thank you for your help
                    </Text>
                </TouchableOpacity>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text>{display}</Text>
                <Text>{displays}</Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Toast //自定义toast
                    ref="toast"
                    style={{backgroundColor: 'red'}}
                    position='center'
                />
            </View>);
    }

    _onClickText() {
        //跳转到原生界面
        // debugger
        // if(this.props.flag1)
        nativeModule.openNativeVC("哈哈哈哈哈哈");
       /* UiUtils.showToast("you click text");
        // ToastExample.show("you click text");
        //   debugger

        this.props.navigation.navigate("FlatList")

        this.setState(state => {
            return {text: !state.text};
        })*/

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#666',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
