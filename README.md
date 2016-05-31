#vue-wxui 
> vuejs+vue-router+weui+es6+webpack

WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含button、cell、dialog、 progress、 toast、article、actionsheet、icon等各式元素。
vue-wxui 在此基础有所增加组件，同时集成了vuejs方便移动端开发，另外与WeUI更新尽量同步。

##Install
```
npm install vue-wxui --save-dev
```
##Usage

1. add body content

    ```html
    <div id="app">
        <wxui-icon name="success" type="message"></wxui-icon>
        <wxui-button type="primary">成功</wxui-button>
    </div>
    <script src="simple.build.js"></script>
    ```

2. install vue && add simple.js

    `npm install vue --save-dev`
    ```js
    import Vue from 'vue';
    import Wxui from 'vue-wxui';
    
    Vue.component('wxui-icon', Wxui.Icon);
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        },
        components: {
            'wxui-button': Wxui.Button
        }
    });
    ```
    
3. webpack bundle && run
 
    `npm run build:simple`
    then, open example_simple/index.html with chrome browser
    
##Example
[Example](http://ifxc.github.io/vue-wxui)
![](http://ifxc.github.io/vue-wxui/qr.png?d=0531)
    
##Develop  
`npm start`   
   
##ChangeLog
[ChangeLog](http://github.com/ifxc/vue-wxui/blob/master/CHANGELOG.md)  

##License
The MIT License(http://opensource.org/licenses/MIT)    
    