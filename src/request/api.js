import http from "./http.js"
//引用md5对密码进行加密
import md5 from 'js-md5'

// 注册接口
export function register(name, pwd) {
    return http.post("/user/register", {
        loginName: name,
        password: pwd
    })
}

//登录接口
export function login(name, pwd) {
    return http.post("/user/login", {
        loginName: name,
        passwordMd5: md5(pwd)
    })
}