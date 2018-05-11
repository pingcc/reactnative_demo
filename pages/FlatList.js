import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View ,DeviceEventEmitter } from 'react-native';
import axios from 'axios';
import * as FastClickUtils from "./FastClickUtils";
import LogUtil from "./LogUtil";
import { connect } from 'react-redux';

class SectionListBasics extends Component {
    render() {
        var SectionListBasics_this=this;
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item } onPress={SectionListBasics_this._onClickText.bind(SectionListBasics_this)}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}   onPress={()=>this._onClickText()}>{section.title}</Text>}
                />
            </View>
        );
    }
    _onClickText(){
   /*     if(FastClickUtils.isFastClick())
            return;*/
        // debugger
     const { routes } = this.props;
    //     var routes  = this.props.routes;
        this.props.navigation.goBack(routes[1].key); //跳转到第一个配置的routes
         // this.props.navigation.goBack();
        /*  DeviceEventEmitter.emit('noticeName', "通知事件");//发送消息通知其它页面方法
           this.props.navigation.navigate("go4", {
               string: "15411", callback: () => {
                   console.log("回到界面的回调","<-----");
               }
           })*/
      /*  var instance = axios.create({
            baseURL: 'http://ws.sandbox.mammasay.com',
            timeout: 1000,

            headers: {'Content-Type': 'application/json;charset=utf-8',"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6IjY5MjI5ZmQ3LWRhYzgtNDk0OS1iNjU1LTNjYTdiZGU3NTQxMSIsIlRlbmFudElkIjoxLCJVc2VySWQiOjIzLCJNZW1iZXJJZCI6MjEsIkF2YXRhciI6Imh0dHA6Ly9pbWcubWFtbWFzYXkuY29tL2ltYWdlLzIwMTgwMTA1LzYzNjUwNzU5NjYwMjAxOTI5MjgxOTMxNzIuanBnIiwiUmVhbE5hbWUiOiLlv4bwn5mEIiwiTmlja05hbWUiOiLpnLLlronpgILlrqLmnI3kuK3lv4MiLCJQaG9uZSI6IjE3NjIwMTg1ODU5IiwiU2Vzc2lvbktleSI6bnVsbH0.KigSAgr8Q2oTYNx20gCugicSbkDXnYipaYwKiQRQVrg"}
        });
        instance.get("/api/daogoubao/user/getDaogou").then((rp)=>{
            LogUtil.log(rp)
        })*/
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})



export default connect(state => ({
    routes: state.nav.routes //定义routes
}), dispatch => ({}))(SectionListBasics);