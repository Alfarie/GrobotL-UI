<template>
    <div>
        <app-header></app-header>

        <div class="container-fluid">
          <transition name="slide" mode="out-in" appear>
            <router-view></router-view>
          </transition>
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

.grey-panel2 {
        background: #e9e9eb;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.grey-panel2:hover {
        box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
body {
  padding: 30px;
  background-color: rgb(238, 238, 238);
}

@font-face {
  font-family: myFirstFont;
  src: url('/src/assets/fonts/EkkamaiStandard-Light.ttf') format('truetype');;
}

@font-face {
  font-family: myFirstFont;
  src: url('/src/assets/fonts/EkkamaiStandard-Light.ttf') format('truetype');;
  font-weight: bold;
}

* {
  font-family: myFirstFont;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave {
  /*opacity: 1;*/
}

.fade-leave-active {
  transition: opacity .5s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out .5s ease-out forwards;
  transition: opacity .5s;
  opacity: 0;
  /* position: absolute; */
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
