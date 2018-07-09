import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import BaseComponent from "./BaseComponent";

var param;
export default class ListViewBasics extends BaseComponent {
    // 初始化模拟数据

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    renderStatusBar() {
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }


    componentWillUnmount() {//销毁页面执行的方法
        super.componentWillUnmount();

    }


}