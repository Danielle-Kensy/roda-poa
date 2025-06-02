<template>
  <q-page class="q-pa-md test">
    <q-avatar rounded size="250px">
      <img :src="img" />
    </q-avatar>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Editar Perfil</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Informações Pessoais</div>
        <q-input
          v-model="name"
          filled
          label="Nome"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu nome',
          ]"
        />
        <q-input
          v-model="email"
          filled
          label="E-mail"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor, digite seu e-mail',
          ]"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6">Informações de Contato</div>
        <q-input
          v-model="phone"
          filled
          label="Telefone"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor, digite seu telefone',
          ]"
        />
        <q-input
          v-model="address"
          filled
          label="Endereço"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor, digite seu endereço',
          ]"
        />
        <q-chip square outline color="teal" text-color="white">
          <strong>KMS Totais Pedalados: {{ kms }}km</strong>
        </q-chip>
        <q-chip square outline color="orange" text-color="white">
          <strong>Emissão de CO2 Evitada: {{ emission }}kg</strong>
        </q-chip>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="primary" label="Salvar" @click="save" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
const getUser = [
  {
    id: 1,
    name: "Danielle",
    email: "danielle@gmail.com",
    phone: "(11) 99999-9999",
    address: "Rua do limoeiro, 123",
    img: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png",
    kms: 10000,
    emission: 28
  },
];

export default {
  name: "UserProfilePage",
  data() {
    return {
      name: getUser[0].name,
      phone: getUser[0].phone,
      address: getUser[0].address,
      email: getUser[0].email,
      img: getUser[0].img,
      kms: getUser[0].kms,
      emission: getUser[0].emission,
    };
  },
  methods: {
    //aqui ficaria a requisição para o backend para editar os dados do user
  },
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
