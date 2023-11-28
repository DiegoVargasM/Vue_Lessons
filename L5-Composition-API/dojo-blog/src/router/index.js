import { createRouter, createWebHistory } from "vue-router";
import CompositionBasics from "../theory/Composition_basics.vue";
import RefVsReactive from "../theory/RefVsReactive.vue";
import ComputedValues from "../theory/ComputedValues.vue";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";

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
  {
    path: "/3",
    name: "ComputedValues",
    component: ComputedValues,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
