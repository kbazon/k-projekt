<template>
  <q-page padding>
    <h class="title">Prijava Člana</h>
    <p class="description">Molim vas unesite svoje podatke za prijavu.</p>

    <div class="login-form">
      <q-input
        v-model="loginData.korisnickoIme"
        label="Korisničko ime"
        filled
        clearable
        required
      />

      <q-input
        v-model="loginData.lozinka"
        label="Lozinka"
        type="password"
        filled
        clearable
        required
      />

      <q-btn
        label="Potvrdi"
        color="primary"
        @click="loginUser"
        class="confirm-button"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        korisnickoIme: "",
        lozinka: "",
      },
    };
  },
  methods: {
    loginUser() {
      if (!this.loginData.korisnickoIme || !this.loginData.lozinka) {
        alert("Molimo unesite korisničko ime i lozinku.");
        return;
      }

      console.log("Pokušaj prijave korisnika:", this.loginData);

      this.loginData = {
        korisnickoIme: "",
        lozinka: "",
      };

      alert("Prijava uspješna!");
    },
  },
};
</script>

<style scoped>
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
.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
}
.confirm-button {
  margin-top: 20px;
}
</style>
