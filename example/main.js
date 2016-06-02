import Vue from 'vue';
import VueRouter from 'vue-router';
import './example.less';
import {App,
  Button, Cell, Toast,
  Dialog, Progress, Message,
  Article, Actionsheet, Icons,
  Tab, Navbar, Tabbar,
  Panel, SearchBar, More,
  Header} from './containers';


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
  }
});

router.start(Vue.extend({}), '#container');
