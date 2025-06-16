<template>
  <div class="main">
    <img class="logo" src="../assets/e-bike.png" alt="roda e poa logo" />
    <div class="q-pa-md login" style="width: 320px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="mail"
          label="Usuário ou Email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Insira seu usuário ou email']"
        />

        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Senha *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Insira sua senha',
            (val) => (val && val.length > 0) || 'Senha muito curta',
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div>
          <q-btn label="Entrar" type="submit" color="primary" />
          <q-btn label="Limpar" type="reset" color="red" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { loginUser } from "src/api/users";

export default {
  data() {
    return {
      mail: null,
      password: null,
      isPwd: true,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await loginUser({
          username: this.mail,
          password: this.password,
        });
        console.log("Login OK:", response);

        this.$router.push("/ListBikes");
      } catch (error) {
        console.error("Erro no login:", error.response?.data || error.message);
        this.$q.notify({
          type: "negative",
          message: "Login falhou. Verifique usuário e senha.",
        });
      }
    },
    onReset() {
      this.mail = null;
      this.password = null;
      this.isPwd = true;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.logo {
  width: 8.125rem;
  margin-bottom: 1.25rem;
}
.login {
  border: 1px solid rgba(99, 105, 120, 0.139);
  border-radius: 10px;
  background-color: #fbfbfb;
}
</style>
