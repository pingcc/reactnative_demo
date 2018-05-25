import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

/**
 * model: {title(销售额 （元）), titlePrice(1323156451456413),leftTitle(同比：+100%)
 *   rightTitle(环比：-120%) arrays[itemTitle(目标销售（元),itemPrice(1323156451456413),marginTop},part(列数)
 *   ,
 *   callBack .
 *    example:
 *    <LLMainDetailUtilHeader
 model= {{
                        title: '销售额 （元）',
                        titlePrice: 1323156451456413,
                        leftTitle: '同比：+100%',
                        rightTitle: '环比：-120%',
                        part: 3,
                        arrays: [{itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"},
                            {itemTitle: "目标销售(元)", itemPrice: "1323156451456413"}]
                        }}
 callback={() => {
                        alert('LLMainDetailUtilHeader')
                    }}
 />
 */

export default class LLMainDetailUtilHeader extends Component {

    createItem() {
        if (!this.props.model.arrays)
            return;
        var tempArr = []
        var self = this;
        self.props.model.arrays.forEach((item, index) => {
            tempArr.push(
                <View
                    style={{
                        width: GlobalUtil.getDeviceWidth() / self.props.model.part,
                        marginTop: item.marginTop ? item.marginTop : 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                    <View
                        style={{flex: 1, alignItems: 'center'}}>
                        <Text> {item.itemTitle}</Text>
                        <Text>{GlobalUtil.thousandthToQfw(item.itemPrice)}</Text>
                    </View>
                    <View style={{
                        display: (index + 1 % self.props.model.part === 0 || index === self.props.model.arrays.length - 1) ? 'none' : 'flex',
                        height: 20,
                        width: 1,
                        backgroundColor: '#333'
                    }}></View>
                </View>)
        })
        debugger
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {tempArr}
            </View>
        )

    }


    render() {
        var self = this
        const item = this.createItem()
        return (
            <TouchableOpacity onPress={() => {
                CallOnceInInterval.onPress(() => {
                    self.props.callback ? self.props.callback() : undefined
                })
            }} activeOpacity={0.8}>
                <View style={{flexDirection: "column"}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{color: '#333', fontSize: 18}}>{self.props.model.title}</Text>
                        <Text style={{color: '#2f88ff', fontSize: 18}}>
                            {GlobalUtil.thousandthToQfw(self.props.model.titlePrice)}
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#666', fontSize: 16}}>{self.props.model.leftTitle}</Text>
                            <Text style={{
                                marginLeft: 40,
                                color: '#666',
                                fontSize: 16
                            }}>{self.props.model.rightTitle}</Text>
                        </View>
                    </View>

                    {item}


                </View>
            </TouchableOpacity>
        )
    }
}