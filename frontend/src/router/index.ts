import { createRouter, createWebHistory } from "vue-router";

// Router configs
import { metadataRoutes } from "@/router/RoutesConfig";

// Guards
import { authGuard, redirectToHomeIfAuthenticatedGuard } from "./RoutesGuards";

// Components
import NavMenu from "@/components/NavMenu.vue";

// Views
import SigninView from "@/views/SigninView.vue";
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

// Components

export const router = createRouter({
  linkActiveClass: "text-white",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: metadataRoutes.SIGNIN.path,
      name: metadataRoutes.SIGNIN.name,
      components: {
        default: SigninView,
      },
      meta: { ...metadataRoutes.SIGNIN },
    },
    {
      path: metadataRoutes.SIGNUP.path,
      name: metadataRoutes.SIGNUP.name,
      components: {
        default: SignupView,
      },
      meta: { ...metadataRoutes.SIGNUP },
    },
    {
      path: metadataRoutes.HOME.path,
      name: metadataRoutes.HOME.name,
      components: {
        Navbar: NavMenu,
        default: HomeView,
      },
      meta: { ...metadataRoutes.SIGNUP },
    },

    {
      path: metadataRoutes.NOT_FOUND.path,
      name: metadataRoutes.NOT_FOUND.name,
      component: NotFoundView,
    },

    { path: "/:pathMatch(.*)*", redirect: metadataRoutes.HOME.path },
  ],
});

router.beforeEach(authGuard);

router.beforeEach(redirectToHomeIfAuthenticatedGuard);

export default router;
