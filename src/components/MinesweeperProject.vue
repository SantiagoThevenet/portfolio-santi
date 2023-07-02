
<template>
  <HeaderVueExterno></HeaderVueExterno>
  <main class="main">
    <section class="project">
      <div class="project_information">
        <div class="balu_autions_titles">
          <h2>Minesweeper</h2>
        </div>
        <div class="overview">
          <h4>Overview</h4>
          <p>
            I have created my own Python version of the classic Minesweeper
            game, which was originally developed in 1989. It captures the
            essence of the original game while offering a user-friendly
            interface and various difficulty levels. Players can strategically
            uncover tiles, avoid mines, and mark potential hazards.
          </p>
        </div>
        <div class="technologies">
          <h4>Main technologies</h4>
          <ul class="ul">
            <li class="li">Python</li>
          </ul>
        </div>
      </div>
      <div class="balu_auction_video">
        <video autoplay loop muted preload="auto">
          <source src="/src/assets/videos/buscaminas.mp4" />
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
  display: flex;
  justify-content: space-around;
  height: 80vh;
}

.footer .section_footer {
  width: 85%;
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
  