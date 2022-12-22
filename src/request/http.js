// 首先先引入aixos
import axios from 'axios'
// 创建一个axios 实例
const http = axios.create({
    // baseURL: process.env.NODE_ENV == 'production' ? 'http://backend-api-01.newbee.ltd/api/v1' : '/api/v1'
    baseURL: 'http://backend-api-01.newbee.ltd/api/v1'
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 最后导出
export default http