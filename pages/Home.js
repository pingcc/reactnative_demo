import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    StyleSheet,
    DeviceEventEmitter
} from 'react-native';
import CommonStyle from "./common/CommonStyle";

var toolbarActions = [
    {title: 'Create', icon: require('../image/ic_user_ludan.png'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: require('../image/ic_user_ludan_add.png'), show: 'always'},
];
export default class Home extends Component {
    constructor(props) {
        GlobalUtil.log("构造方法--->", "constructor")
        super(props);
        this.state = {
            text: '',
            buttonEnable: false
        };
    }

    static defaultProps = {};

    static navigationOptions = ({
                                    navigation,
                                    screenProps
                                }) => ({
        title: 'Home',
        headerStyle: {
            backgroundColor: 'gray',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: "center",
            flex: 1
        },
        headerRight: (<View>
            <TouchableOpacity
                onPress={() => navigation.state.params.navigatePress()}>
                <Image source={require('../image/ic_user_ludan_add.png')}
                       style={{width: 20, height: 20, marginRight: 10}}/>
            </TouchableOpacity></View>),
        // headerLeft:null,
        // headerLeft:


    });

    render() {//创建视图，改变视图的方法
        GlobalUtil.log("生命周期方法--->", "render()")
        // GlobalUtil.log(this.props.navigation.state.params.skey)
        // GlobalUtil.log(this.props.navigation.state.params.juh)
        return (
            <ScrollView>
                <View style={styles._column_container}>
                    <Text style={{width:50}}>Hello world !</Text>
                    <Text>Hello world! </Text>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>

                    <View style={[styles._row_container, {height: (GlobalUtil.getDeviceWidth() + 80) / 3}]}>

                        <Image source={{
                            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526298855221&di=d9a2c8b05f09fb0469ce60a4511db126&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201607%2F25%2F20160725213118_3AHJT.jpeg"
                        }}
                               style={styles._img_style}
                        />

                        <Image source={{

                            uri: "https://wx4.sinaimg.cn/mw690/50868c3fly1fr54m4g8orj22kw3vckjq.jpg"

                        }}
                               style={styles._img_style}
                        />
                        <Image source={{
                            uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525344619095&di=410938097795b3c9711d4824b53f4320&imgtype=0&src=http%3A%2F%2Ftpic.home.news.cn%2FxhCloudNewsPic%2Fxhpic1501%2FM0B%2F39%2FED%2FwKhTlFimQGSETH5AAAAAABr8DXY996.jpg"
                        }}
                               style={styles._img_style}
                        />


                    </View>
                    <Text>Hello world!</Text>
                    <Text>Hello world!</Text>


                    <View style={{
                        flex: 1,
                        // flexDirection: 'column',
                        // flex-start、center、flex-end、space-around以及space-between。
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Type here to translate!"
                            onChangeText={(text) => this.setState({
                                text: text,
                                buttonEnable: (text.length > 0) ? true : false
                            })}
                        />

                        <Text style={{padding: 10, fontSize: 42}}>
                            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                            {/*{this.state.text}🍕*/}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[CommonStyle.buttonStyle_top_bottom, {backgroundColor: this.state.buttonEnable ? '#2f88ff' : '#accfff'}]}
                        activeOpacity={0.8}
                        onPress={()=>{
                            alert("你输入了:"+this.state.text)
                        }}
                        disabled={!this.state.buttonEnable}>
                        <Text style={CommonStyle.buttonChildStyle}>
                                click me!
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>

        );
    }

// 第一次执行方法 :constructor()--->
// componentWillMount()--->render()---->componentDidMount()-----    ponentWillReceiveProps()
//     componentWillUpdate()---->render()---->componentDidUpdate()
    //在render前，getInitalState之后调用
    // render：组件渲染函数，会返回一个Virtual DOM，只允许返回一个最外层容器组件
    componentWillMount() {
        GlobalUtil.log("生命周期方法--->" + GlobalUtil.getDeviceWidth(), "componentWillMount")
    }

    // 在render渲染之后，React会根据Virtual DOM来生成真实DOM，生成完毕后会调用该函数
    componentDidMount() {//on
        GlobalUtil.log("生命周期方法--->", "componentDidMount")
        // 处理数据源
        // this.handlerDataSource();
        this.props.navigation.setParams({navigatePress: this._onPressButton})

        this.subscription = DeviceEventEmitter.addListener('noticeName', (userName) => {
            GlobalUtil.log(userName) //收到消息页面通知
        })
        this.subscription1 =DeviceEventEmitter.addListener('noticeName1', (userName) => {
            GlobalUtil.log(userName) //收到消息页面通知
        })
    }

    componentWillReceiveProps() {//属性props改变回调的方法
        GlobalUtil.log("生命周期方法--->", "componentWillReceiveProps")
    }

    componentWillUpdate() {//绑定状态发生改变执行componentWillUpdate()-->render()--->componentDidUpdate()
        GlobalUtil.log("生命周期方法--->", "componentWillUpdate")

    }

    componentDidUpdate() {
        GlobalUtil.log("生命周期方法--->", "componentDidUpdate")

    }

    componentWillUnmount() {//销毁页面执行的方法
        GlobalUtil.log("生命周期方法--->", "componentWillUnmount")
      this.subscription.remove();//移除消息通知
        this.subscription1.remove();//移除消息通知
     /*  DeviceEventEmitter.removeListener("noticeName", this.subscription )
        DeviceEventEmitter.removeListener("noticeName1", this.subscription1 )*/
    }

    _onPressButton = () => {
        this.props.navigation.navigate("go3", {
            string: this.state.text, callback: () => {
            }
        })
    }
}
const styles = StyleSheet.create({
    _column_container: {
        flex: 1,
        // flexDirection: "row"
        flexDirection: "column"

    },
    _row_container: {
        // paddingLeft:10,
        paddingRight: 10,
        flexDirection: "row",
    },
    _img_style: {
        borderRadius: 10,
        marginLeft: 10,
        flex: 1,
        // width: Dimensions.get('window').width / 3,
        // 设置高度
        //   height: (Dimensions.get('window').width- 40) / 3,
        /*
         cover 保持图片宽高比，直到宽度和高度都大于等于容器视图的尺寸（参考下图效果）
              contain 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸
               stretch 拉伸图片且不维持宽高比，直到宽高都刚好填满容器
               center 居中不拉伸*/
        resizeMode: 'cover'
    }
})

