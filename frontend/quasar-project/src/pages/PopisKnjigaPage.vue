<template>
  <q-page padding>
    <h class="title">Popis svih knjiga</h>
    <p class="description">Ovdije možete pregledati popis svih naših knjiga!</p>

    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      flat
      bordered
      class="book-table"
      :rows-per-page-options="[]"
    >
      <template v-slot:body-cell-slika="props">
        <q-img
          :src="props.row.slika"
          alt="Naslovnica knjige"
          style="width: 50px; height: auto"
        />
      </template>
    </q-table>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        { name: "id", label: "ID", field: "id", align: "left" },
        { name: "naslov", label: "Naslov", field: "naslov", align: "left" },
        { name: "autor", label: "Autor", field: "autor", align: "left" },
        { name: "opis", label: "Opis", field: "opis", align: "left" },
        { name: "slika", label: "Slika", field: "slika", align: "center" },
        {
          name: "stanje",
          label: "Stanje (ukupan broj primjeraka)",
          field: "stanje",
          align: "right",
        },
      ],
      books: [
        {
          id: 1,
          naslov: "Na Drini ćuprija",
          autor: "Ivo Andrić",
          opis: "Roman o izgradnji mosta i životu ljudi u Višegradu.",
          slika:
            "https://www.sarajevopublishing.ba/media/image/2638/original/Na%20Drini%20%C4%87uprija.jpg",
          stanje: 10,
        },
        {
          id: 2,
          naslov: "Pohvala ludosti",
          autor: "Erazmo Roterdamski",
          opis: "Sarkastična kritika društva iz renesansnog perioda.",
          slika:
            "https://dereta.rs/cached/dereta.rs/Images/10773-Pohvala-ludosti.jpg",
          stanje: 5,
        },
        {
          id: 3,
          naslov: "Proces",
          autor: "Franz Kafka",
          opis: "Priča o čovjeku koji biva optužen bez razloga.",
          slika:
            "https://www.antikvarijat-biblos.hr/media/img/products/56936/proces-franz-kafka-AbBu.webp",
          stanje: 7,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  margin-top: 40px;
  font-weight: bold;
  padding: 20px;
  user-select: none;
}
.description {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  padding: 20px;
  user-select: none;
}
.book-table {
  margin-top: 20px;
  user-select: none;
}
</style>
