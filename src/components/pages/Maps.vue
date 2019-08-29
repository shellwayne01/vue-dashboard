<template>
<div>
     <app-navbar></app-navbar>
     <div class="container">
        <iframe id="googleMap" src="//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK
        &zoom=17
        &key="+{{nasaKey}}>
        </iframe>

        <div class="row">
        </div>
    </div>
</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue';
    export default {
      data: function(){
        return {
          nasakey: config.NASA_key
        }
      },
        components: {
            appNavbar: NavBar,
        }
    }
</script>

<style>

.container{
  width:80%;
  margin-left:20%;
}

#googleMap{
  width: 90%;
  height: 500px;
  display: block;
  margin: auto;
  margin-top: 5%;
}
</style>
