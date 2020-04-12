<template>
    <div class="tab-bar-item" @click="itemClick">
      <!--这里两个slot条件判断,如果当前路由url含有组件存储的path属性,则显示active的图标-->
      <div v-if="isActive"><slot name="item-icon-active"></slot></div><!--最好用div套在slot外面用v-if-->
      <div v-else><slot name="item-icon"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path:  String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      // home -> item1(/home) = true
      // home -> item1(/category) = false
      // home -> item1(/home/news) = true
      isActive(){
        // return this.$route.path.indexOf(this.path)!==-1
        return this.$route.path.includes(this.path)
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
       this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;/*h49*/
    font-size: 14px;/*fonz14*/
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;/*图片底部默认3px,通过改变垂直对齐的基线*/
    margin-bottom: 2px;
  }

</style>
