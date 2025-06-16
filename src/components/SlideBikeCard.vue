<template>
  <q-slide-item class="card" @right="onRight" right-color="red">
    <template v-slot:right>
      <q-icon name="highlight_off" />
    </template>

    <q-item class="container">
      <q-item-section avatar class="price">
        <q-avatar rounded class="custom">
          <img :src="rent.bicicleta_img" draggable="false" />
        </q-avatar>
        <q-chip square color="primary" icon="request_quote">
          Total R${{ rent.preco }},00
        </q-chip>
      </q-item-section>
      <q-item-section>Tempo restante:</q-item-section>
      <q-linear-progress
        :value="rent.tempo_alugado_minutos"
        color="primary"
        stripe
        size="10px"
        class="q-mt-sm"
      />
    </q-item>
    <q-card-section align="center" style="padding: 0 16px 0 16px;">
      <q-select
        color="black"
        v-model="catraca_retorno"
        :options="optionsTurnstile"
        label="Catraca de Retorno"
        class="select"
        borderless
      >
      </q-select>
    </q-card-section>
  </q-slide-item>
</template>
<script>
export default {
  name: "SlideBikeCard",
  props: { rent: Object },

  data() {
    return {
      timer: null,
      catraca_retorno: null,
      optionsTurnstile: [
        { label: "Nº 1", value: 1 },
        { label: "Nº 3", value: 3 },
        { label: "Nº 4", value: 4 },
        { label: "Nº 5", value: 5 },
        { label: "Nº 6", value: 6 },
        { label: "Nº 9", value: 9 },
      ],
    };
  },
  emits: ["remove"],
  methods: {
    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 1000);
    },

    onRight({ reset }) {
      const json = {
        id: this.rent.id,
        catraca: this.catraca_retorno.value,
      };
      this.$emit("remove", json);
      this.finalize(reset);
    },
  },

  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>
<style scoped>
.card {
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    margin: 10px;
}
.custom {
  width: 50px;
  height: 30px;
}
.price {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
