<template>
  <div>
    <button @click="addCount">You Click Me {{count}} Times.</button>
    <BaseButton size="small" bordered :disabled="true"/>
  </div>
</template>

<script>

export default {
  name:"MyComponent",
  props:['count'],
  data(){
    return {
      // count:0,
    }
  },
  methods:{
    addCount(){
      this.$emit('addNumber',3)
    }
  },
}
</script>

<style lang="less">
  
</style>
