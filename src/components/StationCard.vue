<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax :src="station.img" :height="300" />

      <q-card-section>
        <div class="text-h6">{{ station.address }}</div>
        <div class="text-subtitle2">📍 {{ station.distance }} Km</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat style="background: orange" @click="openEditModal" v-if="isAdmin"
          >Editar</q-btn
        >
        <q-btn flat style="background: red" @click="remove" v-if="isAdmin">Excluir</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <EditStationModal v-model="showEditModal" :station="station" @edit="edit" />
</template>

<script>
import EditStationModal from "./EditStationModal.vue";
export default {
  name: "StationCard",
  props: { station: Object, isAdmin: Boolean },
  components: { EditStationModal },

  data() {
    return {
      showEditModal: false,
    };
  },
  emits: ["remove", "edit"],
  methods: {
    openEditModal() {
      this.showEditModal = true;
    },
    edit(json) {
      console.log(json);
      this.$emit("edit", json);
      this.showEditModal = false;
    },
    remove() {
      this.$emit("remove", this.station.id);
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
.q-btn {
  color: white;
  width: 50%;
  margin-bottom: 1%;
}
</style>
