<template>
  <div>
    {{this.$route.params}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'NestedRoute',
}
</script>