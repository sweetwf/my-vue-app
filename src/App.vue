<template>
  <div id="app">

    <!--使用router-link 来组件导航  -->
    <router-link to="/VFor">Go to VFor</router-link>
    <router-link to="/IfAndShow">Go to IfAndShow</router-link>
    <router-link to="/Home">Go to Home</router-link>
    <router-link to="/programmed">Go to ProgrammedNavigation</router-link>
    <router-link :to="{name:'User',params:{name:123}}">User</router-link>
    <keep-alive>

        <!-- 路由出口 路由匹配到的组件将渲染在这里 -->
        <!-- <router-view></router-view> -->

    <!-- 命名试图 -->

    <router-view class="view one" ></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
