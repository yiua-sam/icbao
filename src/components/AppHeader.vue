<template>
  <div id="appHeader">
    <img class="header-logo" src="@/assets/logo.png" alt="IC Bao">
    <div class="navigator">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/jobs">Jobs</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

  #appHeader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    z-index: 999;
    height: 60px;
    background: rgba(71, 51, 53, 0.6);
  }

  .header-logo {
    border-radius: 100%;
    padding: 5px;
    background: rgba(255, 255, 255, 0.6);
    margin-top: 2px;
    margin-bottom: 2px;
    height: 45px;
    position: absolute;
    left: 15%;
    z-index: 999;
  }

  .navigator {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .navigator > a {
    color: rgba(255, 255, 255, 1);
    /*color: rgba(71, 51, 53, 1);*/
    margin-left: 40px;
    margin-right: 15px;
    transition: color linear 200ms;
    font-size: 0.8em;
  }

  .navigator > a:hover {
    color: rgba(220, 42, 38, 1);
    transition: color linear 200ms;
  }
</style>

