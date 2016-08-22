<template>
<div class="page">
  <div class="hd">
    <h1 class="page_title">Vue-WxUI</h1>
    <p class="page_desc">为微信Web服务量身设计</p>
  </div>
  <div class="bd">
    <grids keep-alive>
      <grid v-for="item in list" :router-link="{path: '/' + item.url}" :image-url="item.image" :label="item.text"></grid>
    </grids>
  </div>
</div>
</template>

<script>
import {Grids, Grid} from 'vue-wxui';
import icon_nav_button from '../images/icon_nav_button.png';
import icon_nav_cell from '../images/icon_nav_cell.png';
import icon_nav_toast from '../images/icon_nav_toast.png';
import icon_nav_dialog from '../images/icon_nav_dialog.png';
import icon_nav_progress from '../images/icon_nav_progress.png';
import icon_nav_msg from '../images/icon_nav_msg.png';
import icon_nav_article from '../images/icon_nav_article.png';
import icon_nav_actionSheet from '../images/icon_nav_actionSheet.png';
import icon_nav_icons from '../images/icon_nav_icons.png';
import icon_nav_panel from '../images/icon_nav_panel.png';
import icon_nav_tab from '../images/icon_nav_tab.png';
import icon_nav_search_bar from '../images/icon_nav_search_bar.png';
import icon_nav_other from '../images/icon_nav_other.png';

export default {
  data() {
    return {
      list: [{
        text: 'Button',
        url: 'button',
        image: icon_nav_button
      }, {
        text: 'Cell',
        url: 'cell',
        image: icon_nav_cell
      }, {
        text: 'Toast',
        url: 'toast',
        image: icon_nav_toast
      }, {
        text: 'Dialog',
        url: 'dialog',
        image: icon_nav_dialog
      }, {
        text: 'Progress',
        url: 'progress',
        image: icon_nav_progress
      }, {
        text: 'Msg Page',
        url: 'message',
        image: icon_nav_msg
      }, {
        text: 'Article Page',
        url: 'article',
        image: icon_nav_article
      }, {
        text: 'ActionSheet',
        url: 'actionsheet',
        image: icon_nav_actionSheet
      }, {
        text: 'Icons',
        url: 'icons',
        image: icon_nav_icons
      }, {
        text: 'Panel',
        url: 'panel',
        image: icon_nav_panel
      }, {
        text: 'Tab',
        url: 'tab',
        image: icon_nav_tab
      }, {
        text: 'SearchBar',
        url: 'search-bar',
        image: icon_nav_search_bar
      }, {
        text: 'More',
        url: 'more',
        image: icon_nav_other
      }]
    };
  },

  components: {
    Grids,
    Grid
  }
}
</script>
