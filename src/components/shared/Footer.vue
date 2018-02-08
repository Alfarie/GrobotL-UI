<template>
  <div class="navbar navbar-fixed-bottom" style="background-color: rgb(238, 238, 238);">
    <div class="container-fluid">
     
     <div class="pull-right">
         <h1><button class="label label-default btn btn-default" @click="changeLanguage"><span :class="flag"></span> {{language}}</button></h1>
     </div>
    </div>
</div>
</template>

<script>
    export default {
        computed:{
            flag(){
                let lang = ''
                if( this.language == 'en') lang = 'us';
                else if( this.language == 'th') lang = 'th'
                return 'flag-icon flag-icon-' + lang
            }
        },
        methods:{
            changeLanguage(){
                if(this.language == 'th') this.language = 'en';
                else if(this.language == 'en') this.language = 'th';
                console.log(this.language)
            }
        },
        filters: {
            toUpperCase(value){
                console.log(value);
                return this.value.toUpperCase();
            }
        }
    }
</script>


<style scoped>
    
</style>
