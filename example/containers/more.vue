<template>
    <div class="page more">
        <div class="hd">
            <h1 class="page_title">More</h1>
        </div>
        <div class="bd">
            <cells type="access">
                <link-cell v-for="item in list" :router-link="{path: '/'+item.link}">
                    <span slot="body">{{item.title}}</span>
                    <span slot="footer"></span>
                </link-cell>
            </cells>
        </div>
    </div>
</template>

<script>
    import {LinkCell, Cells} from 'vue-wxui';
    export default{
        data(){
            return{
                list: [{title:'Header', link:'header'}]
            }
        },
        components: {LinkCell, Cells}
    }
</script>