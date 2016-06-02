<template>
    <div class="page header">
        <div class="hd">
            <h1 class="page_title">Header</h1>
        </div>
        <div class="bd">
            <nav-header>NavHeader</nav-header>
            <br>
            <nav-header :left-options="{showBack: false}">do not show Back</nav-header>
            <br>
            <nav-header :right-options="{showMore: true}">with more menu</nav-header>
            <br>
            <nav-header>with right link<a slot="right">Ok</a></nav-header>
            <br>
            <nav-header>long long long long long long long text<a slot="right">Ok</a></nav-header>
            <br>
            <nav-header>with left slot<a slot="left">Close</a></nav-header>
            <br>
            <nav-header style="background-color:#1677cb">custom background color</nav-header>
        </div>
    </div>
</template>

<script>
    import {Header} from 'vue-wxui';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {'NavHeader': Header}
    }
</script>