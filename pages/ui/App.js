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
import * as UiUtils from "../tools/UiUtil";
import {connect} from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

var currTime;

class App extends Component<Props> {
    static navigationOptions = {
        title: '首页',//设置标题内容
        titleColor: "#ff0",
        titleTextColor: "#ff0",
        backgroundColor: "#000",
    }


    componentDidMount() {
        // 安卓 设备返回键监听
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }

    }

    // 组件销毁前移除事件监听
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    // 安卓返回按钮点击监听
    onBackAndroid = () => {
        const routers = this.props.routes;
        if (routers.length > 1) {
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();

            if (this.refs.toast) {
                this.refs.toast.show('再按一次退出应用');
            }
            return true;
        }
    };

    constructor(props) {
        super(props);
        this.state = {showText: 0, text: true};


    }

    componentWillMount() {
        // 每1000毫秒对showText状态做一次取反操作
        var i = 0;

        this.timer = setInterval(() => {
            this.setState(()=>{
                return {showText: i++};
            });
        }, 1000);
    }


    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
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
                <Toast //自定义toast
                    ref="toast"
                    style={{backgroundColor: 'red'}}
                    position='top'
                />
            </View>
        );
    }

    _onClickText() {
        UiUtils.showToast("you click text");
        // ToastExample.show("you click text");
        //   debugger

        this.props.navigation.navigate("go2", {
            skey: "15411", juh: "awm", callback: () => {
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
export default connect(state => ({
    routes: state.nav.routes
}), dispatch => ({}))(App);