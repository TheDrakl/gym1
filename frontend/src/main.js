import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Notifications from "@kyvg/vue3-notification";
import { defineAsyncComponent } from "vue";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

// Navbar
const NavbarBlack = defineAsyncComponent(() =>
  import("@/components/navbar/NavbarBlack.vue")
);
import NavbarWhite from "./components/navbar/NavbarWhite.vue";

// Footer
// import TheFooter from "./components/footer/TheFooter.vue";
const TheFooter = defineAsyncComponent(() =>
  import("@/components/footer/TheFooter.vue")
);

// Common
import BaseButton from "./components/Common/BaseButton.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faXmark,
  faBars,
  faX,
  faEnvelope,
  faCartShopping,
  faTrash,
  faDumbbell,
  faClock,
  faCalendar,
  faChalkboard,
  faTrophy,
  faPhone,
  faMap,
  faSort,
  faSortUp,
  faSortDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMinus,
  faPlus,
  faXmark,
  faBars,
  faX,
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
  faEnvelope,
  faCartShopping,
  faTrash,
  faDumbbell,
  faClock,
  faCalendar,
  faChalkboard,
  faTrophy,
  faPhone,
  faMap,
  faSort,
  faSortUp,
  faSortDown,
  faAngleRight
);

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // check that click was outside el
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

const app = createApp(App).directive("click-outside", clickOutside);
const head = createHead();

app.component("font-awesome-icon", FontAwesomeIcon);

app.component("base-button", BaseButton);
app.component("navbar-white", NavbarWhite);
app.component("navbar-black", NavbarBlack);
app.component("the-footer", TheFooter);

app.use(router);
app.use(Notifications);
app.use(head);

app.mount("#app");
