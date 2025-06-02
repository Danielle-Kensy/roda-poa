<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax
        :src="station.img"
        :height="300"
      />

      <q-card-section>
        <div class="text-h6">{{ station.address }}</div>
        <div class="text-subtitle2">📍 {{ station.distance }} Km</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "StationCard",
  props: { station: Object },
};
</script>

<style scoped>
.my-card{
  width: 60%;
  align-self: center;
  justify-self: center;
}
</style>