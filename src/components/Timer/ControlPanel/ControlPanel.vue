<template>
    <div class="container-fluid">
        <div class="row">
            <transition>
                <div>
                    <div class="col-md-12 col-lg-12" style="margin-top: 20px;">
                        <!-- <div class="grey-panel pn" ? -->
                        <router-link :to="linkAddTimer" tag="div" class="grey-panel pn" >
                            <div style="display: inline">
                                <img src="/src/assets/img/alarm-clock.png" style="width: 80px; height: 100%; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.addtimer></h2>
                            </div>
                        </router-link>
                    </div>

                    <div class="col-md-12 col-lg-12" style="margin-top: 25px;">
                        <router-link :to="linkEditTimer" tag="div" class="grey-panel pn" >
                            <div style="display: inline">
                                <img src="/src/assets/img/wrench.png" style="width: 80px; height: 100%; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.edittimer></h2>
                            </div>
                            
                        </router-link>

                    </div>

                    <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="showDevice = !showDevice">

                        <div class="grey-panel pn">
                            <div style="display: inline">
                                <img src="/src/assets/img/plug.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.selectch></h2>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </transition>
            <transition name="slide" mode="out-in" appear>
                <div v-if="showDevice" key="showdevice">
                    <app-actuator-list></app-actuator-list>
                </div>
                <div v-else key="backtohome">
                    <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="back">
                        <div class="grey-panel pn">
                            <div class="block" style="margin: 20px;">
                                <h2>
                                    <i class="fa fa-chevron-left"></i> กลับหน้าหลัก</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </transition>
        </div>
    </div>
</template>

<script>
import ActuatorList from "./ActuatorList.vue";
import AddTimer from "./AddTimer.vue";

export default {
  components: {
    appActuatorList: ActuatorList,
    appAddTimer: AddTimer
  },
  data() {
    return {
      showDevice: false,
      showAddTimer: false
    };
  },
  computed: {
    linkAddTimer() {
      return "/timer/" + this.$route.params.id + "/add";
    },
    linkEditTimer() {
      return {
          path: '/timer/' + this.$route.params.id,
          query: {edit: true}
      };
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "home" });
    },
    addTimer() {}
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