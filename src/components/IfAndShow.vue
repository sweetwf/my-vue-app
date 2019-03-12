<template v-if="isShow">

<!-- 
  v-if 会有销毁和重建 在为假时什么也不做，条件第一次微针，开始渲染条件块 适用于 运行时改变较少

  v-show 不管初始条件，元素总会被渲染，并且通过切换display属性 适用于需要频繁的切换
 -->
  <div>
    <!-- v-if 指令的表达式返回true渲染 -->
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else>not A or B</h1>

    <!-- v-show 元素会始终被渲染并被保留在DOM中，切换css的display属性 不能用于<template> -->
      <div v-show:="isShow">v-show</div>
  </div>

</template>

<script>
export default {
  name: "IfAndShow",
  data() {
    return {
      type: 'C',
      isShow:true
    };
  }
};
</script>
