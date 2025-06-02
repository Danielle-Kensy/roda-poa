<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div
        v-for="bike in getBikes"
        :key="bike.id"
        class="col-12 col-sm-6 col-md-3"
      >
        <BikeCard :bike="bike" @rent="handleRent" />
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
      <SlideBikeCard v-for="bike in activeList" :key="bike.id" :bike="bike" @remove="handleRemove" />
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
</template>

<script>
import { defineComponent } from "vue";
import BikeCard from "../components/BikeCard.vue";
import SlideBikeCard from "../components/SlideBikeCard.vue";

const getBikes = [
  {
    id: "1",
    charge: 20,
    station: "Estação Centro Histórico",
    turnstile: 5,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "2",
    charge: 10,
    station: "Estação Centro Histórico",
    turnstile: 4,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "3",
    charge: 40,
    station: "Estação Centro Histórico",
    turnstile: 7,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "4",
    charge: 30,
    station: "Estação Centro Histórico",
    turnstile: 9,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "5",
    charge: 10,
    station: "Estação Centro Histórico",
    turnstile: 6,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "6",
    charge: 15,
    station: "Estação Centro Histórico",
    turnstile: 11,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "7",
    charge: 15,
    station: "Estação Centro Histórico",
    turnstile: 12,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
  {
    id: "8",
    charge: 15,
    station: "Estação Centro Histórico",
    turnstile: 13,
    img: "https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/b2.png?raw=true",
  },
];

export default defineComponent({
  name: "IndexPage",
  components: {
    BikeCard,
    SlideBikeCard,
  },

  data() {
    return {
      getBikes,
      drawerRight: false,
      activeList: [],
    };
  },
  methods: {
    handleRent(bike) {
      this.activeList.push(bike);
    },
    handleRemove(id) {
      this.activeList = this.activeList.filter((bike) => bike.id !== id);
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
