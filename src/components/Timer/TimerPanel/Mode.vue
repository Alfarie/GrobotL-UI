<template>

  <div class="container">
    <div class="row text-center">

      <div style="display: inline">
        <img src="/src/assets/img/plug.png" style="width: 80px; margin: 10px;">
      </div>
      <div class="block">
        <h1>Mode</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 outer" @click="changeMode(1)">
        <div class="grey-panel pn inner" :class="{ 'opacity-passive': !getMode }">
          <div style="display: inline">
            <img src="/src/assets/img/alarm-clock.png" style="width: 80px; margin: 10px;">
          </div>
          <h1>Auto mode</h1>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 outer">
        <div class="grey-panel pn inner" :class="{ 'opacity-passive': getMode }"  @click="changeMode(0)">
          <div style="display: inline">
            <img src="/src/assets/img/led.png" style="width: 80px; margin: 10px;">
          </div>
          <h1>Manual mode</h1>
        </div>

        
          <div class="inner" v-if="getStatus" key="onmanual" >
            <div style="margin-top: 10px;" class="grey-panel pn" :class="{'opacity-passive': !getStatus}" @click="changeStatus(1)">
              <div style="display: inline">
                <img src="/src/assets/img/status_on.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2>ON</h2>
              </div>
            </div>
          </div>
          <div class="inner" v-if="!getStatus" key="offmanual" >
            <div style="margin-top: 10px;" class="grey-panel pn" :class="{'opacity-passive': getStatus}" @click="changeStatus(0)">
              <div style="display: inline">
                <img src="/src/assets/img/status_off.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2>OFF</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: "opacity-active",
      passive: "opacity-passive"
    };
  },
  computed: {
    ...mapGetters(["actuator"]),
    getMode() {
      return this.actuator[this.$route.params.id].mode == 0 ? false : true;
    },
    getStatus() {
      return this.actuator[this.$route.params.id].status == 0 ? false : true;
    }
  },
  methods: {
    changeMode(val) {
      var data = {
        mode: val,
        status: 0
      };
      let act = this.actuator;
      act[this.$route.params.id] = data;
      this.$store.dispatch("updateActuator", act);
    },
    changeStatus(val) {
      var data = {
        mode: 0,
        status: !this.getStatus
      };
      let act = this.actuator;
      act[this.$route.params.id] = data;
      this.$store.dispatch("updateActuator", act);
    }
  }
};
</script>


<style scoped>
.outer {
  margin-top: 50px;
  text-align: center;
}

.inner {
  display: inline-block;
  width: 80%;
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

.block {
  display: inline-block;
  vertical-align: center;
}
</style>
