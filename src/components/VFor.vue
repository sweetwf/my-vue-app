<template>
  <div>
    <!-- v-for 列表渲染数组 key-->
    <ul class="v-for-array">
      <li v-for="item in items" :key="item.id">{{item.msg}}</li>
    </ul>
    <ol>
      <li v-for="(item,index) in items" :key="item.id">v-for-in:{{item.msg}}-{{index}}</li>
    </ol>
    <ul>
      <li v-for="(item,index) of items" :key="item.id">v-for-of:{{item.msg}}----{{index}}</li>
    </ul>

    <!-- v-for 渲染对象 -->
    <ul class="v-for-object">
      <li v-for="(value,key,index) in object" :key="index">{{index}}:{{key}}----{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'VFor',
  data(){
    return {
      items:[
        {msg:"11111",id:"1"},
        {msg:"22222",id:"2"}
        ],
        object:{
          age:12,
          gender:'man',
          hobby:'swimming'
        }
    }
  }
}
</script>