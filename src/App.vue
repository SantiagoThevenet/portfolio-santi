
<template>
  <router-view />
</template>
<script setup>
</script>

<style>
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  list-style: none;
  font-family: "Inter", sans-serif;
  cursor: none;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}
.webgl {
  background-color: transparent;
}

.logo {
  width: 100px;
}

.header {
  width: 100%;
  height: 15vh;
  min-width: 5rem;
  padding: 4rem 2rem;
  background: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 3rem;
  align-items: center;
}

.header .ul {
  display: flex;
  align-items: start;
  justify-content: end;
}

.header .li {
  margin: 0 1rem;
}

.header .hr {
  width: 60%;
  border-color: #6b6b6b;
}

.main {
  background-color: black;
  color: white;
  min-height: 80vh;
  width: 100%;
}

.seccion,
.seccionResume {
  width: 100%;
  min-height: 80vh;
  padding-top: 5rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
.seccion:first-child {
  background-image: url("/src/assets/img/2k_stars.jpg");
  background-position: bottom;
  background-size: cover;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.visitar {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.visitar span {
  border: 1px solid #424242;
  border-radius: 50%;
  padding: 1rem;
  font-weight: 500;
  transition: 0.3s;
}

.visitar span:hover {
  background-color: #424242;
}

.main_grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 764px;
  width: 100%;
  gap: 1rem;
}

.main_grid .grid_full,
.grid_half {
  align-items: flex-start;
  background-color: #eeeeee;
  border-radius: 32px;
  color: #242424;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 32px 32px 24px;
  width: calc(50% - 16px);
  will-change: transform;
}
.main_grid .grid_half:nth-child(3) {
  background-color: #8accd4;
}
.main_grid .grid_half:nth-child(3) .grid_buttons a {
  background-color: #151f20;
}
.main_grid .grid_half:nth-child(3) .grid_buttons a:hover {
  background-color: #7a9396;
}

.main_grid .grid_full {
  width: 100% !important;
}

.main_grid .grid_half {
  background: #a2f6cf;
}

.main_grid .grid_full *,
.grid_half * {
  color: #0f270c;
}
.main_grid .grid_half .grid_buttons {
  display: flex;
  gap: 1rem;
}

.main_grid .grid_full .grid_buttons,
.grid_half .grid_buttons {
  margin-top: 2rem;
}

.main_grid .grid_full .grid_buttons .a_full,
.grid_half .grid_buttons .a_half {
  color: white;
  border-radius: 0.9rem;
  font-weight: 500;
  transition: 0.3s;
}
.main_grid .grid_full .grid_buttons .a_full {
  padding: 1rem 2rem;
}
.main_grid .grid_full .grid_buttons {
  display: flex;
  gap: 1.5rem;
}
.main_grid .grid_half .grid_buttons .a_half {
  padding: 1rem 1rem;
}
.main_grid .grid_full .grid_buttons .a_full {
  background: #2c2c2c;
}
.main_grid .grid_half .grid_buttons .a_half {
  background: #1b3817;
}
.main_grid .grid_half .grid_buttons .a_half:hover {
  background: #2c4e27;
}
.grid_half .a_half2 {
  background: #102d2e !important;
}

.main_grid .grid_full .grid_buttons .a_full:hover {
  background: #555555;
}

.main_grid .grid_full .hr_grid,
.grid_half .hr_grid {
  width: 100%;
  margin: 1rem 0 2rem;
  border-color: #a8a8a8;
}
.main_grid .grid_full .p_grid,
.grid_half .p_grid {
  margin-bottom: auto;
  width: 100%;
}

.trabajo-titulo {
  display: flex;
  align-items: center;
}

.trabajo-titulo .h3_trabajo {
  font-size: 1.8rem;
  margin-left: 0.5rem;
}

.auctions {
  background-image: url("/src/assets/img/aution.png");
  height: 35px;
  width: 35px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.h2 {
  font-size: 4.5rem;
  font-weight: 700;
}

.span-animation {
  background-image: linear-gradient(
    90deg,
    #d66761 16.66666%,
    #f5c0b2 33.33333%,
    #aee8fa 50%,
    #68bde7 66.66666%,
    #6bd490 83.33333%,
    #a2f6cf
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% auto;
  animation: textShine 2s ease-in-out infinite alternate;
}

.rrss {
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
}

.rrss .li .a .img {
  width: 40px;
}

.p {
  width: 40%;
  text-align: justify;
}

.about {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer {
  height: 5vh;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
}

.footer .section_footer {
  display: flex;
  border-top: 1px solid #6b6b6b;
  width: 85%;
  justify-content: space-between;
  padding: 1rem 0;
}

.footer .section_footer * {
  color: #e0e0e0;
}

.footerrss {
  display: flex;
  gap: 1rem;
}

.span {
  font-size: 0.8rem;
}

.footerrss .a_footer .fa-brands {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
}

#ball {
  width: 20px;
  height: 20px;
  background: none;
  border: 1px solid grey;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  pointer-events: none;
}

.upanimation {
  opacity: 0;
  position: relative;
  top: 50px;
  transition: opacity 0.5s, top 0.5s;
}

.upanimation.animation-start {
  opacity: 1;
  top: 0;
}

.upanimation:nth-child(2) {
  transition-delay: 200ms;
}

.upanimation:nth-child(3) {
  transition-delay: 350ms;
}

.upanimation:nth-child(4) {
  transition-delay: 500ms;
}

.upanimation:nth-child(5) {
  transition-delay: 650ms;
}

.worksanimations {
  opacity: 0;
  position: relative;
  top: 100px;
  transition: opacity 1s, top 1s;
  transition-delay: 800ms;
}

.worksanimations.animation-start {
  opacity: 1;
  top: 0;
}

.menu_icon {
  visibility: hidden;
  position: absolute;
}

@media only screen and (max-width: 1000px) {
  .menu_icon {
    visibility: visible;
    position: relative;
  }

  #ball {
    display: none;
  }

  .menu_icon .fas {
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

    background-color: black;
    width: 100%;
    height: 100vh;
  }
  .ul .li {
    font-size: 3rem;
    font-weight: 600;
  }
  .nav.active {
    transform: translateX(0%);
  }

  .main_grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .main_grid .grid_full,
  .grid_half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
  .main_grid .grid_full {
    width: 80% !important;
  }

  .p {
    width: 80%;
    text-align: justify;
  }
  .h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  .visitar .span_visit {
    font-size: 0.8rem;
  }
  .footer .section_footer {
    width: 80%;
  }
}
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 2rem;
  }
  .main_grid .grid_half .grid_buttons,
  .main_grid .grid_full .grid_buttons {
    flex-direction: column !important;
    display: flex;
    width: 100%;
    text-align: center;
  }
}

.balu_autions_titles h2 {
  font-size: 3.5rem;
  font-weight: 600;
  color: #dddddd;
}
.balu_autions_titles h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #aeaeae;
}
p {
  width: 70%;
  color: #b8b8b8;
  letter-spacing: 0.015rem;
  line-height: 1.65rem;
}
.project {
  display: flex;
  width: 84%;
}
.project_information {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.project_information ul {
  line-height: 1.8rem;
  margin-left: 1rem;
}
.overview h4,
.technologies h4 {
  font-weight: 500;

  color: #4f4f4f;
}
.project_information ul li {
  letter-spacing: 0.02rem;
  color: #d1d1d1;
}
.technologies .ul .li {
  list-style: disc;
}
.overview,
.technologies {
  line-height: 2rem;
}
.balu_auction_video video {
  border-radius: 1rem;
  width: 100%;
}

.resume {
  width: 100%;
}
.resume_content .h2 {
  letter-spacing: 62px;
}
.resume_skills {
  width: 85%;
}
.resume_skills .h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.resume_skills .h3 {
  letter-spacing: 5px;
  font-weight: 600;
}
.resume_skills .hr_resume {
  border-color: #6b6b6b;
  margin: 1.5rem 0 3rem 0;
}
.resume_content {
  width: 100%;
  display: flex;
  gap: 25%;
  margin-top: 1rem;
}
.resume_content .skills .h4 {
  font-weight: 500;
}
.resume_content .resumeul {
  line-height: 2rem;
}
.resume_content .ul .li {
  font-weight: 300;
  font-size: 16px;
}
.education {
  display: flex;
  gap: 9%;
  margin-bottom: 5rem;
}
.degree h3,
.content h3 {
  letter-spacing: 1px;
  font-weight: 400;
}
.education h2 {
  font-size: 1.8rem;
}
.footer {
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
}

.footer .section_footer {
  display: flex;
  border-top: 1px solid #6b6b6b;
  width: 85%;
  justify-content: space-between;
  padding: 1rem 0;
}
.footer .section_footer * {
  color: #e0e0e0;
}
.footerrss {
  display: flex;
  gap: 1rem;
}
.span {
  font-size: 0.8rem;
}
.footerrss i {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
}

#ball {
  width: 20px;
  height: 20px;
  background: nome;
  border: 1px solid grey;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  pointer-events: none;
}
.menu_icon {
  visibility: hidden;
  position: absolute;
}

@media only screen and (max-width: 1000px) {
  .menu_icon {
    visibility: visible;
    position: relative;
  }

  #ball {
    display: none;
  }

  .menu_icon .fas {
    font-size: 1.8rem;
    color: #f2f2f2;
  }


  .nav.active {
    transform: translateX(0%);
  }
  .resume_skills {
    width: 80%;
  }
  .footer .section_footer {
    width: 80%;
  }
}

@media only screen and (max-width: 650px) {
  .resume_skills .h2 {
    font-size: 1.8rem;
  }
  .resume_skills .h3 {
    font-size: 1rem;
  }
  .resume_content {
    flex-direction: column;
    gap: 3rem;
  }
  .h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .resume_content .ul .li {
    font-weight: 300;
    font-size: 14px;
  }
  .education {
    flex-direction: column;
  }
  .h3_degree,
  .h3_education {
    margin-top: 2rem;
  }
}

.fa-x {
  position: absolute;
  top: 4%;
  left: 90%;
  font-size: 2rem;
}
</style>
