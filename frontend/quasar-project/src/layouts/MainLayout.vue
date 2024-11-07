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
        <q-item-label header> Meni </q-item-label>

        <EssentialLink
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
    caption: "popis svih knjiga",
    icon: "list",
    link: "#/popis_knjiga",
  },
  {
    title: "Pretraživanje",
    caption: "pretraživanje knjiga",
    icon: "search",
    link: "#/pretrazivanje",
  },
  {
    title: "O nama",
    caption: "o nama",
    icon: "group",
    link: "#/o_nama",
  },
  {
    title: "Lokacija",
    caption: "lokacija",
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
