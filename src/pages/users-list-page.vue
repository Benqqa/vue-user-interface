<template>
  <div class="users-list-page">
    <div class="wrapper">
      <h1>Список пользователей</h1>
      <vBtnStandart
      class="add-btn"
      text="Добавить"
      @click="addUser()"
      ></vBtnStandart>
      <div class="content">
        <vUserListItem
          v-for="item in users"
          :data="item"
          :key="item.id"
          @edit-user='editUser'
          @remove-user='removeUser'
          btn_text="Редактировать"
        ></vUserListItem>
      </div>
    </div>
  </div>
</template>

<script>
import { isAuthService } from '/src/utils/isAuthService';
//import vHeader from "/src/components/UI/v-header.vue";
import vBtnStandart from  "/src/components/UI/v-btn-standart";
import vUserListItem from "../components/UI/v-users-list-item";
import { userService } from '/src/utils/userService';
export default {
 name: 'users-list-page',
 components:{
  //  vHeader,
    vBtnStandart,
    vUserListItem,
},
 data(){
    return {
      users: [],
      //можно конечно положить дату в json...н
      data:[
        {
          img: '1.png',
          name: 'Сандро',
          surname: 'Боттичелли',
          patronymic: 'Витальевич',
          birth: "11.03.1802",
          email: 'benyuh.ma@bk.ru',
          tel: '+79819030053',
          id: 1,
        },
        {
          img: '2.png',
          name: 'Сандро',
          surname: 'Боттичелли',
          patronymic: 'Витальевич',
          birth: "11.03.1802",
          email: 'benyuh.ma@bk.ru',
          tel: '+79819030053',
          id: 2,
        },
        {
          img: '3.png',
          name: 'Сандро',
          surname: 'Боттичелли',
          patronymic: 'Витальевич',
          birth: "11.03.1802",
          email: 'benyuh.ma@bk.ru',
          tel: '+79819030053',
          id: 3,
        },
        {
          img: '4.png',
          name: 'Сандро',
          surname: 'Боттичелли',
          patronymic: 'Витальевич',
          birth: "11.03.1802",
          email: 'benyuh.ma@bk.ru',
          tel: '+79819030053',
          id: 4,
        }
      ]
    }
 },
 mounted(){
    if(!isAuthService.isAuth()){
        this.$router.push({name: 'auth', query: {'is-auth': false}})
    } else{
      this.getUsers()
      if(this.users.length === 0){
        this.saveData()
        this.getUsers()
      }
    }
 },
 methods:{
  saveData(){
    userService.storeAll(this.data)
  },
  getUsers(){
    this.users = userService.getAll()
  },
  removeUser(user){
    userService.removeItem(user.id)
    this.getUsers()
  },
  addUser(){
    let user = {
      img: null,
      name: null,
      surename: null,
      patronymic: null,
      birth: null,
      email: null,
      tel: null,
      id: null,
    }
    userService.updateItem(user.id, user)
    this.getUsers()
  },
  editUser(user){
    this.$router.push({name: 'user-info', query: {'id': user.id}})
  },
 }
}
</script>

<style lang="scss">
body{
  display: flex;
  flex-direction: column;
}
.users-list-page{
  min-height: 70.5vh;
  flex: 1;
}
.add-btn{
  margin-top: 25px;
}
.content{
  display: flex;
  gap: 32px;
  margin-top: 40px;
  flex-wrap: wrap;
}
.wrapper{
  padding: 0 17% 0 18.50%;
}
@media (max-aspect-ratio: 3/2) {
  .wrapper{
    padding: 0vw ;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .content{
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 700px)and (max-aspect-ratio: 3/2) {
  .wrapper{
    padding: 0vw ;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .content{
    flex-direction: column;
    align-items: center;
  }
}
</style>