<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div
        v-for="station in getStations"
        :key="station.id"
        class="col-12 col-sm-12 col-md-12"
      >
        <StationCard :station="station" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import StationCard from "src/components/StationCard.vue";
import ch from "../assets/ch.png";
import meninodeus from "../assets/meninodeus.jpeg";
import gasometro from "../assets/gasometro.jpg";
import orlaguaiba from "../assets/orlaguaiba.jpg";

const getStations = [
  {
    id: "1",
    address: "Centro Histórico",
    distance: 15,
    img: ch,
  },
  {
    id: "2",
    address: "Bairro Menino Deus",
    distance: 3,
    img: meninodeus,
  },
  {
    id: "3",
    address: "Gasômetro",
    distance: 10,
    img: gasometro,
  },
  {
    id: "4",
    address: "Orla do Guaíba",
    distance: 17,
    img: orlaguaiba,
  },
];

export default defineComponent({
  name: "StationPage",
  components: {
    StationCard,
  },

  data() {
    return {
      getStations,
    };
  },
});
</script>
