<template>
  <q-page class="q-pa-md test">
    <q-avatar rounded size="250px">
    </q-avatar>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 text-center text-primary q-pb-sm">Cadastro</div>
        <div class="text-subtitle1 text-center text-grey-7">Preencha com os seus dados pessoais</div>
        <q-input
          v-model="name"
          filled
          label="Nome Completo"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu nome completo',
          ]"
        />
        <q-input
          v-model="telephone"
          filled
          label="Telefone com DDD"
          mask="(##) #####-####"
          hint="Ex: (99) 99999-9999"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu telefone',
          ]"
        />
        <q-input
          v-model="address"
          filled
          label="Endereço"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu endereço',
          ]"
        />
        <q-input
          v-model="email"
          filled
          label="Login (E-mail)"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite seu melhor e-mail',
          ]"
        />
  	    <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Senha *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Por favor, digite sua senha',
            (val) => (val && val.length > 6) || 'Senha muito curta',
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
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="primary" label="Salvar Cadastro" @click="save" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "RegistrationPage",
  data() {
    return {
      name: '',
      telephone: '',
      address: '',
      email: '',
      password: null,
      isSaving: false,
      isPwd: true,
    };
  },
  methods: {
    onReset() {
      this.password = null;
      this.isPwd = true;
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 60%;
  align-self: center;
  justify-self: center;
}
.test {
  display: flex;
  gap: 60px;
}
</style>
