import {requestUltimate} from "./request";
//为何单独封装一个home请求文件?
// 因为如果直接在vue组件中进行网络请求操作的话,分工不明确.vue组件只需要关心得到哪些数据,并不需要知道url等关于网络配置的信息
//这样的好处是,Home.vue只需要对照home.js来调用api进行各种网络请求,相当于在数据和页面逻辑中加了一层请求层

export function getHomeMultidata() {
  return requestUltimate({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return requestUltimate({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
export function bbb() {
  return requestUltimate({
    url: '/home/multidata'
  })
}
export function ccc() {
  return requestUltimate({
    url: '/home/multidata'
  })
}
