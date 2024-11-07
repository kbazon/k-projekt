<template>
  <q-page padding>
    <h class="title">Registriraj se!</h>
    <p class="description">Molim vas unesite svoje podatke za registraciju.</p>

    <!-- Forma za registraciju -->
    <div class="registration-form">
      <q-input v-model="user.ime" label="Ime" filled clearable required />

      <q-input
        v-model="user.prezime"
        label="Prezime"
        filled
        clearable
        required
      />

      <q-input
        v-model="user.korisnickoIme"
        label="Korisničko ime"
        filled
        clearable
        required
      />

      <q-input
        v-model="user.email"
        label="Email"
        type="email"
        filled
        clearable
        required
      />

      <q-input
        v-model="user.lozinka"
        label="Lozinka"
        type="password"
        filled
        clearable
        required
      />

      <!-- Gumb za potvrdu registracije -->
      <q-btn
        label="Potvrdi"
        color="primary"
        @click="registerUser"
        class="confirm-button"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Objekt koji predstavlja podatke korisnika
      user: {
        ime: "",
        prezime: "",
        korisnickoIme: "",
        email: "",
        lozinka: "",
      },
    };
  },
  methods: {
    registerUser() {
      // Provjera je li forma popunjena
      if (
        !this.user.ime ||
        !this.user.prezime ||
        !this.user.korisnickoIme ||
        !this.user.email ||
        !this.user.lozinka
      ) {
        alert("Molimo popunite sva polja.");
        return;
      }

      // Logika za obradu registracije korisnika
      console.log("Registracija korisnika:", this.user);

      // Resetiranje forme nakon registracije
      this.user = {
        ime: "",
        prezime: "",
        korisnickoIme: "",
        email: "",
        lozinka: "",
      };

      alert("Registracija uspješna!");
    },
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
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
  user-select: none;
}
.confirm-button {
  margin-top: 20px;
  user-select: none;
}
</style>
