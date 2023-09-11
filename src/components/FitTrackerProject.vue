
<template>
  <HeaderVueExterno></HeaderVueExterno>
  <main class="main">
    <section class="project">
      <div class="project_information">
        <div class="balu_autions_titles">
          <h2>Fit Traker</h2>
        </div>
        <div class="overview">
          <h4>Overview</h4>
          <p>
            My gym routines web project. Built with React, ExpressJS, and Tailwind
            CSS, and supported by MongoDB for efficient data management.
            Throughout this journey, I gained experience in utilizing the WGER
            API through its documentation to create customized routines in
            Fittraker
          </p>
        </div>
        <div class="technologies">
          <h4>Main technologies</h4>
          <ul class="ul">
            <li class="li">React</li>
            <li class="li">ExpressJS</li>
            <li class="li">TailwindCSS</li>
            <li class="li">MongoDB</li>
          </ul>
        </div>
      </div>
      <div class="balu_auction_video">
        <video autoplay loop muted preload="auto">
          <source src="/src/assets/videos/fittraker.mp4" />
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
    