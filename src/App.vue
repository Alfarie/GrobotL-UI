<template>
    <div>
        <app-header></app-header>

        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
export default {
  components: {
    appHeader: Header
    
  }
};
</script>

<style>
body {
  padding: 30px;
  background-color: rgb(238, 238, 238);
}

@font-face {
  font-family: myFirstFont;
  src: url('./assets/fonts/EkkamaiStandard-Light.ttf') format('truetype');;
}

@font-face {
  font-family: myFirstFont;
  src: url('./assets/fonts/EkkamaiStandard-Light.ttf') format('truetype');;
  font-weight: bold;
}

* {
  font-family: myFirstFont;
}
</style>
