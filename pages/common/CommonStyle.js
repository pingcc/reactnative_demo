import {StyleSheet} from 'react-native';

const CommonStyle = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#2f88ff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
    },
    buttonStyle_top_bottom: {
        backgroundColor: '#2f88ff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        marginTop:20,
        marginBottom:20
    },
    buttonStyle_top: {
        backgroundColor: '#2f88ff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        marginTop:20,
    },
    buttonStyle_bottom: {
        backgroundColor: '#2f88ff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        marginBottom:20,
    },

    buttonChildStyle: {
        height:44,
        textAlign:'center',
        color:'white',
        fontSize:18,
        lineHeight:44
    },

    //标题公共样式

    _column_container: {
        flexDirection: "row",
    },

    _title_bar_view: {
        flex: 1,
        justifyContent: 'center',//子控件主轴居中，同步布局方向（默认是垂直方向）
        //  alignSelf: 'center',//相当于侧轴父控件居中

        // flexDirection:'row',
        alignItems: 'center'//子控件侧轴居中，默认水平居中
    },

    _title_bar_image_left: {
        flex: 1,
        alignSelf: 'flex-start',
        resizeMode: 'center',
    },
    _title_bar_image_right: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'flex-end'
    },
})
module.exports = CommonStyle