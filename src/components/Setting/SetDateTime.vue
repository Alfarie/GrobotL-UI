<template>
  <div>
    <div class="row text-center">
      <div class="col-md-12">
        <div style="display: inline;">
          <img src="/src/assets/img/setclock.png" style="height: 80px;">
        </div>
        <span style="font-size: 30px;"> Date & Time </span>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-12 text-center">

        <div style="display: block; margin: 20px;">
          <h1>Date</h1>
          <input type="date" name="" id="setdate" class="form-control timer text-center" style="width: 50%">
        </div>

        <div style="display: block; margin: 20px;">
          <h1>Time</h1>
          <input type="text" class="form-control timer text-center" name="" id="settime" style="width: 50%">
        </div>

      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="row" v-if="isDateChange">
        <div class="col-xs-12 col-lg-12 outer" @click="Submit">
          <div class="grey-panel inner">
            <div class="text-center">
              <span class="timer-start-format">Submit</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
            <div class="row" style="margin-top: 30px;" v-if="showAlert">
              <div class="col-xs-12 col-md-6 col-lg-12">
                <div class="alert alert-success text-center">
                    <h2><strong>Success: </strong> Datetime is updated.  </h2>
                </div>
              </div>
            </div>
          </transition>

  </div>
</template>


<script>
  import TimePicker from '../Timer/ControlPanel/TimePicker.vue'
  var $ = (window.jQuery = require("jquery"));
  require('../../assets/js/wickedpicker.min.js')
  export default {
    components: {
      appTimePicker: TimePicker
    },
    data() {
      return {
        isDateChange: false,
        isTimeChange: false,
        date: '',
        time: '',
        showAlert: false
      }
    },
    methods:{
        Submit(){
            // 2018-02-23 02 : 00
            this.showAlert = false;
            let arrDate = this.date.split('-');
            let arrTime = this.time.trim('').split(':');
            let dt = {
                year: parseInt(arrDate[0]),
                month: parseInt(arrDate[1]),
                day: parseInt(arrDate[2]),
                hour: parseInt(arrTime[0]),
                min: parseInt(arrTime[1])
            }
            this.$store.dispatch('updateDateTime', dt);
            setTimeout( ()=>{
                this.showAlert = true;
            }, 1000);
        }
    },
    mounted() {
      $('#settime').wickedpicker({
        title: this.id,
        twentyFour: true,
        now: "00: 00"
      });
      $('#settime').on('change', (event) => {
          this.time = event.target.value;
        this.isTimeChange = true;
      })
      $('#setdate').on('change', (event) => {
        this.date = event.target.value;
        this.isDateChange = true;
      })

    }
  }

</script>

<style scoped>
 
  .outer {
    width: 100%;
    text-align: center;
  }

  .inner {
    display: inline-block;
    width: 50%;
    margin-top: 30px;
  }

  .timer {
    height: 80px;
    font-size: 40px;
    display: inline-block;
  }

  .grey-panel {
    /* text-align: center; */
    background: #e9e9eb;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  .opacity-passive {
    opacity: 0.5;
  }

  .opacity-active {
    opacity: 1;
  }

  .grey-panel:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .timer-start-format {
    font-size: 60px;
    color: rgb(83, 147, 231);
  }

  .timer-stop-format {
    font-size: 60px;
    color: rgb(236, 133, 130);
  }

</style>
