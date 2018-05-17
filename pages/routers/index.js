import ListViewBasics from "../ui/ListViewBasics";
import App from "../ui/App";
import Splash from "../ui/Splash";
import welcome from "../ui/Home";
import FlatList from "../ui/FlatList";
import {StackNavigator} from "react-navigation";
import Main from "../ui/MainBottomTab";
import '../tools/GlobalUtils'//全局文件需要在配置文件中导入

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
