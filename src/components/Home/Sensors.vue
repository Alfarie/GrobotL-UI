<template>
    <div class="row">
        <div class="col-sm-12 col-md-4 col-md-offset-1 mycontent-left"  >
            <div class="block">
                <li class="fa fa-thermometer-half fa-9x li-sensor-temp"></li>
                <div class="block" style="margin-left: 20px;">
                    <h2 class="text-center" v-lang.temperature></h2>
                    <h1 class="text-center li-sensor-temp" style="font-size: 50px;"> 21.0 C</h1>
                </div>
            </div>

            <hr class="vertical block">
        </div>

        <div class="col-md-6" > 
            <div class="block">
                <li class="fa fa-braille fa-9x li-sensor-humi"></li>
                <div class="block" style="margin-left: 20px;">
                    <h2 class="text-center" v-lang.humidity></h2>
                    <h1 class="text-center li-sensor-humi" style="font-size: 50px;">59 %</h1>
                </div>
            </div>
            <hr class="vertical block">
        </div>
    </div>
</template>

<style scoped>
    .li-sensor-temp {
        color: rgb(133, 219, 241);
    }

    .li-sensor-humi {
        color: rgb(130, 236, 204);
    }

    .mycontent-left {
        border-right: 0px solid rgb(145, 143, 143);
    }

    .block {
        display: inline-block;
    }

    hr.vertical {
        width: 0px;
        height: 40px;
        /* or height in PX */
    }
</style>