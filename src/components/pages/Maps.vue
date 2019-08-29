<template>
<div>
     <app-navbar></app-navbar>
     <div class="container">
        <iframe id="googleMap" src="//www.google.com/maps/embed/v1/place?q=Harrods,Brompton%20Rd,%20UK
        &zoom=17
        &key=AIzaSyCgEs0ltTZ0cDN3JsyKvb9_maoC8HfRnD4">
        </iframe>

        <div class="row">
        </div>
    </div>
</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue';
    export default {
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
