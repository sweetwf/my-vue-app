<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Hello message="coming!!!"/>
    <ComputedAndWatch/>
    <ClassAndStyle/>
    <IfAndShow/>
    <VFor/>
    <!-- 组件 -->
    <MyComponent v-for="item of list" :count="item.count" :key="item.id" @addNumber="item.count+= $event"/>

  </div>
</template>

<script>
import Hello from './Hello';
import ComputedAndWatch from './ComputedAndWatch';
import ClassAndStyle from './ClassAndStyle';
import IfAndShow from './IfAndShow';
import VFor from './VFor';
import MyComponent from './MyComponent';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
          list:[
      {id:'1',name:"葡萄",count:1},
      {id:'2',name:"苹果",count:3},
      {id:'3',name:"芒果",count:7},
      {id:'4',name:"香蕉",count:2},
    ]
    }

  },
  components: {
    Hello,
    ComputedAndWatch,
    ClassAndStyle,
    IfAndShow,
    VFor,
    MyComponent
  },
  methods:{
    // onAddNumber:function(num){
      
    // }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
