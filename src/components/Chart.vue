<template>
  <div >
    <canvas id="planet-chart" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
  import Chart from 'chart.js';
  // import planetChartData from './chart-data.js';
  import { mapGetters } from 'vuex';

  export default {
    props:['val'],
    watch:{
      val(){
        this.createChart('planet-chart', this.categories);
      }
    },
    mounted() {
      this.createChart('planet-chart', this.categories);
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['spent', 'colors']),

      categories(){
        return {
          type: 'doughnut',
          data: {
            //labels: Object.keys(this.spent),
            datasets: [{
              label: '# of Votes',
              data: Object.values(this.spent),
              backgroundColor: Object.values(this.colors),
              borderColor: '#78498c',
              borderWidth : [
                '1'
              ],
              width: '100%'
            }]
          },
          options: {}

        }
      }
    },









    methods: {
      createChart(chartId, chartData) {
        const id = document.getElementById(chartId);
        const myChart = new Chart(id, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    }
  }
</script>

