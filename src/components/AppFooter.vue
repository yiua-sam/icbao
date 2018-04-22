<template>
  <div id="appFooter">
    <div class="center">
      <h3>FOLLOW US ON SOCIAL MEDIA</h3>
      <!-- all icons are from Iconfinder -->
      <img class="social-icons" v-for="p in platforms" :alt="p.title" :src="p.src" @click="goToUrl(p.link)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appFooter',
    components: {},
    data () {
      return {
        platforms: [
          {
            title: 'Facebook',
            src: require('@/assets/icons/share-facebook.png'),
            link: 'https://www.facebook.com/Icbao/'
          },
          {
            title: 'Twitter',
            src: require('@/assets/icons/share-twitter.png'),
            link: 'https://twitter.com/'
          },
          {
            title: 'Instagram',
            src: require('@/assets/icons/share-instagram.png'),
            link: 'https://www.instagram.com/'
          },
          {
            title: 'Snapchat',
            src: require('@/assets/icons/share-snapchat.png'),
            link: 'https://www.snapchat.com/'
          },
//                    {
//                        title: 'Whatsapp',
//                        src: require('@/assets/icons/share-whatsapp.png'),
//                        link: 'https://www.whatsapp.com/'
//                    },
        ]
      }
    },
    methods: {
      goToUrl: function (link) {
        console.log('opening: ' + link);
        window.open(link, '_blank');
      }
    },
    created() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #appFooter {
    background: rgb(71, 51, 53);
    height: 100%;
    padding-top: 10px;
    color: white;
  }

  .social-icons {
    height: 50px;
    width: 50px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .social-icons:hover {
    cursor: pointer;
  }

</style>
