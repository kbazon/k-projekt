<template>
  <q-page padding>
    <h class="title">Pronađite nas!</h>
    <p class="description">Lokacija knjižnice.</p>
    <div id="map" style="height: 500px"></div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "LokacijaPage",

  setup() {
    const initialMap = ref("");

    onMounted(() => {
      initialMap.value = L.map("map").setView([45.3312, 14.4322], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(initialMap.value);
    });

    return {
      initialMap,
    };
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-top: 40px;
  font-weight: bold;
  padding: 20px;
}
.description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  padding: 20px;
}
</style>
