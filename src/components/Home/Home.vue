<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <app-sensors></app-sensors>
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
export default {
  components: {
    appSensors :Sensors,
    appActuator: ActuatorStatus
  }
};
</script>
