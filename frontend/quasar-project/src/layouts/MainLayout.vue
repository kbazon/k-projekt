<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h4"> Knjižnica </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="stil"> Meni </q-item-label>

        <EssentialLink
          class="meni"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Naslovnica",
    caption: "Početna",
    icon: "home",
    link: "#/",
  },
  {
    title: "Popis svih knjiga",
    caption: "Popis svih knjiga",
    icon: "list",
    link: "#/popis_knjiga",
  },
  {
    title: "Popis knjiga baza",
    caption: "Baza knjiga",
    icon: "storage",
    link: "#/baza_knjiga",
  },
  {
    title: "Rezervacije",
    caption: "Rezervacije knjiga",
    icon: "book_online",
    link: "#/rezervacija",
  },
  {
    title: "Pretraživanje",
    caption: "Pretraživanje knjiga",
    icon: "search",
    link: "#/pretrazivanje",
  },
  {
    title: "O nama",
    caption: "O nama",
    icon: "group",
    link: "#/o_nama",
  },
  {
    title: "Lokacija",
    caption: "Naša lokacija",
    icon: "location_on",
    link: "#/lokacija",
  },
  {
    title: "Login",
    caption: "Prijava",
    icon: "login",
    link: "#/login",
  },
  {
    title: "Registracija",
    caption: "Registriraj se",
    icon: "how_to_reg",
    link: "#/registracija",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.text-h4 {
  font-weight: bold;
}
.meni {
  margin-left: 15px;
}
.stil {
  margin-left: 20px;
  font-size: 15px;
  font-weight: bold;
}
</style>
