<template>
  <q-dialog :v-model="showModal">
    <q-card style="min-width: 40%">
      <h5 class="title">Cadastrar Estação <q-icon name="store" /> </h5>
      <q-card-section align="center">
        <q-input
          v-model="img"
          filled
          label="Link da Imagem"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor, digite o link da imagem',
          ]"
        />
      </q-card-section>

      <q-card-section align="center">
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
      </q-card-section>

      <q-card-section align="center">
        <q-input
          v-model="distance"
          filled
          label="Distância do local atual"
          type="number"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor, digite a distância',
          ]"
        />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Adicionar" @click="create" />
        <q-btn outline label="Fechar" color="red" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "CreateStationModal",
  props: { showModal: Boolean },

  data() {
    return {
      img: null,
      address: null,
      distance: null,
    };
  },
  emits: ["create"],
  methods: {
    create() {
      const json = {
        address: this.address,
        img: this.img,
        distance: this.distance,
      };
      this.$emit("create", json);
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 20px;
  width: 90%;
  justify-self: center;
}
.q-btn {
  background-color: #00a0aa;
  color: white;
  width: 80%;
  margin-bottom: 5%;
}
.modal-img {
  width: 50%;
  height: 50%;
}
.select {
  width: 80%;
}
.title {
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  margin: 20px;
  color: #636978;
}
</style>
