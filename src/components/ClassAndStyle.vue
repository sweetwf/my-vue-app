<template>
  <div>
    <div>
      <!-- 对象语法 对象中取得是truthiness，类名根据后面的真假展示-->
      <div v-bind:class="{active:isActive}">我展示了吗？</div>
      <div class="static" v-bind:class="{active:isActive,'text-danger':hasError}">历代书法家</div>
      <div v-bind:class="classObject">klsd</div>

      <!-- 数组语法  数组中取得是类名的值-->
      <div v-bind:class="[isActive ? activeClass:'',errorClass]">介绍的方法看见</div>
      <div v-bind:class="[{active:isActive},errorClass]"></div>
    </div>

    <div>
      <!-- 对象语法 单个对象-->
      <div v-bind:style="styleObject">内联样式-对象</div>

      <!-- 数组语法 可以放置多个对象-->
      <div v-bind:style="[styleObject]">内联样式-数组</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassAndStyle",
  data() {
    return {
      isActive: true,
      hasError: true,
      activeClass: "active",
      errorClass: "text-danger",
      classObject: function() {
        return {
          active: this.active && !this.hasError
        };
      },
      styleObject:{
        color:"red",
        fontSize:"20px"
      }
    };
  }
};
</script>

<style lang="less" scope>
.active {
  display: block;
}
.text-danger {
  color: red;
}
</style>