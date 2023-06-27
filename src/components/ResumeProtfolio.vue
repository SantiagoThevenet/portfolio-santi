<template>
  <HeaderVueExterno></HeaderVueExterno>

  <main class="main">
    <section id="resume" class="seccionResume resume">
      <div class="resume_skills">
        <h2 class="h2">Santiago Thevenet</h2>
        <h3 class="h3">SKILLS</h3>
        <hr class="hr_resume" />
        <div class="resume_content">
          <div class="skills backend">
            <h4 class="h4">Backend</h4>
            <ul class="resumeul">
              <li class="li">Python</li>
              <li class="li">Node.js</li>
              <li class="li">Django</li>
              <li class="li">Django REST</li>
              <li class="li">Express JS</li>
              <li class="li">Mysql</li>
              <li class="li">PostgresDB</li>
            </ul>
          </div>
          <div class="skills frontend">
            <h4 class="h4">Frontend</h4>
            <ul class="resumeul">
              <li class="li">HTML5 & CSS3</li>
              <li class="li">JavaScript</li>
              <li class="li">Vue 2/3</li>
              <li class="li">Nuxt 2</li>
              <li class="li">SASS & SCSS</li>
              <li class="li">Tailwind</li>
              <li class="li">Boostrap</li>
            </ul>
          </div>
          <div class="skills otools">
            <h4 class="h4">Other tools</h4>
            <ul class="resumeul">
              <li class="li">Git</li>
              <li class="li">Dockers</li>
              <li class="li">Nginx</li>
              <li class="li">Apache</li>
              <li class="li">Squid</li>
              <li class="li">Bash Scripting</li>
              <li class="li">Figma</li>
              <li class="li">Stratos</li>
              <li class="li">Stripe</li>
            </ul>
          </div>
        </div>
        <h3 class="h3 h3_education">EDUCATION</h3>
        <hr class="hr_resume" />
        <div class="education">
          <div class="place">
            <h2 class="h2_formacion">Grupo Studio Formacion</h2>
            <span>2021-2023</span>
          </div>
          <div class="degree">
            <h3 class="h3_degree">
              Grado Superior: Desarrollo de Aplicaciones Web
            </h3>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterVue></FooterVue>
  <router-view />
</template>
<script>
import HeaderVueExterno from '/src/components/HeaderVueExterno.vue'
import FooterVue from '/src/components/FooterVue.vue'
export default {
  components: {
    HeaderVueExterno,
    FooterVue
  }
}
</script>


<style>
</style>