<template>
  <div id="app">
    <form-add-goal v-if="!goalAdded"></form-add-goal>
    <my-content v-if="goalAdded && !goalFinished"></my-content>
    <goal-finished v-if="goalFinished && goalAdded"></goal-finished>
  </div>
</template>

<script>
  import FormAddGoal from './components/FormAddGoal';
  import goalFinished from './components/goalFinished';
  import MyContent from './components/content';
  import {mapGetters} from 'vuex';


  export default {
    computed: {
      ...mapGetters(['goalAdded', 'goalFinished']),
    },

    components : {
      FormAddGoal,
      MyContent,
      goalFinished
    }
  }
</script>

<style scoped>
  #app{
    background: radial-gradient(dodgerblue, white);
  }
</style>
