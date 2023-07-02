import { createWebHashHistory, createRouter } from "vue-router";
import HomePortfolio from "/src/components/HomePortfolio.vue";
import Minesweeper from "/src/components/MinesweeperProject.vue";
import BaluAuctions from "/src/components/BaluAuctions.vue";
import ResumeProtfolio from "/src/components/ResumeProtfolio.vue";

const routes = [
  {
    path: "/",
    name: "HomePortfolio",
    component: HomePortfolio,
  },
  {
    path: "/minesweeper",
    name: "Minesweeper",
    component: Minesweeper,
  },
  {
    path: "/baluAuctions",
    name: "BaluAuctions",
    component: BaluAuctions,
  },
  {
    path: "/resume",
    name: "ResumeProtfolio",
    component: ResumeProtfolio,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
  routes,
});

let isFirstLoad = true;
router.beforeEach((to, from, next) => {
  if (to.path === '/' && isFirstLoad) {
    isFirstLoad = false;
    next();
  } else if (to.path === '/' && !isFirstLoad) {
    location.reload();
  } else {
    next();
  }
});


export default router;
