<template>
  <div class="recommend">
    <div v-for="(item,index) in recommmends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommmends: {
        type: Array,
                      default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .recommend {
    display: flex;
   width: 100%;
 }

  .recommend-item {
    flex: 1;
  }


</style>
