import React, {Component} from 'react';
import {
    StyleSheet,
   Image,
} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import App from "./App";
import welcome from "./Home";
import echart1 from "./echart1";

const MainBottomTab = createMaterialBottomTabNavigator({

    PageOne : {
        screen :App,
        navigationOptions:{
            tabBarLabel:'App',
            tabBarIcon : ({tintColor , focused})=>(focused?
                <Image source={require('../Image/tab_btn_home_hl.png')}style={styles.icon}/>:
                <Image source={require('../Image/tab_btn_home.png')}style={styles.icon}/>),
        }
    },
    PageTwo : {
        screen : welcome,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon : ({tintColor ,focused}) =>(focused?
                <Image source={require('../Image/tab_btn_race_hl.png')}
                       style={styles.icon}/>:
                <Image source={require('../Image/tab_btn_race.png')}
                       style={styles.icon}/>)
        }
    },
    PageThree : {
        screen : echart1,
        navigationOptions:{
            tabBarLabel:'echart1',
            tabBarIcon : ({tintColor ,focused}) =>(focused?
                <Image source={require('../Image/tab_btn_user_hl.png')}
                       style={styles.icon}/>:
                <Image source={require('../Image/tab_btn_user.png')}
                       style={styles.icon}/>)
        }
    }
},{
    animationEnabled: false, // 切换页面时不显示动画
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    activeTintColor: '#548AFF', // 文字和图片选中颜色
    inactiveTintColor: '#333', // 文字和图片默认颜色
    barStyle: { backgroundColor: '#fff' },

});


const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

export default MainBottomTab;
