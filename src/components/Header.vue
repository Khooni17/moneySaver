<template>
    <div class="header">
      <div class="top">
        <div class="date">
          <p>Today:</p>
          <i>{{ todayDateHeader }}</i>
        </div>
        <div class="process">
          <span style="margin: 0 0 0 3vw;">{{ goalName }}</span>
          <div class="progress" style="height: 5px; width: 100px; margin-bottom: 5px; margin-left: 25px">
            <div class="progress-bar" role="progressbar" :style="{width: `${moneyboxBar}%`}"  aria-valuemax="100"></div>
          </div>
          <span style="margin-left: 1vw">{{ tempMessage }}</span>
        </div>
      </div>

      <div class="bot">
        <div class="balance">
          <p><i>Balance for today: </i></p>
          <b>{{ todayCash }} &#8381;</b>
        </div>
      </div>
    </div>
</template>

<script>

  import {mapGetters} from 'vuex';


  export default {

    data(){
      return {
      }
    },
    computed: {
      ...mapGetters(['todayCash','todayDateHeader','goalName','tempMessage']),
      moneyboxBar() {
        return this.$store.state.moneyboxBar;
      }
    },
    methods: {

    }

  }
</script>

<style scoped>

  .process{
    text-align: center;
    font-size: 1em;
    color: darkred;
  }

  p{
    margin: 4px;
  }
  .header{
    font-size: 1.2em;
    background: linear-gradient(aquamarine , #9dadb9);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .top{
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }



  .progress-bar{
    height: 20px;
    margin-bottom: 5px;
  }

  .bot{

  }

  .bot .balance{
    text-align: center;
  }


  .date i{
    display: inline-block;
    border: 1px solid #92E3F0;
    border-radius: 30%;
  }



</style>
