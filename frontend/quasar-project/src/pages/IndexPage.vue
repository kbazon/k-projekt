<template>
  <q-page class="flex flex-center">
    <h class="title">Vaša online Knjižnica</h>
    <p class="description">
      Jednostavnost je temeljna karakteristika korištenja usluga Gradske
      knjižnice Rijeka. Ne bi li što kvalitetnije ostvarila svoju misiju Gradska
      knjižnica Rijeka nudi niz usluga čije ostvarivanje omogućava stručno i
      pristupačno osoblje. Život uz čitanje, knjigu i knjižnicu počinje
      učlanjivanjem po iznimno pristupačnoj cijeni od 7 eura godišnje članarine,
      čime se otvaraju vrata avanture, sanjanja, zabave i znanja.
    </p>
    <img
      alt="Knjiznica slika"
      src="~assets/Daco_4059314.png"
      style="width: 300px; height: 300px"
    />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-top: 40px;
  font-weight: bold;
}
.description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  padding: 80px;
}
</style>
