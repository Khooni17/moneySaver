<template>
  <div class="footer">
    <a class="history" @click="showHistory">
      <span class="fa fa-history" style="font-size: 1.5em">  history</span>
    </a>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';


    export default {
      data(){
        return {
          showingHistory: false
        }
      },
      computed:{
        ...mapGetters(['history'])
      },
      methods: {
        showHistory(){
          this.$emit('showHistory')
        }
      }
    }
</script>

<style scoped>

  .history{
    display: inline-block;
  }
</style>
