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

    <!-- 表单输入和应用状态的双向绑定 -->
    <div class="v-model-module">
        <p>{{msg}}</p>
        <input type="text" v-model="msg">
    </div>

    <!-- v-once 执行一次性的插值，当数据改变，插值处的内容不会改变 -->
    <div class="v-once-module">
        <p v-once>{{msg}}</p>
    </div>

    <!-- v-html 输出真正的html代码 -->
    <div class="v-html-module">
        <p>Using mustaches:{{rawHtml}}</p>
        <p>Using v-html directive <span v-html="rawHtml"></span></p>
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
        msg:"1234567890",
        rawHtml:'<span style="color:red">This should be red.</span>'
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



