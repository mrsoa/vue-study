<template>
  <div>
    <!-- 自定义组件双向绑定：@input，:value -->
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      // 数据变化需要执行校验
      //this.$parent.$emit("input", e.target.value);
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>
<style scoped>
</style>