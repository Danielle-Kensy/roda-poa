<template>
  <q-slide-item @left="onLeft" @right="onRight" right-color="red">
    <template v-slot:right>
      <q-icon name="highlight_off" />
    </template>

    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="bike.img" draggable="false" />
        </q-avatar>
      </q-item-section>
      <q-item-section>{{ bike.station }} - {{ bike.turnstile }}</q-item-section>
    </q-item>
  </q-slide-item>
</template>
<script>
export default {
  name: "SlideBikeCard",
  props: { bike: Object },

  data() {
    return {
      timer: null,
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
      this.$emit("remove", this.bike.id);
      this.finalize(reset);
    },
  },

  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>
<style scoped></style>
