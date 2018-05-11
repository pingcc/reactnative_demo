/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
// import ToastExample from '../ToastExample';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToolbarAndroid,
    ToastAndroid,
    Platform,
    BackHandler,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import * as UiUtils from "./UiUtil";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

var currTime;
export default class App extends Component<Props> {
    static navigationOptions = {
        title: '首页',//设置标题内容
        titleColor: "#ff0",
        titleTextColor:"#ff0",
        backgroundColor:"#000",
    }



    constructor(props) {
        super(props);
        var i = 1;
        this.state = {showText: i, text: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(() => {
                return {showText: i++};
            });
        }, 1000);
    }

    render() {

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
            </View>
        );
    }

    _onClickText() {
        UiUtils.showToast("you click text");
        // ToastExample.show("you click text");
        //   debugger

        this.props.navigation.navigate("go2", {
            string: "15411", callback: () => {
            }
        })

        this.setState(state => {
            return {text: !state.text};
        })

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
