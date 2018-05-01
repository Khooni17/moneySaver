<template>
  <transition enter-active-class="animated bounceInRight" appear>
    <div class="bar">
      <a v-for="(item,index) in colorsRightMenu" @click="showForm(index)">
        <div class="link">
          <p>{{ categories[index + 4] }}</p>
          <div class="menu-icon" :style="{'background-color' : item}">
            <i class="fa" :class="icons[index + 4]"></i>
          </div>
        </div>
      </a>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapGetters(['colors', 'icons', 'spent', 'categories', 'colorsRightMenu']),
    },
    methods: {
      showForm(index){
        this.$emit('showForm', { index: (index + 4) });
      }
    }
  }

</script>

<style scoped>

  .bar{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  i{
    color: white;
    position: absolute;
    top: 27%;
    left: 30%;

  }

  a{
    margin: 15% 0 0 0;
    display: block;
    color: black;
    height: 25%;
    width: 50%;


  }
  a:hover{
    text-decoration: none;
  }

  .bar a .link{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .bar a p{
    justify-self: center;

  }

  .bar a .menu-icon{
    height: 25px;
    width: 25px;
    position: relative;
    justify-self: center;
    border-radius: 50%;
    box-shadow: 0 0 5px;
  }


</style>
