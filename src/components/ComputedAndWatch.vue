<template>
  <div>
    <!-- methods 方法每次重新渲染都会执行函数  适用于异步或开销较大操作-->
    <div class="methods-module">
      <p>firstName:{{firstName}}</p>
      <p>lastName:{{lastName}}</p>
      <p>fullName:{{getFullName()}}</p>
    </div>

    <!-- computed 计算属性 基于依赖进行缓存-->
    <div class="computed-module">
      <p>fullName:{{fullName}}</p>
      <p>{{this.fullName = '1 5'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedAndWatch",
  data() {
    return {
      firstName: "first",
      lastName: "last",
      fullName: "first Last"
    };
  },

  methods: {
    getFullName: function() {
      return this.fullName;
    },
    fullNames: {
      get: function() {
        return this.firstName + this.lastName;
      },
      set: function(newVal) {
        var names = newVal.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },

  computed: {
    fetchFullName: function() {
      return this.firstName + this.lastName;
    }
  },

  watch: {
    firstName: function(val) {
      this.fullName = val + "" + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + "" + val;
    }
  }
};
</script>