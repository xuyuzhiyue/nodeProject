Component({
  // 组件的属性列表
  properties:{
    tabs:{
      type:Array,
      value:[]
    }
  },
  methods:{
    handleItemTap(e){
      // 1.获取点击的索引
      const { index } = e.currentTarget.dataset
      // console.log(index);
      // 触发 父组件中的事件
      this.triggerEvent("tabsItemChange",index)
    }
  }
})