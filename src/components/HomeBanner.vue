<template>
  <div class="welcome-banner">
    <img class="welcome-banner" alt="welcome banner" src="@/assets/img/banner.jpg">
    <div class="welcome-banner-center">
      <img class="" alt="logo" src="@/assets/logo.png">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes fadeIn {
    0% {
      height: 0;
    }
    20% {
      height: 30%;
    }
    40% {
      height: 70%;
    }
    60% {
      height: 110%;
    }
    80% {
      height: 110%;
    }
    100% {
      height: 100%;
    }
  }

  #intro {

  }

  .welcome-banner {
    height: 100vh;
    background: rgba(255, 255, 199, 1);
  }

  .welcome-banner > img {
    width: 100%;
  }

  .welcome-banner-center {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: auto;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .welcome-banner-center > img {
    border-radius: 100%;
    padding: 15px;
    background: rgba(255, 255, 255, 0.6);
    max-height: 30vh;
    user-select: none;
    animation: fadeIn 5s;
    /*-webkit-box-reflect: below -5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.3)));*/
  }
</style>
