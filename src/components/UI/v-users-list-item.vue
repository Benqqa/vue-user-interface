<template>
  <div class="v-users-list-item">
    <vBtnIco
    class="remove-btn"
    @click="removeItem(data)"
    ></vBtnIco>
    <div class="item__img">
        <img :src=" require('/src/assets/img/' + ((data.img == null)? 'null.jpg' : data.img) )" alt="">
    </div>
    <div class="item__content">
        <div class="item__title">
            <h2>{{getFullName()}}</h2>
            <h3>День рождения: {{data.birth}}</h3>
            <h3>Email: {{data.email}}</h3>
            <h3>Телефон: {{data.tel}}</h3>
        </div>
        <div class="item__bottom">
           
            <!--<div class="item__price">
                <h6 
                    class="item__discount"
                    v-if="data.discountPrice != null"
                >
                    {{formattedPrice(toFix(data.discountPrice))}}
                </h6>
                <h3 class="item__price">{{formattedPrice(toFix(data.price))}}</h3>
            </div>-->
            <vBtnStandart
                :text=btn_text
                @click="editItem(data)"
                ></vBtnStandart>
        </div>   
    </div>
  </div>
</template>

<script>
import vBtnStandart from  "/src/components/UI/v-btn-standart";
import vBtnIco from "/src/components/UI/v-btn-ico";
export default {
    name: 'v-user-list-item',
    components:{
        vBtnStandart,
        vBtnIco,
    },
    props:{
        data:{
            type: Object,
            default(){
                return {}
            }
        },
        btn_text: {
            type: String,
            default(){
                return 'Редактировать'
            }
        },
    },
    data(){
        return {
            image: ''
        }
    },
    mounted(){
        //this.image = require(this.data.img)
    },
    methods:{
        editItem(user){
            this.$emit('edit-user', user)
        },
        removeItem(user){
            this.$emit('remove-user', user)
        },
        getFullName(){
            let isNewUser = this.data.surname == null && this.data.patronymic == null && this.data.name == null 
            return (isNewUser)? 'Ф.И.О.: ---': `${this.data.surname || ''} ${this.data.name || ''} ${this.data.patronymic || ''}`
        },
    }
}

</script>

<style lang="scss" scoped>
.remove-btn{
    position: absolute;
    top: 5px;
    right: 5px;  
    //z-index: 1000;
}
.item__content{
    padding: 20px 22px 24px 22px;
}
.item__discount{
    text-decoration: line-through;
    color: #A0A0A0;
}
.item__price{
    color: #343030;

}
.item__title{
    margin: 0 12px 20px 0;
}
.item__img{
    width: 100%;
    height: 156px;
    //margin-bottom: -10px;
    &>img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.item__body{
    margin-bottom: 40px;
}
.item__bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
}
.v-users-list-item{
    position: relative;
    width: 280px;
   // max-height: 328px;
    border: solid 1px #E1E1E1;
}
.shadow{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.411);
}
</style>