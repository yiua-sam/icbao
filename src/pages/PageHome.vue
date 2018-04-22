<template>
  <div id="page-home">
    <HomeBanner/>
    <HomeIntroduction v-vpshow/>
    <ViewTransition :img="firstTransition"/>
    <HomeMenu v-vpshow/>
    <ViewTransition :img="firstTransition"/>
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import HomeIntroduction from '@/components/HomeIntroduction';
  import HomeMenu from '@/components/HomeMenu';
  import ViewTransition from '@/components/ViewTransition';

  export default {
    components: {
      HomeBanner,
      HomeIntroduction,
      HomeMenu,
      ViewTransition
    },
    props: {
        routerPath: {
          required: false,
          type: String,
          default: ''
        }
    },
    computed: {
      firstTransition() {
        return {
          src: require('@/assets/img/banner.jpg'),
          alt: 'Transition'
        }
      }
    },
    updated() {
      console.log('routerpath is', this.routerPath)
    }
  }
</script>

<style scoped>
  #page-home {
    color: rgb(240, 240, 240);
    background: rgb(30, 30, 30);
  }
</style>
