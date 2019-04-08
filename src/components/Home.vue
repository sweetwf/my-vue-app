<template>
  <div>
    {{this.$route.params.username}}
  </div>
</template>
<script>
export default {
    computed:{
    username(){
      // 当前路由 this.$route   路由器 this.$router
      return this.$route.params.username
    }
  },
  methods:{
    goBack(){
      window.history.length > 1?
      this.$router.go(-1):
      this.$router.push('/')
    }
  }
}
</script>