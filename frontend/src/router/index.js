import { createRouter, createWebHistory } from "vue-router";

// Lazy loading pages
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: "/shop/supplement/:pk",
    name: "SupplementDetail",
    component: () => import("../views/SupplementDetailView.vue"),
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFoundView.vue"),
  },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "Contact") {
      return { top: 150 };
    }
    return savedPosition || { top: 0 }; 
  },
});


export default router;
