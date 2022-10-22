<template>
  <div class="v-btn-ico">
    <img 
        class="v-btn-ico-image"
        :src="require('/src/assets/img/delete.svg')" alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'v-btn-image'
}
</script>

<style lang="scss" scoped>
.v-btn-ico{
  cursor: pointer;
  width: 30px;
  height: 30px;
  &>img{
    width: 100%;
    height: 100%;
  }
}
</style>