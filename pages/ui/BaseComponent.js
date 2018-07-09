import React, {PureComponent} from "react";
import {SafeAreaView} from 'react-navigation';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity,
} from "react-native";


import NavigationOptionsHelper from "../tools/NavigationOptionsHelper";

/**
 * 自定义的右边菜单栏
 */
export function CustomRightMenuView() {
    return <View style={{alignItems: 'center', width: 65, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 16}}>保存</Text>
    </View>

}

export default class BaseComponent extends PureComponent {
    /**
     * todo 传递方法{pageTitle:'titleText',
     * isShowRightMenu:false,
     * customRightMenuView:<View/>
     * key:value},
     * */

    static navigationOptions = (params) => {
        let pageTitle = (params.navigation.state.params && params.navigation.state.params.pageTitle) ? params.navigation.state.params.pageTitle : '未知名';
        let isShowRightMenu = (params.navigation.state.params && params.navigation.state.params.isShowRightMenu) ? params.navigation.state.params.isShowRightMenu : null;
        let customRightMenuView = (params.navigation.state.params && params.navigation.state.params.customRightMenuView) ? params.navigation.state.params.customRightMenuView : null
        return NavigationOptionsHelper.navigationOptions(pageTitle,
            isShowRightMenu ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        CallOnceInInterval.onPress(() => {
                            params.navigation.state.params.navigatePress()
                        })
                    }}>
                    {customRightMenuView}
                </TouchableOpacity> : <View/>)
    }


    /**
     * 网络请求
     */
    initData() {

    };

    /**
     * 点击右边菜单按钮
     */
    onClickRightMenu() {


    }

    componentDidMount() {
        this.props.navigation.setParams({navigatePress: this.onClickRightMenu})
        this.initData();
    }

    componentWillUnmount() {

    }

    constructor(props) {
        super(props);
        this.renderComponent = this.renderComponent.bind(this);

        this.state = {


            //pageLoad
            isLoad: true,//是否加载
        };

    }


    /**
     * 渲染子组件
     */
    renderComponent() {
    };
    /**
     * 渲染状态栏
     */
    renderStatusBar(){
        return GlobalUtil.getStatusBar()
    }
    render() {
        return (
            <SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={[styles.container]}>
                {this.renderStatusBar()}
                {this.renderComponent()}
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

});