<template>
<div>
    <app-navbar></app-navbar>
    <div class="container">
      <h1>{{ title }}</h1>
      <br>
        <div class="block" :class="{true: this.success, false: !this.success}"></div>
      <br>

      <div class="row" id="ipRow">
        <button id="mainBtn" type="button" class="btn btn-primary" @click="checkSuccess">Click</button>
        <input type="text" class="inputA" placeholder="IP-Address" v-on:keydown.enter="changeUrl">
      </div>

      <p>{{ url }}</p>
      <p>In order for this to work you need to download
        the addon for your browser called CORS.
      </p>
      <p> make sure when you type an IP in the bar that you press enter before you press click.</p>
        <h3>{{ blockCounter }}/{{ unblockCounter }} blocked/unblocked {{ update }}</h3>
    </div>
</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue';
    const urlbase = 'https://kyv0geao18.execute-api.us-west-2.amazonaws.com/beta/simpleapi?ip=';
    export default {
      data() {
        return {
          title: 'Fetching...',
          success: false,  //default
          url: urlbase + '0.0.0.0',
          blockCounter: 0,
          unblockCounter: 0
        }
      },
      components: {
          appNavbar: NavBar
      },
      computed: {
        update() {
          if(this.success) {
            this.blockCounter+=1;
          } else {
            this.unblockCounter+=1;
          }
        }
      },
      methods: {
        checkSuccess() {
          let vm = this;
          console.log('I am running')
          fetch(this.url).then(function(response) {
            return response.json();
            }).then(function(myJson) {
              console.log(myJson.success)
              return vm.success = myJson.success;
            });
      },
        changeUrl() {
            return this.url = urlbase + event.target.value
      },
    }

  }
</script>

<style>
    h1,
    h3 {
      /*text-align:center;*/
    }

    .container {
      margin-left: 20%;
      font-family: Times, sans-serif;
    }

    .block {
        background-color: gray;
        width: 100px;
        height: 100px;
        border: 3px solid black;
        display: block;
        /*margin: auto;*/
    }

    .inputA{
      /*border: 2px solid #ccc;*/

    }

    .true {
        background-color: green;
    }

    .false {
        background-color: red;
    }

    #mainBtn {
      /*margin-top: 15px;
      margin-left: 15px;*/
    }
        .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 2s;
        opacity: 0;
    }

    #ipRow {
      margin-left: 2px;
      margin-bottom: 2%;
      /*text-align:center;*/
    }
</style>
