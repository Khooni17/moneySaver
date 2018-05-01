<template>
    <div class="container">
      <transition>
        <div class="beforeAddGoal" leave-active-class="animated bounceOutDown" v-if="!goalAdding">
          <h4>Hello, lets start to save money!</h4>
          <button class="btn btn-secondary buttonAddGoal" @click="goalAdding = !goalAdding">go</button>
        </div>
      </transition>
      <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown" appear>
        <div v-if="flagToAnimate && goalAdding" class="addingGoal">
          <form @submit.prevent="1">
            <h4>{{questions[i]}}</h4>
              <input v-if="questions[i]"
                     class="form-control addGoalInput"
                     :type="typeText"
                     :placeholder="procents"
                     v-model="answers[i]"
                     @input="controls[i] = true">
              <button
                      :disabled="!controls[i]"
                      v-if="questions[i]"
                      class="btn btn-secondary buttonAddGoal"
                      @click="next">
              next
            </button>
            <button v-if="!questions[i]" class="btn btn-danger buttonAddGoal" @click="addGoal">I ready!</button>
            <button v-if="i > 1" class="btn btn-warning buttonAddGoal" @click="i--">back</button>
          </form>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          goalAdding: false,
          procents: '',
          flagToAnimate: true,
          i: 1,
          showFormAddGoal: false,
          questions: {
            1: 'Tap the name of your goal ',
            2: 'Tap the amount of your goal',
            3: 'Tap your salary ',
            4: 'Do you want to postpone part of the salary at the beginning of the month ? '
          },
          answers:{
            1: '',
            2: '',
            3: '',
            4: '',
          },
          controls:{
            1: false,
            2: false,
            3: false,
            4: false
          }
        }
      },
      computed:{
        typeText(){
          return this.i === 1 ? 'text' : 'number';
        }
      },
      methods:{
        next(){
          this.i++;
          if(this.i > 3){
            this.procents = '%,  if no just tap zero';
          }
          this.flagToAnimate = !this.flagToAnimate;
          const change = () => {
            this.flagToAnimate = !this.flagToAnimate;
          };
          setTimeout(change, 750);


        },
        addGoal(){
          this.$store.dispatch('goalInit', {
            goalName: this.answers[1],
            goalAmount: this.answers[2],
            salary: this.answers[3],
            StartInvest: this.answers[4],
          });
          this.$emit('goalAdded');
        }
      }
    }
</script>

<style scoped>
  .addingGoal{
    margin-top: 45%;
  }

  .addingGoal h4{
    margin-bottom: 15%;
  }

  .addGoalInput{
    margin: 0 auto;
    width: 50vw;
  }

  .beforeAddGoal{
    margin-top: 50%;
  }
  .container{
    background: radial-gradient(dodgerblue, white);
    height: 100vh;
  ;
  }
  h4{
    text-align: center;

  }
  .buttonAddGoal{
    margin: 30% 0 0 30%;
    padding: 0 15%;
  }



</style>
