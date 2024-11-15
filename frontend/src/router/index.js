import { createRouter, createWebHistory } from "vue-router";

// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import ContactView from "../views/ContactView.vue";
// import ShopView from "../views/ShopView.vue";
// import SupplementDetailView from "../views/SupplementDetailView.vue";

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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to a specific position when navigating to a specific route
    if (to.name === "Contact") {
      // Change this to your specific route name
      return { top: 150 }; // Scroll to 300px from the top
    }
    // You can also add other logic for other routes if needed
    return savedPosition || { top: 0 }; // Default to the saved position or scroll to the top
  },
});


export default router;
