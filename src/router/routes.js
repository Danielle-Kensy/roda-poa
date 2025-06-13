const routes = [
  {
    path: "/",
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/ListBikes",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/ListStations",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/StationPage.vue") }],
  },
  {
    path: "/UserProfile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserProfilePage.vue") }],
  },
  {//adicionei uma nova rota para o "Registro"
    path: "/Cadastrar-se",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegistrationPage.vue") }],

  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
