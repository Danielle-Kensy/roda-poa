<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div
        v-for="bike in bikes"
        :key="bike.id"
        class="col-12 col-sm-6 col-md-3"
      >
        <BikeCard
          :bike="bike"
          :isAdmin="isAdmin"
          @rent="handleRent"
          @remove="deleteBike"
          @edit="updateBike"
        />
      </div>
    </div>
  </q-page>
  <q-drawer
    side="right"
    v-model="drawerRight"
    :width="270"
    :breakpoint="700"
    elevated
  >
    <q-scroll-area class="fit">
      <h5>
        Bikes Ativa <span class="material-icons"> hourglass_bottom </span>
      </h5>
      <SlideBikeCard
        v-for="bike in activeList"
        :key="bike.id"
        :bike="bike"
        @remove="handleRemove"
      />
    </q-scroll-area>
  </q-drawer>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      @click="drawerRight = !drawerRight"
      icon="pedal_bike"
      color="primary"
    />
  </q-page-sticky>
  <q-page-sticky position="bottom-right" :offset="[18, 90]">
    <q-btn fab icon="add" color="primary" v-if="isAdmin" @click="openModal" />
  </q-page-sticky>
  <CreateBikeModal v-model="showModal" @create="createBike" />
</template>

<script>
import { defineComponent } from "vue";
import BikeCard from "../components/BikeCard.vue";
import SlideBikeCard from "../components/SlideBikeCard.vue";
import CreateBikeModal from "../components/CreateBikeModal.vue";
import { getBikes, createBike, updateBike, deleteBike } from "src/api/bikes";

export default defineComponent({
  name: "IndexPage",
  components: {
    BikeCard,
    SlideBikeCard,
    CreateBikeModal,
  },

  data() {
    return {
      bikes: [],
      drawerRight: false,
      activeList: [],
      isAdmin: false,
      showModal: false,
    };
  },
  async mounted() {
    const user_id = localStorage.getItem("user_id");
    this.isAdmin = user_id === "u1";
    try {
      const data = await getBikes(); // <-- chamada real à API
      this.bikes = data;
    } catch (err) {
      console.error("Erro ao buscar bikes:", err);
      this.$q.notify({
        type: "negative",
        message: "Erro ao buscar bikes contate o suporte",
      });
    }
    // try {
    //   const data = await getRents(); // <-- chamada real à API
    //   this.activeList = data;
    // } catch (err) {
    //   console.error("Erro ao buscar alugueis:", err);
    //   this.$q.notify({
    //     type: "negative",
    //     message: "Erro ao buscar alugueis contate o suporte",
    //   });
    // }
  },
  methods: {
    handleRent(bike) {
      this.activeList.push(bike);
    },
    handleRemove(id) {
      this.activeList = this.activeList.filter((bike) => bike.id !== id);
    },
    openModal() {
      this.showModal = true;
    },
    async createBike(json) {
      try {
        const data = await createBike(json);
        this.bikes.push(data);
        this.showModal = false;
        this.$q.notify({
          type: "positive",
          message: "Bike cadastrada com sucesso!",
        });
      } catch (err) {
        console.error("Erro ao criar o bicicleta:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao criar o bicicleta",
        });
      }
    },
    async deleteBike(id) {
      try {
        await deleteBike(id);
        this.bikes = this.bikes.filter((bike) => bike.id !== id);
        this.$q.notify({
          type: "negative",
          message: "Bike deletada",
        });
      } catch (err) {
        console.error("Erro ao excluir o bicicleta:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao excluir o bicicleta",
        });
      }
    },
    async updateBike(json) {
      try {
        await updateBike(json.id, json);
        this.bikes = this.bikes.map((bike) => {
          if (bike.id === json.id) {
            bike.quilometragem_carga = json.quilometragem_carga;
            bike.baia = json.baia;
            bike.turnstile = json.turnstile;
            bike.img = json.img;
            bike.status = json.status;
          }
          return bike;
        });
        this.$q.notify({
          type: "positive",
          message: "Bike editada com sucesso!",
        });
      } catch (err) {
        console.error("Erro ao atualizar o bicicleta:", err);
        this.$q.notify({
          type: "negative",
          message: "Erro ao atualizar o bicicleta",
        });
      }
    },
  },
});
</script>

<style scoped>
.q-drawer {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  h5 {
    justify-self: center;
    font-weight: 600;
    color: #636978;
  }
}
</style>
