<template>


    <div>
        <div class="col-md-10 col-md-offset-1" style="margin-top: -25px;">
            <div class="grey-panel pn">
                <div style="display: inline">
                    <img src="../../assets/img/fan.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.fan></h2>
                    <h2>
                        <span v-lang.mode></span> : Auto</h2>
                    <h2>
                        <span v-lang.status></span>
                        <span>: ON</span>
                    </h2>
                </div>
            </div>
        </div>

        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <div class="grey-panel pn">
                <div style="display: inline">
                    <img src="../../assets/img/drops.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.pump></h2>
                    <h2>
                        <span v-lang.mode></span> :
                        <span style="color: orange;">Auto</span>
                    </h2>
                    <h2>
                        <span v-lang.status></span>:
                        <span style="color: green">ON</span>
                    </h2>
                </div>
            </div>
        </div>

        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <div class="grey-panel pn">
                <div style="display: inline">
                    <img src="../../assets/img/light-bulb.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.light></h2>
                    <h2>
                        <span v-lang.mode></span> : Auto</h2>
                    <h2>
                        <span v-lang.status></span>: ON</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: [
                    { name: "Fan", value: false },
                    { name: "Pump", value: false },
                    { name: "Led", value: false }
                ]
            };
        }
    };
</script>

<style>
    .grey-panel {
        /* text-align: center; */
        background: #e9e9eb;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
    }

    .grey-panel:hover {
        box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
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