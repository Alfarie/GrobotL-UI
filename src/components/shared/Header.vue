<template>
<div class="container" style="margin-bottom: 20px; margin-top: 10px;">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img src="assets/img/logo.png" alt="" height="52" width="181">
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <h2><b>Grobot-L 2.0</b> <small>{{language | upperCase}}</small></h2>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="margin-top: 20px;">
        <a>
            <button type="button" class="btn btn-round btn-success btn-lg"><i class="fa fa-bar-chart" aria-hidden="true"></i>Summary </button>
        </a>
        <a>
            <button type="button" class="btn btn-round btn-default  btn-lg" @click="language = 'en'"><i class="fa fa-flag" aria-hidden="true" ></i>EN</button>
        </a>
        <a>
            <button type="button" class="btn btn-round btn-default  btn-lg" @click="language = 'th'"><i class="fa fa-flag" aria-hidden="true" ></i>TH</button>
        </a>
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
