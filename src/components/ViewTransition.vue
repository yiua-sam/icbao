<template>
  <div class="transition">
    <img :src="img.src" :alt="img.alt"/>
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        src: {
          required: true,
          type: String
        },
        alt: {
          type: String,
          default: ''
        }
      }
    }
  }
</script>

<style scoped>
  .transition {}

  .transition > img{
    width: 100%;
    height: 700px;
  }
</style>
