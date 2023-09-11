<template>
  <HeaderVue></HeaderVue>
  <main class="main">
    <div class="seccion" id="inicio">
      <section class="section">
        <h2 class="h2">
          <span class="upanimation">Santiago </span>
          <span class="upanimation">Thevenet</span>
          <br />
          <span class="span-animation upanimation">Full-Stack </span>
          <span class="upanimation">Developer</span>
        </h2>
        <div class="visitar">
          <a
            title="Linkedin - Visit my Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/santiagothevenetvalles/"
          >
            <span class="span_visit">VISIT MY LINKEDIN</span>
          </a>
          <a
            title="Github - Visit my Github"
            target="_blank"
            href="https://github.com/SantiagoThevenet"
          >
            <span class="span_visit">VISIT MY GITHUB</span>
          </a>
        </div>
        <canvas class="webgl"></canvas>
      </section>
    </div>

    <section class="seccion" id="works">
      <h2 class="h2">Works</h2>
      <div class="main_grid">
        <div class="grid_full hidden">
          <img src="/src/assets/img/balubackground.png" class="img_half" alt="">
          <div class="trabajo-titulo">
            <figure>
              <img
                class="auctions"
                src="/src/assets/img/aution.png"
                alt="This is an image of an aution icon"
              />
            </figure>
            <h3 class="h3_trabajo">Balú Auctions</h3>
          </div>
          <span>2023</span>
          <hr class="hr_grid" />
          <p class="p_grid">
            "Balú Auctions" is my final project for my DAW (Development of Web
            Applications) course. It is a modern online auction platform that
            aims to make online bidding more popular and excitingthat uses
            <b>Vue.js</b>, <b>ExpressJS</b>, <b>MySQL</b>, and <b>SASS</b>.
          </p>
          <div class="grid_buttons">
            <a
              title="View Balu Auctions on github"
              class="a_full fullhover"
              target="_blank"
              href="https://github.com/SantiagoThevenet/proyecto-tfg/tree/main/proyecto-tfg-completo"
              >View on Github</a
            >
            <router-link
              title="View Balu Auctions"
              class="a_full"
              to="/baluAuctions"
              >View Project
            </router-link>
          </div>
        </div>
        <div class="grid_half hidden">
          <img src="/src/assets/img/minesweeper.png" class="img_half" alt="">
          <div class="trabajo-titulo">
            <i class="fa-solid fa-bomb"></i>
            <h3 class="h3_trabajo">Minesweeper</h3>
          </div>
          <span>2023</span>
          <hr class="hr_grid" />
          <p class="p_grid">
            I have created my own <b>Python</b> version of the classic Minesweeper
            game, which was originally developed in 1989.
          </p>
          <div class="grid_buttons">
            <a
              title="View Minesweeper on github "
              class="a_half"
              target="_blank"
              href="https://github.com/SantiagoThevenet/buscaminaSanti/tree/main"
              >View on Github</a
            >
            <router-link
              title="View Minesweeper"
              class="a_half"
              to="/minesweeper"
              >View Project
            </router-link>
          </div>
        </div>
        <div class="grid_half hidden">
          <img src="/src/assets/img/fittrak.jpg" class="img_half" alt="">
          <div class="trabajo-titulo">
            <i class="fa-solid fa-dumbbell"></i>
            <h3 class="h3_trabajo">FitTrak</h3>
          </div>
          <span>2023</span>
          <hr class="hr_grid" />
          <p class="p_grid">
            Fittraker, developed using <b>React</b>, <b>ExpressJS</b>, <b>MongoDB</b>,and <b>Tailwind CSS</b>, connects you to the WGER API to craft custom gym routines
          </p>
          <div class="grid_buttons">
            <a
              title="View Balu Auctions on github"
              class="a_half2_1"
              target="_blank"
              href="https://github.com/SantiagoThevenet/FitTrackClient"
              >View on Github</a
            >
            <router-link
              title="View Balu Auctions"
              class="a_half2_2"
              to="/fittraker"
              >View Project
            </router-link>

          </div>
        </div>
      </div>
    </section>
    <section class="seccion about" id="about">
      <h2 class="h2">About me</h2>
      <p class="p">
        I am a web developer with a passion for creating websites and
        applications that are not only functional but also provide exceptional
        experiences.
      </p>
      <p class="p">
        When I'm not writing code, you'll find me enjoying my favorite sport,
        watching movies, or immersed in a good book.
      </p>
      <p class="p">
        My focus in web development is simple: to work with enthusiasm,
        constantly learn, and contribute with ideas.
      </p>
      <p class="p">
        I am excited to be part of a team where I can contribute my creativity
        and technical knowledge. If you are looking for a programmer who is
        committed to excellence and eager to grow, I am the right person to join
        your team!
      </p>
      <ul class="rrss">
        <li class="li">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/santiagothevenetvalles/"
            class="a"
            title="This is a link to my Linkedin"
          >
            <img
              class="img"
              src="/src/assets/img/linkedin.png"
              alt="This is a link to Linkedin"
            />
          </a>
        </li>
        <li class="li">
          <a
            target="_blank"
            href="https://github.com/SantiagoThevenet"
            class="a"
            title="This is a link to my Github"
          >
            <img
              class="img"
              src="/src/assets/img/github.png"
              alt="This is a link to Github"
            />
          </a>
        </li>
      </ul>
    </section>
  </main>
  <FooterVue></FooterVue>
  <router-view />
</template>
<script>
import HeaderVue from "/src/components/HeaderVue.vue";
import FooterVue from "/src/components/FooterVue.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>
<style>
</style>
