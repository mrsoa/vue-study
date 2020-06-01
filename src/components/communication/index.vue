<template>
  <div>
    <p>组件通讯</p>
    <!-- props,自定义事件 -->
    <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
    <!-- 事件总线 -->
    <Child2 foo="foo" @some-event="onSomeEvent"></Child2>
  </div>
</template>
<script>
import Child1 from "@/components/communication/Child1.vue";
import Child2 from "@/components/communication/Child2.vue";
export default {
  name: "grandpa",
  provide() {
    return {
      bar: "bra",
      grandpa: this
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    onSomeEvent(msg) {
      console.log("Communition", msg);
    }
  },
  mounted() {
    this.$children[1].sendToChild1();
  }
};
</script>