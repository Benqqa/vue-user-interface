<template>
  <div class="auth-page">
    <div class="auth-card ">
            <div class="card card__container">
                <div class="card__logo">
                    <div class="card__title" >Авторизация</div>
                </div>
                    <form action="" method="get" class="card__main" id="login-form">
                      <div class="card__block">
                        <h2 class="card__subtitle">
                        Для редактирования и добавления данных авторизируйтесь как Администратор.
                        </h2>
                      </div>
                        <div class="card__inputs">
                            <vTextInput  required
                            :value="email"
                            @input="event => email = event.target.value"
                            :validate=isEmailValid
                            placeholder="Логин"  type="text" tabindex="1"  autocomplete = "email"></vTextInput>
                            <vTextInput 
                            :value="password"
                            @input="event => password = event.target.value"
                                placeholder="Пароль" required type="password" tabindex="2"  autocomplete = "current-password" v-on:keyup.enter="handleSubmit"></vTextInput>
                        </div>
                        <div class="card__futter">
                            <vBtnStandart text='Вход'  tabindex='3'  @click="handleSubmit" v-on:keyup.enter="handleSubmit"></vBtnStandart>
                        </div>
                    </form>
                <div class="card__bottom"></div>
            </div>
    </div>
  </div>
</template>

<script>
import vBtnStandart from  "/src/components/UI/v-btn-standart.vue";
import vTextInput from  "/src/components/UI/v-text-input.vue";
import { isAuthService } from '/src/utils/isAuthService';

export default {
 name: 'auth-page',
 components:{
    vBtnStandart,
    vTextInput
 },
 data() {
    return {
        email: 'admin',
        password: 'admin',
        isEmailValid: true,
    }
 },
 watch:{
    email(newV){
        this.isEmailValid = (function isEmailValid(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        })(newV);
    }
 },
 methods:{
    handleSubmit (){
        if(isAuthService.Auth(this.email.trim(), this.password.trim())){
            this.$router.push({name: 'users-list'})
        } else {
            alert('ошибка')
        }
    },
 }
}
</script>

<style lang="scss" scoped>
.auth-card {
	overflow: hidden;
	display: flex;
	justify-content: center;
	padding-top: 6.5vh;
	height: 100%;
	width: 100%;
    background-size: cover;
}
.card {
	width: 37.6vw;
	height: 53vh;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	-webkit-box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.60);
	box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.60);
}
.card__logo{
	height:7.5vh;
	display: flex;
	align-items: center;
	color: #110568;
	background-color: #fff;
    position: relative;
}


.card__title {
	height: 100%;
	width: 12.7vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
	font-size: 2.8vh;
	background-color: #e7efff;
}
.card__title:before{
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    width: 12.7vw;
    height: 0.5vh;
    background: #031d5f;
    z-index: 999;
}
.card{
    box-shadow: 0 0px 0px 0px rgba(0,0,0,0.5);
}
.card__block{
    height: 12.5vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.card__subtitle{
    width: 25vw;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size:2.15vh
}
.card__main {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	box-shadow: inset 0px 0px 0.5vh rgba(0,0,0,0.5);
}
.card__inputs{
	width: 90%;
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2vh	;
	align-items: center;
}
.change__password{
	flex: 0 0 30px;
}
.change__password {
	color: #fff;
	color: #14a3ff;
	font-size: 1.5em;
}
.card__futter {
	flex: 0 0 10vh;
	display: flex;
	justify-content: center;
	gap: 1vw;
}
.card__futter:first-child{
	background-color: #cccbcc;
}
@media (max-width: 700px)and (max-aspect-ratio: 3/2) {
.card{
    height: auto;
    width: 100vw;
}
.card__title{
    width: 100%;
    &::before{
        width: 100%;
    }
}
.card__subtitle{
    width: auto;
    margin-bottom: 20px;
    //text-align: left;
    padding: 0 10px;;
}
}
</style>