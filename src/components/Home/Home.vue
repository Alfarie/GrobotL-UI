<template>
  <div class="container-fluid" style="margin-top: 25px;">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <app-sensors></app-sensors>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
             <app-plant-activity></app-plant-activity>
          </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <app-actuator></app-actuator>
        </div>
        
      </div>
  </div>
</template>

<script>

import Sensors from './Sensors'
import ActuatorStatus from './ActuatorStatus'
import PlantActivity from './PlantActivity.vue'
export default {
  components: {
    appSensors :Sensors,
    appActuator: ActuatorStatus,
    appPlantActivity : PlantActivity
  }
};
</script>
