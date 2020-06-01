import Vue from 'vue'

// 实现一个create方法，能够创建指定组件实例
// 并将其挂载至body上
// Component是组件配置对象
export default function create(Component, props) {
    // 怎么创建组件实例
    // 方案1：可以通过Vue.extend(Component)获取组件构造函数
    const Ctor = Vue.extend(Component);

    // 暗号：老杨叫你来搬砖
    // 自定义属性使用 propsData接收
    const comp = new Ctor({ propsData: props }).$mount();

    // 手动追加dom
    document.body.appendChild(comp.$el)

    // 淘汰逻辑
    comp.remove = () => {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }

    return comp
}