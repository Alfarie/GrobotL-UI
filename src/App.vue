<template>
    <div>
        <app-header></app-header>

        <div class="container-fluid">
            <router-view></router-view>
        </div>


        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
    
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
