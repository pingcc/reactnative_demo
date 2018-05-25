import React, {Component} from 'react';
import {
    StyleSheet,
   Image,
} from 'react-native';
import {TabNavigator,TabBarBottom} from 'react-navigation';
import FlatList from "./FlatList";
import App from "./App";
import welcome from "./Home";
import echart1 from "./echart1";

export default TabNavigator({

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
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    tabBarComponent:TabBarBottom,
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
         // activeTintColor: '#008AC9', // 文字和图片选中颜色
         // inactiveTintColor: '#999', // 文字和图片默认颜色
         showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        showLabel:true,

        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      /*  style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },*/
    },
});


const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
