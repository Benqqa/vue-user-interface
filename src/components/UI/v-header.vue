<template>
  <div class="v-header">
      <div class="nav">
        <div class="nav__row">
          <div class="nav__menu menu">
            <nav class="menu__body">
              <ul class="menu__list">
                <li></li>
                <li></li>
                <li><h5 href="" class="menu__link" @click="Exit()">Выход</h5></li>
                <li><h5 href="" class="menu__link" @click="openUsersList()">Список пользователей</h5></li>
                <li><h5 href="" class="menu__link">Работа</h5></li>
                <li><h5 href="" class="menu__link">Контакты</h5></li>
                <li><h5 href="" class="menu__link">О компании</h5></li>
              </ul>
            </nav>
        </div>
        <div class="nav__actions act-nav">
          <h1>LOGO</h1>
					</div>
        </div>
      </div>
    </div>
</template>

<script>
import { isAuthService } from '/src/utils/isAuthService';

export default {
    name: 'v-header',
    components:{
    },
    methods: {
      openUsersList(){
        this.$router.push({name: 'users-list'})
      },
      Exit(){
        isAuthService.removeAuth()
        this.$router.push({name: 'auth'})
      }
    }
}
</script>

<style lang="scss">
.v-header{
  margin-bottom: 49px;
  height: 95px;
  border: solid 1px #E1E1E1;
  border-right: none;
  border-left: none;
  &>.nav{
    width: 100%;
    height: 100%;
    padding: 0 18.25%;
  }
}

.nav__row{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__list{
  color:#343030;
  display: flex;
  gap: 48px;
}
.menu__link{
  cursor: pointer;
  white-space: nowrap;
}
@media (max-width: 700px)and (max-aspect-ratio: 3/2) {
  .v-header{
  margin-bottom: 49px;
  min-height: 70vh;
  border: solid 1px #E1E1E1;
  border-right: none;
  border-left: none;
  &>.nav{
    width: 100vw;
    height: 100vw;
    padding: 0 ;
  }
}
.menu__list{
  flex-direction: column;
  gap: 2vw;
}
.nav__row{
  width: 100vw;
  height: 100vw;
  flex-direction: column;
}
}
</style>