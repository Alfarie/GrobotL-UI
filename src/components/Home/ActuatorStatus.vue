<template>


    <div>
        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/fan" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/fan.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.fan></h2>
                    <h2>
                        <span v-lang.mode></span> : {{fanStatus.mode}}</h2>
                    <h2>
                        <span v-lang.status></span>
                        <span>: {{fanStatus.status}}</span>
                    </h2>
                </div>
            </router-link>

        </div>

        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/pump" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/pump.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.pump></h2>
                    <h2>
                        <span v-lang.mode></span> :
                        <span style="color: orange;">{{pumpStatus.mode}}</span>
                    </h2>
                    <h2>
                        <span v-lang.status></span>:
                        <span style="color: green">{{pumpStatus.status}}</span>
                    </h2>
                </div>
            </router-link>
        </div>

        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/led" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/led.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.light></h2>
                    <h2>
                        <span v-lang.mode></span> : {{ledStatus.mode}}</h2>
                    <h2>
                        <span v-lang.status></span>: {{ledStatus.status}}</h2>
                </div>
            </router-link>

        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters(['fanStatus', 'pumpStatus', 'ledStatus'])
  },
  created() {
    this.$socket.on("ACTUATOR", data => {
      this.$store.dispatch("updateActuator", data);
    });
  }
};
</script>

<style scoped>
.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
}

.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.li-sensor-temp {
  color: rgb(133, 219, 241);
}

.li-sensor-humi {
  color: rgb(130, 236, 204);
}

.font {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.mycontent-left {
  border-right: 3px solid rgb(145, 143, 143);
}

.block {
  display: inline-block;
  vertical-align: top;
}

hr.vertical {
  width: 0px;
  height: 40px;
  /* or height in PX */
}
</style>