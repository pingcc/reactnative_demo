import ListViewBasics from "../ListViewBasics";
import App from "../App";
import Splash from "../Splash";
import welcome from "../Home";
import FlatList from "../FlatList";
import {StackNavigator} from "react-navigation";
import Main from "../MainBottomTab";
import '../GlobalUtils'//全局文件需要在配置文件中导入

const SimpleApp = StackNavigator({
    goHome: {screen: Splash},
    Main: {screen: Main},
    go1: {screen: App},
    go2: {screen: welcome},
    go3: {screen: FlatList},
    go4: {screen: ListViewBasics},
},{
    initialRouteName:'goHome'
})

export default SimpleApp
