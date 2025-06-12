<template>
  <q-page class="q-pa-md main">
    <q-avatar rounded class="custom-avatar">
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
        <q-btn color="primary" label="Salvar" @click="updateUserProfile" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { getUserProfile, updateUserProfile } from "src/api/users";

export default {
  name: "UserProfilePage",
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      email: "",
      img: "",
      kms: 0,
      emission: 0,
    };
  },
  async mounted() {
    try {
      const user = await getUserProfile(localStorage.getItem("user_id"));
      this.name = user.name;
      this.phone = user.phone;
      this.address = user.address;
      this.email = user.email;
      this.img =
        user.img || "https://cdn-icons-png.flaticon.com/512/4322/4322991.png";
      this.kms = user.kms || 0;
      this.emission = user.emission || 0;
    } catch (err) {
      console.error("Erro ao carregar perfil:", err);
      this.$q.notify({
        type: "negative",
        message: "Erro ao carregar perfil",
      });
    }
  },
  methods: {
    async updateUserProfile() {
      try {
        const user = await updateUserProfile(localStorage.getItem("user_id"), {
          name: this.name,
          phone: this.phone,
          address: this.address,
          email: this.email,
          img: this.img,
          kms: this.kms,
          emission: this.emission,
        });
        this.name = user.name;
        this.phone = user.phone;
        this.address = user.address;
        this.email = user.email;
        this.img = user.img;
        this.kms = user.kms;
        this.emission = user.emission;
        this.$q.notify({
          type: "positive",
          message: "Dados atualizados com sucesso!",
        });
      } catch (err) {
        console.error("Erro ao atualizar perfil:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao atualizar perfil",
        });
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 60%;
  align-self: center;
  justify-self: center;
  @media (max-width: 600px) {
    width: 95%;
  }
}
.main {
  display: flex;
  gap: 60px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }
}
.custom-avatar {
  width: 250px;
  height: 250px;
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
    align-self: center;
  }
}
</style>
