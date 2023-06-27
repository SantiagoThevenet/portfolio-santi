import { createWebHistory, createRouter } from "vue-router";
import HomePortfolio from "/src/components/HomePortfolio.vue";
import Minesweeper from "/src/components/MinesweeperProject.vue";
import BaluAuctions from "/src/components/BaluAuctions.vue";
import ResumeProtfolio from "/src/components/ResumeProtfolio.vue";

const routes = [
  {
    path: "/portfolio",
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
  history: createWebHistory(),
  routes,
});

export default router;