import { createRouter, createWebHistory } from "vue-router";
import CompositionBasics from "../views/Composition_basics.vue";
import RefVsReactive from "../views/RefVsReactive.vue";

const routes = [
  {
    path: "/1",
    name: "CompositionBasics",
    component: CompositionBasics,
  },
  {
    path: "/2",
    name: "RefVsReactive",
    component: RefVsReactive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
