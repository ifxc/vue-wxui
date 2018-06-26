#vue-wxui  注：项目采用vue1开发，暂停维护
> vuejs+vue-router+weui+es6+webpack

WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含button、cell、dialog、 progress、 toast、article、actionsheet、icon等各式元素。
vue-wxui 在此基础有所增加组件，同时集成了vuejs方便移动端开发，另外与WeUI更新尽量同步。

##Install
```
npm install vue-wxui --save
```

##Base Usage

```html
<link rel="stylesheet" href="../dist/vue-wxui.base.min.css">
```

```html
<div id="app">
    <weui-article><h1>Vue WxUI</h1></weui-article>
    <wxui-button type="primary">成功</wxui-button>
</div>
<script src="../node_modules/vue/dist/vue.min.js"></script>
<script src="../dist/vue-wxui.base.min.js"></script>
<script>
//注册为全局组件
Vue.component('weui-article', VueWxui.Article);
new Vue({
  el: '#app',
  components: {
    //<wxui-button>只能用在父组件模板内
    'wxui-button': VueWxui.Button
  }
});
</script>
```

Or npm install vue vue-wxui

```js
import Vue from 'vue'
import Wxui from 'vue-wxui'

Vue.component('weui-article', Wxui.Article);
new Vue({
  el: '#app',
  components: {
    'wxui-button': Wxui.Button
  }
});
```

More usage, Please see example.
    
##Example
![](http://ifxc.github.io/vue-wxui/qr.png?d=0531)

[Example](http://ifxc.github.io/vue-wxui)
    
##Develop 
 
1. install package
`npm install`

2. run server
`npm start`   
   
##ChangeLog
[ChangeLog](http://github.com/ifxc/vue-wxui/blob/master/CHANGELOG.md)  

##License
The MIT License(http://opensource.org/licenses/MIT)    
    