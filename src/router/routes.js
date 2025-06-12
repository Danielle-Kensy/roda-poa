const routes = [
  {
    path: "/",
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/ListBikes",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/ListStations",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/StationPage.vue") }],
  },
    {
    path: "/UserProfile",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/UserProfilePage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
