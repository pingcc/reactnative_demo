import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';

var param;
export default class ListViewBasics  extends Component {
    // 初始化模拟数据

    constructor(props) {
        super(props);
         param=this.props.navigation.state.params
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        console.log(param.string);
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
        if (param.callback)
            param.callback();
    }



}