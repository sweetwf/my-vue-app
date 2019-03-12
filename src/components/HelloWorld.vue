<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Hello message="coming!!!"/>
    <ComputedAndWatch/>
    <ClassAndStyle/>
    <IfAndShow/>
    <VFor/>
    
  </div>
</template>

<script>
import Hello from './Hello';
import ComputedAndWatch from './ComputedAndWatch';
import ClassAndStyle from './ClassAndStyle';
import IfAndShow from './IfAndShow';
import VFor from './VFor'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Hello,
    ComputedAndWatch,
    ClassAndStyle,
    IfAndShow,
    VFor
  }}
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
