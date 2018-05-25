import axios from 'axios'
import { DeviceEventEmitter } from 'react-native';

let base_url = 'https://www.baidu.com';  //服务器地址

var instance = axios.create({
    baseURL: base_url,
    timeout: 40000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'X-Custom-Header': 'foobar',
        Authorization: ''
    },
});

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    // config.headers.Authorization=''; 拦截器
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

//请求响应拦截器
instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('response info :' + response);
    if (response.data.Code == 2) {
        //    用户未登录
        DeviceEventEmitter.emit("UserNeedLoginNotification", "Hello");
        return;
    }
    return response.data;
}, function (error) {
    // Do something with response error
    console.log('response error info :' + error);
    return Promise.reject(error);
});


export default instance;



