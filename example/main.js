import Vue from 'vue';
import VueRouter from 'vue-router';
import './example.less';
import {App,
  Button, Cell, Toast,
  Dialog, Progress, Message,
  Article, Actionsheet, Icons,
  Tab, Navbar, Tabbar,
  Panel, SearchBar, More,
  Header, Timeline, Popups} from './containers';


//Vue.config.debug = true;

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/': {
    component: App
  },
  '/button': {
    component: Button
  },
  '/cell': {
    component: Cell
  },
  '/toast': {
    component: Toast
  },
  '/dialog': {
    component: Dialog
  },
  '/progress': {
    component: Progress
  },
  '/message': {
    component: Message
  },
  '/article': {
    component: Article
  },
  '/actionsheet': {
    component: Actionsheet
  },
  '/icons': {
    component: Icons
  },
  '/tab': {
    component: Tab
  },
  '/navbar': {
    component: Navbar
  },
  '/tabbar': {
    component: Tabbar
  },
  '/panel': {
    component: Panel
  },
  '/search-bar': {
    component: SearchBar
  },
  '/more': {
    component: More
  },
  '/header': {
    component: Header
  },
  '/timeline': {
    component:Timeline
  },
  '/popups': {
    component: Popups
  }
});

router.start(Vue.extend({
  data() {
    return {
      animate: 'slide-left'
    }
  },
  ready() {
    //判断浏览器返回或前进
    this.historys = [window.location.hash];
    window.addEventListener("popstate", ()=> {
      var history = window.location.hash, index, backHistory;
      index = this.historys.length-1;
      backHistory = index>=1 ? this.historys[index-1] : this.historys[index];
      if(backHistory === history){
        this.historys.pop();
        this.animate = 'slide-right';
      }else{
        this.historys.push(history);
        if(this.animate === 'slide-right'){
          this.animate = 'slide-left';
        }
      }
    });
  }}), '#container');
