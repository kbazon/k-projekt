const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      {
        path: "/popis_knjiga",
        component: () => import("pages/PopisKnjigaPage.vue"),
      },
      {
        path: "/baza_knjiga",
        component: () => import("pages/PopisKnjigaBaza.vue"),
      },
      {
        path: "/rezervacija",
        component: () => import("pages/RezervacijaPage.vue"),
      },
      {
        path: "/o_nama",
        component: () => import("pages/OnamaPage.vue"),
      },
      {
        path: "/pretrazivanje",
        component: () => import("pages/PretrazivanjePage.vue"),
      },
      {
        path: "/lokacija",
        component: () => import("pages/LokacijaPage.vue"),
      },
      {
        path: "/login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/registracija",
        component: () => import("pages/RegistracijaPage.vue"),
      },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/AdminPage.vue") },
      {
        path: "/admin/popis_knjiga",
        component: () => import("pages/PopisKnjigaPage.vue"),
      },
      {
        path: "/admin/pretrazivanje",
        component: () => import("pages/PretrazivanjePage.vue"),
      },
      {
        path: "/admin/popis_korisnika",
        component: () => import("pages/PopisKorisnika.vue"),
      },
      {
        path: "/admin/unos_knjiga",
        component: () => import("pages/UnosKnjiga.vue"),
      },
      {
        path: "/admin/logout",
        component: () => import("pages/LogoutPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
