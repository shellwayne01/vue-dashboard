<!-- Still need to work on responsiveness -->
<template>
<div>
     <app-navbar></app-navbar>
     <div class="container">
        <div class="row">
          <!--Chart 1-->
          <div class="col-xs-6" id="planetChart">
              <transition name="fade" appear>
                  <div class="chart-container">
                      <canvas id="planet-chart"></canvas>
                  </div>
              </transition>
          </div>
          <!--Chart 2-->
          <div class="col-xs-6" id="barChart">
              <transition name="fade" appear>
                  <div class="chart-container">
                      <canvas id="bar-chart"></canvas>
                  </div>
              </transition>
          </div>
        </div>

        <div class="row" id="calRow">
            <div style="margin-top:15px;" class="col-xs-12">
                  <transition name="fade" appear>
                    <appCalender></appCalender>
                  </transition>
            </div>
        </div>

        <div class="row" id="btnRow">
            <br></br>
            <button class="btn btn-primary" @click="updateCharts">Update</button>
            <button class="btn btn-success" @click="unblocked++">Unblocked</button>
            <button class="btn btn-danger" @click="blocked++">Blocked</button>
            <p>{{ unblocked }}/{{ blocked }} </p>
        </div>
    </div>
</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue'
    import Chart from 'chart.js';
    import planetChartData from '../../chart-data.js';
    import barChartData from '../../chart-data2.js';
    import Calender from "../items/Calender.vue"
    import IPChecker from "../pages/IPChecker.vue"
    export default {
    //a component’s data option must be a function, so that each instance can maintain an independent copy of the returned data object
        data: function() {
            return {
                blocked: 0,
                unblocked: 0,
                planetChartData: planetChartData,
                barChartData: barChartData
            }
        },
        mounted(){
            this.createChart('planet-chart', this.planetChartData);
            this.createChart('bar-chart', this.barChartData);
        },
        methods: {
            updateCharts(){
                if(this.planetChartData.data.datasets[0].data.length != 0 || this.barChartData.data.datasets[0].data.length != 0) {
                    this.planetChartData.data.datasets[0].data = []
                    this.barChartData.data.datasets[0].data = []
                    console.log(this.planetChartData.data.datasets[0].data)
                    console.log("old data cleared")
                }else {
                    console.log(this.planetChartData.data.datasets[0].data)
                    console.log("already prepped")
                }
                this.planetChartData.data.datasets[0].data.push(this.blocked)
                this.planetChartData.data.datasets[0].data.push(this.unblocked)
                this.barChartData.data.datasets[0].data.push(this.blocked)
                this.barChartData.data.datasets[0].data.push(this.unblocked)
                console.log(this.planetChartData.data.datasets[0].data)
                this.createChart('planet-chart', this.planetChartData);
                this.createChart('bar-chart', this.barChartData); //why not mounted tho?
            },
            createChart(chartId, chartData) {
                var ctx = document.getElementById(chartId);
                var myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                })
            },
            getChartInfo(chartId){
            }
        },
        components: {
            appNavbar: NavBar,
            appCalender: Calender
        }

    }
</script>

<style>
    .container{
      /*margin-left:200px;*/
      margin-left: 20%;
      width: 80%;
    }

    .chart-container{
      margin-top: 15px;
      background-color: lightgrey;
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

    #btnRow{
      text-align: center;
    }

    #calRow{
    }

    #barChart{
    }

    #planetChart{
    }


</style>
