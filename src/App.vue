<template>
  <div id="app">
    <form-add-goal v-if="!goalAdded"></form-add-goal>
    <my-content v-else></my-content>
  </div>
</template>

<script>
  import FormAddGoal from './components/FormAddGoal';
  import MyContent from './components/content';
  import { mapGetters } from 'vuex';



  export default {
    computed: {
      ...mapGetters(['goalAdded']),
    },

    components : {
      FormAddGoal,
      MyContent
    }
  }
</script>

<style scoped>
  #app{
    background: radial-gradient(dodgerblue, white);
  }
</style>
