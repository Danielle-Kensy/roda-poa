<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div
        v-for="station in stations"
        :key="station.id"
        class="col-12 col-sm-12 col-md-12"
      >
        <StationCard
          :station="station"
          :isAdmin="isAdmin"
          @remove="deleteStation"
          @edit="updateStation"
        />
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" v-if="isAdmin" @click="openModal" />
    </q-page-sticky>
    <CreateStationModal v-model="showModal" @create="createStation" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import StationCard from "src/components/StationCard.vue";
import CreateStationModal from "src/components/CreateStationModal.vue";
import {
  getEstacoes,
  createEstacao,
  updateEstacao,
  deleteEstacao,
} from "src/api/stations";

export default defineComponent({
  name: "StationPage",
  components: {
    StationCard,
    CreateStationModal,
  },

  data() {
    return {
      stations: [],
      showModal: false,
      isAdmin: false,
    };
  },
  async mounted() {
    const user_id = localStorage.getItem("user_id");
    this.isAdmin = user_id === "u1";
    try {
      const data = await getEstacoes();
      this.stations = data;
    } catch (err) {
      console.error("Erro ao buscar estações:", err);
      this.$q.notify({
        type: "negative",
        message: "Erro ao buscar estações contate o suporte",
      });
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    async deleteStation(id) {
      try {
        await deleteEstacao(id);
        this.stations = this.stations.filter((station) => station.id !== id);
        this.$q.notify({
          type: "negative",
          message: "Estação deletada",
        });
      } catch (err) {
        console.error("Erro ao excluir a estação:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao excluir a estação",
        });
      }
    },
    async createStation(json) {
      try {
        const data = await createEstacao(json);
        this.stations.push(data);
        this.showModal = false;
        this.$q.notify({
          type: "positive",
          message: "Estação cadastrada com sucesso!",
        });
      } catch (err) {
        console.error("Erro ao criar a estação:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao criar a estação",
        });
      }
    },
    async updateStation(json) {
      try {
        await updateEstacao(json.id, json);
        this.stations = this.stations.map((station) => {
          if (station.id === json.id) {
            station.address = json.address;
            station.img = json.img;
            station.distance = json.distance;
          }
          return station;
        });
        this.$q.notify({
          type: "positive",
          message: "Estação editada com sucesso!",
        });
      } catch (err) {
        console.error("Erro ao atualizar a estação:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao atualizar a estação",
        });
      }
    },
  },
});
</script>
