import React, {Component} from 'react';
import {View, Platform, Dimensions} from "react-native";



class LLTittleViewBar extends Component {
    static props = {
        backgroundColor: null,
        middleView: undefined,


    }


    render() {
        // debugger
        var self = this;
        const middleView = self.props.middleView

        return (

            <View style={{flexDirection: "row",
                height: titleBarHeight,
                backgroundColor: self.props.backgroundColor?self.props.backgroundColor:'red'
            }}>

                {middleView}


            </View>
        )


    }


}


const titleBarHeight = Platform.OS == 'ios' ? ((GlobalUtil.getDeviceWidth() === 375 && GlobalUtil.getDeviceHeight() === 812) ? 50 : 44) : 56


export default LLTittleViewBar