<template>
  <div class="row text-center">
    <!-- <h1>Timer Panel > Pump</h1> -->
    <div class="col-md-10 col-md-offset-2">
      <div class="grey-panel">
          <div> 
            <div style="display: inline;">
              <img src="../../../assets/img/schedule.png" style="height: 60px;">
            </div>
              <span style="font-size: 30px;">TIMER LIST {{$route.params.id}}</span> 
          </div> 
      </div>  
    </div>

    <div class="col-md-10 col-md-offset-2 test" v-for="(tl,ind) in list[$route.params.id]" :key="$route.params.id + ind">
       <app-timer-box :data="tl"></app-timer-box>
    </div>


  </div>
</template>

<script>
import timerList from './timerlist.js'
import TimerBox from "./TimerBox";
export default {
  data(){
    return {
      list: timerList
    }
  },
  components: {
    appTimerBox: TimerBox
  },
  created () {
    console.log('timer panel created');
  }
};
</script>

<style scoped>
    .rcorners {
      border-radius: 25px;
      border: 2px solid rgb(199, 240, 142);
    }
    .test{
      margin-top: 20px;
    }

</style>
