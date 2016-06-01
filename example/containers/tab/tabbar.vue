<template>
<div class="page tabbar">
  <div class="bd" style="height: 100%;">
    <tab>
      <div slot="body"></div>
      <tabbar slot="tabbar">
        <tabbar-item v-for="bar in bars" :is-on="!!bar.isOn" :router-link="{path: '/'+bar.url}">
          <img slot="icon" :src="bar.icon" alt="">
          <span slot="label">{{bar.label}}</span>
        </tabbar-item>
      </tabbar>
    </tab>
  </div>
</div>
</template>

<script>
import {Tab, Tabbar, TabbarItem} from 'vue-wxui';

import icon_nav_button from '../../images/icon_nav_button.png';
import icon_nav_msg from '../../images/icon_nav_msg.png';
import icon_nav_article from '../../images/icon_nav_article.png';
import icon_nav_cell from '../../images/icon_nav_cell.png';

export default {
  data() {
    return {
      bars: [{
        icon: icon_nav_button,
        label: 'Button',
        isOn: true,
        url: 'button'
      }, {
        icon: icon_nav_msg,
        label: 'Msg Page',
        url: 'message'
      }, {
        icon: icon_nav_article,
        label: 'Article Page',
        url: 'article'
      }, {
        icon: icon_nav_cell,
        label: 'Cell',
        url: 'cell'
      }]
    }
  },

  components: {
    Tab,
    Tabbar,
    TabbarItem
  }
}
</script>
