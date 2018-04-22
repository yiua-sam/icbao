<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import AppFooter from '@/components/AppFooter';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Jua', sans-serif;
    /*background: rgba(71, 51, 53, 1);*/
    /*background: rgba(255, 255, 199, 1);*/
    /*background: white;*/
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  .center {
    text-align: center;
  }

  .container {
    margin-left: 15%;
    margin-right: 15%;
  }

  .table-container {
    display: table;
  }

  .table-cell {
    display: table-cell;
  }

  section {
    margin-top: 20px;
  }


  /* v-vpshow classes */
  .before-enter {
    opacity: 0;
  }

  .enter {
    transition: opacity 2.5s ease;
  }
</style>
