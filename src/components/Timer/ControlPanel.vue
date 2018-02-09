<template>
    <div class="container-fluid">
        <div class="row">
            <transition>
                <div>
                <div class="col-md-12 col-lg-12" style="margin-top: 20px;">

                    <div class="grey-panel pn">
                        <div style="display: inline">
                            <img src="../../assets/img/alarm-clock.png" style="width: 80px; height: 100%; margin: 10px;">
                        </div>
                        <div class="block" style="margin: 20px;">
                            <h2 v-lang.addtimer></h2>
                        </div>
                        <div class="block pull-right" style="margin: 25px;">
                            <i class="fa fa-plus-circle fa-4x" style="color:grey;"></i>
                        </div>
                    </div>

                </div>

                <div class="col-md-12 col-lg-12" style="margin-top: 25px;">

                    <div class="grey-panel pn">
                        <div style="display: inline">
                            <img src="../../assets/img/wrench.png" style="width: 80px; height: 100%; margin: 10px;">
                        </div>
                        <div class="block" style="margin: 20px;">
                            <h2 v-lang.edittimer></h2>
                        </div>
                        <div class="block pull-right" style="margin: 25px;">
                            <i class="fa fa-wrench fa-4x" style="color:grey;"></i>
                        </div>
                    </div>

                </div>

                <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="showDevice = !showDevice">

                    <div class="grey-panel pn">
                        <div style="display: inline">
                            <img src="../../assets/img/plug.png" style="width: 80px; margin: 10px;">
                        </div>
                        <div class="block" style="margin: 20px;">
                            <h2 v-lang.selectch></h2>
                        </div>
                        <div class="block pull-right" style="margin: 25px;">
                            <i class="fa fa-plug fa-4x" style="color:grey;"></i>
                        </div>
                    </div>
                    
                </div>
                </div>
                
            </transition>
            



            <transition name="slide" mode="out-in" appear>
                <div v-if="showDevice"  key="showdevice">

                    <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/fan" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="../../assets/img/fan.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.fan></h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/pump" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="../../assets/img/drops.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.pump></h2>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/led" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="../../assets/img/light-bulb.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.light></h2>
                            </div>
                        </router-link>
                    </div>

                </div>
                <div v-else key="backtohome">
                    <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="back">
                        <div class="grey-panel pn">
                            <div class="block" style="margin: 20px;">
                                <h2> <i class="fa fa-chevron-left"></i> กลับหน้าหลัก</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showDevice: false
    };
  },
  methods:{
      back(){
          this.$router.push({name: "home"})
      }
  }
};
</script>


<style scoped>
.vertical-center {
  display: flex;
  align-items: center;
}

.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.opacity-passive{
    opacity: 0.5;
}
.opacity-active{
    opacity: 1;
}

.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.device-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.device-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.block {
  display: inline-block;
  vertical-align: top;
}
</style>