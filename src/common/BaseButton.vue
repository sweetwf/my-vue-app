<template>
  <span :class="
  'cute-button '+
  'cute-button-'+ type +
  'cute-button-'+ size +
  (disabled ? 'disabled' : '') +
  (bordered ? 'bordered':'')
  ">我是基础组件，立刻送积分</span>
</template>

<script>
export default {
  name:'BaseButton',
  props:{
    type:{
      type:String,// default,danger,primary
      require:false
    },
    size:{
      type:String,
      require:false,
      default:'medium'
    },
    disabled:{
      type:Boolean,
      require:false,
      default:false
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event){
      this.$emit('click',event);

    }
  },
}
</script>

<style lang="less">
  @color-primary: #3296fa;
  @color-danger: #f6383a;
  @color-warning: #f60;
  @btn-height: 0.8rem;

  .cute-button {
      color: white;
      border: 0;
      background-color: @color-primary;
      text-decoration: none;
      text-align: center;
      display: block;
      border-radius: 0.08rem;
      line-height: @btn-height;
      box-sizing: border-box;
      appearance: none;
      padding: 0 0.8rem;
      margin: 0;
      height: @btn-height;
      white-space: nowrap;
      position: relative;
      text-overflow:ellipsis;
      font-size: 0.32rem;
      cursor: pointer;
      // input[type="submit"]&, input[type="button"]&{
      //   width: 100%;
    &.bordered {
      border:1px solid #ccc ;
    }
    &.cute-button-danger {
      border:1px solid red ;

    }
    &.cute-button-small {
      width:50px
    }

  }
</style>
