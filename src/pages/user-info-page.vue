<template>
  <div class="user-info-page">
   <div class="wrapper">
      <h1>Редактирование информации</h1>
      <div class="page___content">
         <div class="edit-form">
            <div class="edit-form__item" :key="item.key" v-for="item in info">
               <h3>{{item.text}}: </h3>
               <vTextInput
               :value="user[item.key]"
               :validate=isEmailValid
               @input="event => user[item.key] = event.target.value"
               :placeholder="item.text"
               :type="((item.key!=='email')?'text':'email')"
               ></vTextInput>
            </div>
            <div class="edit-form-item">
               <!-- Тут должна загружаться картинка.  -->
               <vImgInput v-show=false
               @img-upload='imgUpload'
               ></vImgInput>
                 
             </div>
         </div>
         <vUserListItem
          :data="user"
          :key="user.id"
          @edit-user='editItem'
          @remove-user='removeUser'
          btn_text="Применить"
        ></vUserListItem>
      </div>
   </div>
</div>
</template>

<script>
import { isAuthService } from '/src/utils/isAuthService';
import { userService } from '/src/utils/userService';
import vTextInput from "/src/components/UI/v-text-input";
import vImgInput from "/src/components/UI/v-img-input";
//import vBtnStandart from  "/src/components/UI/v-btn-standart";
import vUserListItem from "../components/UI/v-users-list-item";

export default {
 name: 'user-info-page',
 components: {
   vTextInput,
   vImgInput,
   //vBtnStandart,
   vUserListItem
 },
 data(){
    return {
      user: {},
      info: [],
      isEmailValid: true,
    }
 },
 watch:{
   'user.email' (newV){
        this.isEmailValid = (function isEmailValid(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        })(newV);
    }
 },
 mounted(){
    if(!isAuthService.isAuth()){
        this.$router.push({name: 'auth', query: {'is-auth': false}})
    } else {
      this.getUserInfo()
    }
 },
 methods: {
   calcInfo(){
      for(let key in this.user){
         if(Object.prototype.hasOwnProperty.call(this.user,key)){
            if(key == 'surname')
               this.info.push({text: 'Фамилия', key: key})
            if(key == 'name')
               this.info.push({text: 'Имя', key: key})
            if(key == 'patronymic')
               this.info.push({text: 'Отчество', key: key})
            if(key == 'tel')
               this.info.push({text: 'Телефон', key: key})
            if(key == 'email')
               this.info.push({text: 'Email', key: key})
            if(key == 'birth')
               this.info.push({text: 'Дата рождения', key: key})
         }
      }
   },
   imgUpload(file){
      alert(typeof file)
      this.user.img = file
   },
   getUserInfo(){
      this.user = userService.getItemById(parseInt(this.$route.query.id))
      this.calcInfo()
   },
   editItem(){
      //if(this.isEmailValid){
         userService.updateItem(this.user.id, this.user)
         this.$router.push({name: 'users-list'})
      //}
   },
   removeUser(user){
      userService.removeItem(user.id)
      this.$router.push({name: 'users-list'})
   }
 }
}
</script>

<style lang="scss" scoped>
.page___content{
   display: flex;
   justify-content: space-between;
}
@media (max-width: 700px)and (max-aspect-ratio: 3/2) {
   .page___content{
      flex-wrap: wrap;
      text-align: left;
      margin: 5px;
      justify-content: center;
      gap: 20px;
   }
}
</style>