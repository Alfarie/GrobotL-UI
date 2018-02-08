<template>
<div class="container-fluid" style="margin-bottom: 20px; margin-top: 10px;">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <img src="../../assets/img/logo1.png" alt="" height="52" width="181">
        <!-- <h2 style="font-size: 35px;"><b>Grobot-L 2.0</b> <small>{{language | upperCase}}</small></h2> -->
    </div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7" style="margin-top: 20px;">
        
        <div class="pull-right">
            <img src="../../assets/img/connection.png" style="height: 60px;">
            <span style="font-size: 20px; color: red;">OFFLINE...</span> 
        </div>
    </div>

    
</div>
</template>

<script>
export default {
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>
