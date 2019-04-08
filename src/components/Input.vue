<template>
  <div>
    <input :value="obj.message" @input="changeMessage">
    <div>{{obj.message}}</div>
    <input type="text" v-model="msg">
    <div>{{msg}}</div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: "Inputer",
  data() {
    return {
      // obj:{
      //   message:"v-model改变的信息"
      // }
    };
  },
  computed: {
    ...mapGetters({
      obj:'getObj'
    }),
    msg:{
      get(){
        return this.$store.state.obj.msg
      },
      set(value){
        this.$store.commit('updateMsg',value)
      }
    }
  },
  methods: {
    ...mapActions([
      // 'changeMessage'
    ]),
    changeMessage(e){
      this.$store.dispatch('changeMessage',e.target.value)
    }
  },
};
</script>
