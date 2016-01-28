<template>
  <div class="page" transition="app">
    <div class="hd">
        <h1 class="page_title">WZMUI</h1>
        <p class="page_desc">Base on WeUI,thank for vue-weui。</p>
    </div>
    <div class="bd">
        <div class="grids">
            <a class="grid js_grid" v-link="'button'" data-id="button">
                <div class="grid_icon">
                    <img src="../images/icon_nav_button.png" alt="">
                </div>
                <p class="grid_label">
                    Button
                </p>
            </a>
            <a class="grid js_grid" v-link="'cell'" data-id="cell">
                <div class="grid_icon">
                    <img src="../images/icon_nav_cell.png" alt="">
                </div>
                <p class="grid_label">
                    Cell
                </p>
            </a>
            <a class="grid js_grid" v-link="'toast'" data-id="toast">
                <div class="grid_icon">
                    <img src="../images/icon_nav_toast.png" alt="">
                </div>
                <p class="grid_label">
                    Toast
                </p>
            </a>
            <a class="grid js_grid" v-link="'dialog'" data-id="dialog">
                <div class="grid_icon">
                    <img src="../images/icon_nav_dialog.png" alt="">
                </div>
                <p class="grid_label">
                    Dialog
                </p>
            </a>
            <a class="grid js_grid" v-link="'progress'" data-id="progress">
                <div class="grid_icon">
                    <img src="../images/icon_nav_button.png" alt="">
                </div>
                <p class="grid_label">
                    Progress
                </p>
            </a>
            <a class="grid js_grid" v-link="'msg'" data-id="msg">
                <div class="grid_icon">
                    <img src="../images/icon_nav_msg.png" alt="">
                </div>
                <p class="grid_label">
                    Msg
                </p>
            </a>
            <a class="grid js_grid" v-link="'article'" data-id="article">
                <div class="grid_icon">
                    <img src="../images/icon_nav_article.png" alt="">
                </div>
                <p class="grid_label">
                    Article
                </p>
            </a>
            <a class="grid js_grid" v-link="'actionsheet'" data-id="actionsheet">
                <div class="grid_icon">
                    <img src="../images/icon_nav_actionSheet.png" alt="">
                </div>
                <p class="grid_label">
                    ActionSheet
                </p>
            </a>
            <a class="grid js_grid" v-link="'icons'" data-id="icons">
                <div class="grid_icon">
                    <img src="../images/icon_nav_icons.png" alt="">
                </div>
                <p class="grid_label">
                    Icons
                </p>
            </a>
        </div>
    </div>
</div>
</template>

<script>
// import store from '../store'
// import Item from './Item.vue'

export default {

  name: 'IndexView',

  components: {
    // Item
  },

  data () {
    return {
      // page: 1,
      // items: []
    }
  },

  route: {
    data ({ to }) {
      // This is the route data hook. It gets called every time the route
      // changes while this component is active.
      //
      // What we are doing:
      //
      // 1. Get the `to` route using ES2015 argument destructuring;
      // 2. Get the `page` param and cast it to a Number;
      // 3. Fetch the items from the store, which returns a Promise containing
      //    the fetched items;
      // 4. Chain the Promise and return the final data for the component.
      //    Note we are waiting until the items are resolved before resolving
      //    the entire object, because we don't want to update the page before
      //    the items are fetched.
      const page = +to.params.page
      // return store.fetchItemsByPage(page).then(items => ({
      //   page,
      //   items
      // }))
    }
  },

  created () {
    // store.on('topstories-updated', this.update)
  },

  destroyed () {
    // store.removeListener('topstories-updated', this.update)
  },

  methods: {
    update () {
      // store.fetchItemsByPage(this.page).then(items => {
      //   this.items = items
      // })
    }
  },

  filters: {
    formatItemIndex (index) {
      return (this.page - 1) * store.storiesPerPage + index + 1
    }
  }
}
</script>

<style lang="less">
    @import '../../src/style/grid';
</style>
