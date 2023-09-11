<template>
  <HeaderVueExterno></HeaderVueExterno>
  <main class="main">
    <section class="project">
      <div class="project_information">
        <div class="balu_autions_titles">
          <h2>Balú Auctions</h2>
          <h3>DAW Final Project</h3>
        </div>
        <div class="overview">
          <h4>Overview</h4>
          <p>
            "Balú Auctions" is a modern online auction platform that aims to
            make online bidding more popular and exciting. The goal is to
            provide users with a simple and easy-to-use experience, where they
            can enjoy the fun of bidding on unique items and getting them at
            great prices. With a user-friendly interface, we want to create a
            special and enjoyable buying and selling experience.
          </p>
        </div>
        <div class="technologies">
          <h4>Main technologies</h4>
          <ul class="ul">
            <li class="li">Vue.js</li>
            <li class="li">ExpressJS</li>
            <li class="li">Mysql</li>
            <li class="li">SASS</li>
            <li class="li">Vuex</li>
            <li class="li">Socket.IO</li>
            <li class="li">Axios</li>
            <li class="li">Stripe</li>
          </ul>
        </div>
      </div>
      <div class="balu_auction_video">
        <video autoplay loop muted preload="auto">
          <source src="/src/assets/videos/Balu_Auction.mp4" />
        </video>
      </div>
    </section>
  </main>
  <FooterVue></FooterVue>
  <router-view />
</template>
  <script>
import HeaderVueExterno from "/src/components/HeaderVueExterno.vue";
import FooterVue from "/src/components/FooterVue.vue";
export default {
  name: "BaluAuctions",
  components: {
    HeaderVueExterno,
    FooterVue,
  },
  mounted() {
    window.scrollTo({
      top: 0,
    });
  },
};
</script>
<style scoped>
.main {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.header .hr {
  width: 60% !important;
  border-color: #6b6b6b;
}

.footer .section_footer {
  width: 85% !important;
}
@media only screen and (max-width: 700px) {
  h2 {
    font-size: 2.5rem !important;
  }
}
@media only screen and (max-width: 1000px) {
  .menu_icon {
    visibility: visible;
    position: relative;
  }

  .menu_icon i {
    font-size: 1.8rem;
    color: #f2f2f2;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    width: 100%;
  }

  .ul {
    flex-direction: column;
    gap: 3rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, +70%);
    background-color: black;
    width: 100%;
  }
  .nav.active {
    transform: translateX(0%);
  }

  footer .section_footer {
    width: 80%;
  }
  p {
    width: 100%;
  }
}

@media only screen and (max-width: 1400px) {
  video {
    margin-top: 1rem;
  }
  .project {
    flex-direction: column;
  }
}
</style>
  