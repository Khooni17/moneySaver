<template>
  <div id="cont">
    <div class="content" :style="showingForm ? 'opacity: 0.3' : ''">
      <div v-if="!showHistory" class="wrapper">
        <my-header></my-header>
        <div class="gap-header" :style="colorGapYesterday"></div>
        <div class="no-header" :style="colorToday">
          <div class="messages-bar">
            <div class="yesterday-bar" :style="colorYesterday">
              <p>{{ messageYesterday }}</p>
            </div>
            <div class="gap"></div>
            <div class="mark-bar" v-if="showMark" :style="colorMark" style="width: 99vw; box-shadow: 2px 2px #680e65;">
              <p>{{ messageMark }}</p>
            </div>
          </div>
          <div class="app__wrapper">
            <left-bar class="left-bar" @showForm="showForm"></left-bar>
            <div class="Chart" v-if="showCart">
              <my-chart
                :val="val"
              ></my-chart>
            </div>
            <right-bar class="right-bar" @showForm="showForm"></right-bar>
          </div>
          <my-footer @showHistory="showHistory = true">
          </my-footer>
        </div>
      </div>
    </div>
    <app-form
      v-if="showingForm"
      class="app-form"
      :index4Form = "index4Form"
      @add="add"
      @cancel="showingForm = false"
    >
    </app-form>
    <transition enter-active-class="animated bounceInUp">
      <div class="historyBlock" v-if="showHistory">

      <div class="historyHeader" >
        <button class="btn btn-primary button-exit" @click="showHistory = false">&#8592;</button>
        <h2>History</h2>
        <hr>
      </div>
      <div class="history-items">
        <div class="history-item" v-for="item in history">
          <span class="category">{{item.item}}</span>
          <span class="amount"><i>{{ item.amount }} &#8381;</i></span>
          <hr>
          <div class="bot">
            <p>{{new Date(item.date).getHours() > 10 ? new Date(item.date).getHours() : `0${new Date(item.date).getHours()}`}}:{{new Date(item.date).getMinutes() > 10 ? new Date(item.date).getMinutes() : `0${new Date(item.date).getMinutes()}`}} {{new Date(item.date).getDate()}}.{{new Date(item.date).getMonth()}}.{{new Date(item.date).getFullYear()}}</p>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <div class="goalFinished">
      <!--цель закончена, поздравления-->
    </div>
  </div>
</template>

<script>
  import MyChart from './Chart';
  import LeftBar from './LeftBar';
  import RightBar from './RightBar';
  import AppForm from './form';
  import MyHeader from './Header';
  import MyFooter from './MyFooter';
  import FormAddGoal from './FormAddGoal';
  import {mapGetters} from 'vuex';


  export default {
    mounted() {
      let d = new Date();
      if(!this.lastJoinDate || (new Date(this.lastJoinDate).getMonth() + 1 !== d.getMonth() + 1)){
        this.$store.dispatch('newMonthInit');
        this.$store.dispatch('newDayInit');
      } else if(new Date(this.lastJoinDate).getDate() !== d.getDate()){
        this.$store.dispatch('newDayInit');
      }

      this.$store.commit('setJoin', d);
      if (this.moneyboxBar >= 100) {
        this.$store.dispatch('finishGoal');
      }
    },
    data(){
      return {
        savedMoney: '',
        arrayDaysHoard: [],
        index4Form : 0,
        showingForm : false,
        val: false,
        showHistory: false,
        showFormAddGoal: false,
        controlsAddGoal: [],
        addGoalName: '',
        addGoalAmount: '',
        addGoalSalary: '',
      }
    },
    computed: {
      ...mapGetters(['moneyboxBar', 'showCart', 'lastJoinDate', 'messsageMark', 'showMark', 'colorToday', 'colorYesterday', 'colorGapYesterday', 'colorMark', 'spent', 'colors', 'history', 'messageYesterday', 'timeGoalCreated', 'lastJoinDate', 'messageMark']),
    },
    methods:{
      showForm(e){
        console.log(e.index);

        this.index4Form = e.index;
        this.showingForm = !this.showingForm;
      },
      add(e){
        this.$store.dispatch('addComment', e);
        this.showingForm = !(this.showingForm);
        this.val = !this.val;
      },
    },
    watch:{
      state(){
        console.log(this.state);
      }
    },
    components : {
      MyChart,
      RightBar,
      LeftBar,
      AppForm,
      MyHeader,
      MyFooter,
      FormAddGoal
    }
  }
</script>

<style scoped>
  .messages-bar{
    height: auto;
  }
  .header{
    height: 25vh;
  }

  .gap-header{
    height: 5vh;
  }

  .no-header{
    height: 70vh;
  }
  .footer{
    position: absolute;
    bottom: 0;
    left: 40%;
    height: 7vh;
    margin: 0;
  }
  .mark-bar{
    font-size: 1.1em;
    text-align: center;
    height: auto;
    color: black;
    border: groove 1px black;
    border-radius: 25%;
  }
  .mark-bar p{
    padding: 1%;
    margin: 0;
  }
  .gap{
    height: 3vh;
  }

  #cont{
    margin: 0;
    overflow: hidden;

  }
  .wrapper{
    width: 100vw;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-around;

  }

  .left-bar, .right-bar {
    width: 20%;
  }
  .Chart {
    width: 40%;
  }
  .content{
    width: 100vw;
    display: flex;
    overflow: hidden;
  }
  .app__wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 45vh;
  }

  .yesterday-bar{
    text-align: center;
    line-height: 23px;
    font-size: 0.93em;
    border-left: 16vw solid transparent;
    border-right: 16vw solid transparent;
    height: 0;
    width: 100vw;
    transform: rotate(180deg);
  }

  .yesterday-bar p{
    color: #343e3f;
    transform: rotate(180deg);
    margin: 0;
  }

  .app-form{
    width: 60%;
    height:30%;
    position: absolute;
    top: 33%;
    left: 5%;
  }


  .beforeAddGoal p{
    font-size: 2em;
    text-align: center;
    margin: 20px 0 0 0;

  }


  .historyBlock{
    width: 90%;
    height: auto;
    margin: 0 auto;

  }


  .formAddGoal h2{
    display: inline-block;
  }

  .historyBlock h2{
    text-align: center;
  }

  .history-item{
    width: 100%;
    position: relative;
    height: 100px;
    border: 1px solid #9d9d9d;
    border-radius: 7%;
    margin: 0 0 5% 0;
  }

  .button-exit{
      position: absolute;
  }

  .history-item .top{
    height: 70%;
    width: auto;
  }
  .history-item .top p {
    margin: -20% 0 0 60%;
    height: auto;
  }

  .history-item .bot {
    height: 20px;
    border: 1px solid #9d9d9d;
    border-radius: 7%;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .history-item .category{
    margin: 5% 0 0 5%;
    font-size: 1.5em;
  }

  .historyHeader{
    height: 15%;
    position: static;
  }

  .historyHeader h2{
    top: 0;
  }

  .history-items{
    position: static;
    margin-top: 5%;
  }

  .history-item .amount{
    margin: 5% 0 0 60%;
  }

</style>
