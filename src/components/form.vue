<template>
  <transition enter-active-class="animated bounceInRight">
    <div class="wrap-form">
      <form id="form" @submit.prevent="add" >
        <div class="forma">
          <div class="bot">
            <div @click="cancel" class="btn btn-warning" style="margin-bottom: 1.5vh; width: 95%; margin-right: 5%">cancel</div>
            <div class="bot-top">
              <input class="form-control count"  type="number" inputmode="numeric"
                     v-model="count">
              <button :disabled="!count" class="button btn btn-success"><i class="fa fa-check"></i></button>
            </div>
            <input class="form-control" id="comment" type="text" placeholder="comment.."
                   v-model="comment">
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>


<script>
  import { mapGetters } from 'vuex';

  export default{
    props:['index4Form'],
    data(){
      return {
        count: '',
        comment : ''
      }
    },
    computed:{
      ...mapGetters(['spent'])
    },
    methods:{
      cancel(){
        this.$emit('cancel');
      },
      add(){
        this.$emit('add', {
          amount : this.count,
          comment: this.comment,
          item: Object.keys(this.spent)[this.index4Form]
        });
      }
    }
  }
</script>

<style scoped>

  .wrap-form{
    width: 90%;
    margin: 0 5%;

  }

  .forma{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }


  .bot{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 0 30%;
  }

  .bot-top{
    display: flex;
    flex-direction: row;
  }

  .count{

  }
  .bot-top .button{
    margin: 0 7% 0 7%;
  }

  #comment{
    margin-top: 5px;
  }

</style>
