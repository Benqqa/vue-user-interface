<template>
  <div class="v-text-input" :class="{'active': magic_flag, 'red': (!validate && type === 'email')}">
    <input 
        @focus="magic_flag = true"
        @blur="magic_flag = false"
        :type=type
        :value="value"
        required
        :placeholder=placeholder
        
    >
  </div>
</template>

<script>

export default {
    name: 'v-text-input',
    components:{
        
    },
    props:{
      placeholder:{
        type: String,
        default(){
          return 'Введите текст'
        }
      },
      value: {
        type: String,
        default(){
          return 'rfif'
        }
      },
      type:{
        type: String,
        default(){
          return 'text'
        },
      },
      validate: {
        type: Boolean,
        default(){
          return false
        }
      }
    },
    data(){
        return{
            magic_flag: false,
        }
    },
    watch:{
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.v-text-input{
    display: flex;
    width: 416px;
    height: 48px;
    border: solid 1px #E1E1E1;
    &>input{
        width: 100%;
        height: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #343030;
        padding: 13px 16px 14px 16px;
    }
}
.active{
    border-color: #B5B5B5;
}
.red{
  border-color: red;
}
@media (max-width: 700px)and (max-aspect-ratio: 3/2) {
    .v-text-input{
        width: 98vw;
        flex-direction: column;
        &>input{
            width: 100vw;
            height: 100vw;
        }
    }
}
</style>