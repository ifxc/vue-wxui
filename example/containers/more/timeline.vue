<template>
    <div class="page timeline">
        <div class="hd">
            <h1 class="page_title">Timeline</h1>
        </div>
        <div class="bd">
            <timeline>
                <timeline-item>
                    <h4 class="title recent">【广东】 广州市 已发出</h4>
                    <p class="time recent">2016-04-17 12:00:00</p>
                </timeline-item>
                <timeline-item>
                    <h4 class="title"> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
                    <p class="time">2016-04-16 10:23:00</p>
                </timeline-item>
                <timeline-item>
                    <h4 class="title"> 商家正在通知快递公司揽件</h4>
                    <p class="time">2016-04-15 9:00:00</p>
                </timeline-item>
            </timeline>
        </div>
    </div>
</template>

<script>
    import {Timeline, TimelineItem} from 'vue-wxui'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{Timeline, TimelineItem}
    }
</script>