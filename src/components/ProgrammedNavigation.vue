<template>
  <!-- 编程式导航 -->
  <div>
    <!-- <p>
      <router-link :to="VFor">Go to Home</router-link>
    </p> -->
    <!-- <p @click.stop="goWhere">点我跳转到啊！！</p> -->
    <p>lsdfknd{{this.$route.params}}</p>
  </div>
</template>

<script>
export default {
  name:'programmedNavigation',
  // methods:{
  //   goWhere(){
  //     this.$router.push('VFor');
  //   },

  // }
}
</script>
