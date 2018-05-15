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
})
module.exports = CommonStyle