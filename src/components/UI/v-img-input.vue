<template>
  <div class="v-img-input">
    <input
    type="file"
    id="file"
    ref="img"
    class="custom-file-input"
    accept="image/jpeg, image/png" 
    @change="previewFiles"
    >
  </div>
</template>

<script>
export default {
    name: 'v-img-input',
    data(){
        return {
            file: ''
        }
    },
    methods: {
        previewFiles() {
            this.file = this.$refs.img.files[0]
            this.$emit('img-upload', this.file)
        }
    }
}
</script>

<style>

</style>