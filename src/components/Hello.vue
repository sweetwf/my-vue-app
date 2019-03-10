<template>
<div>
    <!-- 声明式渲染，模板语法 -->
    <div class="message-module">
        <p>{{message}}</p>
    </div>

    <!-- 条件 -->
    <div class="v-if-module">
        <p v-if="seen">现在你看见我了</p>
    </div>

    <!-- 循环 -->
    <div class="v-for-module">
        <ul>
            <li v-for="item in todos" v-bind:key="item.id">{{item.text}}</li>
        </ul>
    </div>

    <!-- 处理用户输入 -->
    <div class="v-on-module">
        <p>{{msg}}</p>
        <button v-on:click="reverseMessage">逆转消息</button>
    </div>
</div>
</template>

<script>
export default {
  name: "hello",
  props: {
    message: String
  },
  data:function(){
    return {
        seen:true,
        todos:[
            {id:1,text:"vue.js"},
            {id:2,text:"typescript"}
        ],
        msg:"1234567890"
    }
  }, 
  methods:{
      reverseMessage:function(){
          this.msg = this.msg.split('').reverse().join('')
      }
  },

};
</script>

<style lang="less">
p {
  font-size: 30px;
}
</style>



