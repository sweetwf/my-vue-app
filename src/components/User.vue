<template>
  <div>
    <!-- User/123?g=1&p=系统安全#username -->

    <!-- query:{ "g": "1", "p": "系统安全" } -->
    <p> query:{{this.$route.query}}</p>

    <!-- params:{ "name": "123" } -->
    <p>params:{{this.$route.params}}</p>

    <!-- hash:#username -->
    <p>hash:{{this.$route.hash}}</p>

    <!-- 123 -->
    {{this.$route.params.name}}

  </div>
</template>
<script>
export default {
  name:'User',

}
</script>