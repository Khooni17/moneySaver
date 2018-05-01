<template>
  <div style="width: 100vw; height: 100vh">

    <h2>Congratulations!</h2>
    <span>{{ `you have accumulated on the ${goalName} in ${countDays} days` }}</span>
    <button style="position: absolute; top: 50%; left: 28%" @click="newGoal" class="btn btn-primary">Make new goal!
    </button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['goalName', 'countDays'])
    },
    methods: {
      newGoal() {
        this.$store.dispatch('newGoal');
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: blue;
    margin: 0;
    position: absolute;
    left: 15%;
    top: 30%;
  }

  span {
    color: blue;
    position: absolute;
    top: 42%;
    left: 12%;
    font-size: 1.3em;
  }
</style>
