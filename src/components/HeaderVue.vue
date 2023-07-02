<template>
  <header class="header">
    <div class="headerdiv">
      <h1>
        <a title="Home - Portfolio Santiago Thevenet" href="/portfolio-santi/#/"
          >S.T</a
        >
      </h1>
      <hr class="hr" />
      <div @click="toggle()" class="menu_icon menu_toggle">
        <i class="fas fa-bars"></i>
      </div>
      <nav class="nav" id="mobile_menu">
        <ul class="ul">
          <i v-if="menuOpen" @click="toggle()" class="fas fa-x"></i>
          <li @click="toggle()" class="li menu-toggle">
            <a
              title="Home - Portfolio Santiago Thevenet"
              href="/portfolio-santi/#/"
              >Home</a
            >
  
          </li>
          <li @click="toggle()" class="li menu-toggle">
            <a
              title="Works - Portfolio Santiago Thevenet"
              href="/portfolio-santi/#/#works"
              >Works</a
            >
          </li>
          <li @click="toggle()" class="li menu-toggle">
            <a
              title="About me - Portfolio Santiago Thevenet"
              href="/portfolio-santi/#/#about"
              >About Me</a
            >
          </li>
          <li @click="toggle()" class="li menu-toggle">
            <a
              title="Resume - Portfolio Santiago Thevenet"
              href="/portfolio-santi/#/resume"
              >Resume</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggle() {
      const menuToggle = document.querySelectorAll(".menu_toggle");
      const mobileMenu = document.getElementById("mobile_menu");
      menuToggle.forEach((i) => {
        i.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });
      this.menuOpen = !this.menuOpen;
    },
  }
};
</script>