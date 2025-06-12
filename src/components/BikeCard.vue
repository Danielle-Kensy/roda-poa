<template>
  <q-card class="my-card">
    <q-card-section class="text-white">
      <q-img :src="bike.img" />
    </q-card-section>

    <q-card-actions vertical align="center">
      <q-btn flat @click="openModal">Alugar</q-btn>
      <q-btn flat style="background: orange" @click="openEditModal" v-if="isAdmin">Editar</q-btn>
      <q-btn flat style="background: red" @click="remove" v-if="isAdmin">Excluir</q-btn>
    </q-card-actions>
  </q-card>

    <EditBikeModal v-model="showEditModal" :bike="bike" @edit="edit" />

  <q-dialog v-model="showModal">
    <q-card style="min-width: 40%">
      <q-chip square color="primary" text-color="white" icon="battery_5_bar">
        Carga: <strong>{{ bike.quilometragem_carga }}</strong> km
      </q-chip>

      <q-card-section align="center">
        <img class="modal-img" :src="bike.img" alt="Bike" />
      </q-card-section>

      <q-card-section align="center">
        <q-chip square outline color="teal" text-color="white">
          <strong>{{ bike.baia }}</strong>
        </q-chip>
        <q-chip square outline color="teal" text-color="white">
          <strong>Catraca: Nº {{ bike.turnstile }}</strong>
        </q-chip>
      </q-card-section>

      <q-card-section align="center">
        <q-select
          color="black"
          bg-color="#E9EDF5"
          filled
          v-model="price"
          :options="options"
          label="Tempo de Aluguel"
          class="select"
        >
          <template v-slot:prepend>
            <q-icon name="payments" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Alugar" @click="rent"/>
        <q-btn outline label="Fechar" color="red" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import EditBikeModal from "./EditBikeModal.vue";

export default {
  name: "BikeCard",
  props: { bike: Object, isAdmin: Boolean },
  components: {EditBikeModal},

  data() {
    return {
      showModal: false,
      showEditModal: false,
      price: null,
      options: [
        { label: "30min por R$ 15,00", value: 30 },
        { label: "60min por R$ 25,00", value: 60 },
        { label: "120min por R$ 35,00", value: 120 },
      ],
    };
  },
  emits: ['rent', 'edit', 'remove'],
  methods: {
    openModal() {
      this.showModal = true;
    },
    openEditModal() {
      this.showEditModal = true;
    },
    rent() {
      this.$emit('rent', this.bike)
      this.showModal = false;
    },
    edit(json) {
      console.log(json)
      this.$emit('edit', json)
      this.showEditModal = false;
    },
    remove() {
      this.$emit('remove', this.bike.id)
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
</style>
