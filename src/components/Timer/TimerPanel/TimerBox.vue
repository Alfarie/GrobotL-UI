<template>
  <div class="grey-panel">
        <div class="text-center" > 
            <span class="timer-start-format">{{data.start | timeFormat}}</span> 
            <span style="text-align: center; margin: 40px; font-size: 30px;"> To</span>  
            <span class="timer-stop-format">{{data.stop  | timeFormat}}</span>
        </div> 
  </div>
</template>


<script>
    export default {
        props: ['data'],
        filters: {
            timeFormat(value){
                let h = (Math.floor(value / 60));
                h = h < 10? '0'+h: h;
                let min = value % 60;
                min = min < 10? '0'+min: min;
                return h + ':' + min;
            }
        }
    }
</script>

<style scoped>
    .grey-panel {
        text-align: center;
        background: #e9e9eb;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
    }

    .grey-panel:hover {
        box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.2);
    }

    .timer-start-format{
        font-size: 60px;
        color:  rgb(83, 147, 231);
    }

    .timer-stop-format{
        font-size: 60px;
        color:  rgb(236, 133, 130);
    }
</style>

