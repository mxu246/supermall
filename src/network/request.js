import axios from 'axios'
//为什么要单独增加一层封装,因为网络请求用到第三方插件axios,如果不封装
//会导致没个vue组件调用网络请求时都要import axios,如果插件突然不可用,会导致所有组件需要重构

export function request(config, success, fail) {
//  1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h8',
    timeout: 5000
  })
  //传入配置参数,执行请求并处理
  instance(config).then(res => {
    success(res)
  }).catch(err => {
    fail(err)
  })
}

//config需要自带success和fail回调函数
export function request1(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h8',
    timeout: 5000
  })
  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.fail(err)
  })
}

//外面套一个promise
export function requestFinal(config) {
  return new Promise((resolve, reject) => {
//  1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://106.54.54.237:8000/api/h8',
      timeout: 5000
    })
    instance(config)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}

//强烈推荐!!!
//终极方案,因为axios()本身会返回一个promise对象
export function requestUltimate(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h8',
    timeout: 5000
  })

  //axios拦截器
  instance.interceptors.request.use(config => {//请求拦截.传入两个参数,成功和失败callback
    //什么时候需要拦截?
    // 1.比如config信息中一部分信息不符合服务器的要求

    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的动画
    // 请求时show一个会动的loading图片,response后隐藏

    //3. 某些网络请求,比如登录,必须携带一些特殊的信息如token
    return config //拦截config以后,要返回出去,不然内部请求没有config
  }, err => {
  })

  instance.interceptors.response.use(res => {//响应拦截
    return res.data; //可以不返回整个res
  }, err => {
  })

  //最后发送真正的网络请求
  return instance(config)
}
