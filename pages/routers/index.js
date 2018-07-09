import {AppRegistry, Platform} from 'react-native';

import ListViewBasics from "../ui/ListViewBasics";
import App from "../ui/App";
import Splash from "../ui/Splash";
import Home from "../ui/Home";
import HomeChild from "../ui/HomeChild";
import FlatList from "../ui/FlatList";
import {createStackNavigator} from 'react-navigation';

import Main from "../ui/MainBottomTab";
import '../tools/GlobalUtils'//全局文件需要在配置文件中导入

let SimpleApp = createStackNavigator({
    Splash,
    Main,
    App,
    Home,
    HomeChild,
    FlatList,
    ListViewBasics,
}, {
    initialRouteName: 'Main',
    headerMode: 'screen',
    StatusBar: {
        barStyle: 'light-content',
    },
    navigationOptions: {
        headerStyle: {
            height: 0, marginTop: Platform.OS == 'ios' ? global.isIPhoneX ? -44 : -20 : 0, borderBottomWidth: 0,
        },
    }
})


AppRegistry.registerComponent('demo', () => SimpleApp);