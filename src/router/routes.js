const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "/ventas",
        component: () => import("pages/Ventas.vue"),
      },
      {
        path: "/inventario",
        component: () => import("pages/Inventario.vue"),
      },
      {
        path: "/ingresos",
        component: () => import("pages/Ingresos.vue"),
      },
      {
        path: "/stock",
        component: () => import("pages/Stock.vue"),
      },
      {
        path: "/historial",
        component: () => import("pages/Historial.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
