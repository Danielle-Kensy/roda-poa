<template>
  <q-dialog :v-model="showModal">
    <q-card style="min-width: 40%">
      <h5 class="title">Editar Bike <q-icon name="electric_bike" /> </h5>
      <q-card-section align="center">
        <img
          class="modal-img"
          src="https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/biker.png?raw=true"
          alt="Bike"
        />
        <div class="q-gutter-sm">
          <q-radio
            v-model="img"
            val="https://github.com/Danielle-Kensy/eBikes/blob/main/src/img/biker.png?raw=true"
            label="Imagem Padrão"
          />
        </div>
      </q-card-section>

      <q-card-section align="center">
        <q-select
          color="black"
          bg-color="#E9EDF5"
          filled
          v-model="quilometragem_carga"
          :options="optionsKm"
          label="Carga da Bike"
          class="select"
        >
          <template v-slot:prepend>
            <q-icon name="battery_3_bar" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-section align="center">
        <q-select
          color="black"
          bg-color="#E9EDF5"
          filled
          v-model="baia"
          :options="optionsStation"
          label="Estação"
          class="select"
        >
          <template v-slot:prepend>
            <q-icon name="location_on" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-section align="center">
        <q-select
          color="black"
          bg-color="#E9EDF5"
          filled
          v-model="catraca"
          :options="optionsTurnstile"
          label="Catracas Disponíveis"
          class="select"
        >
          <template v-slot:prepend>
            <q-icon name="lock_open" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-section align="center">
        <q-select
          color="black"
          bg-color="#E9EDF5"
          filled
          v-model="status"
          :options="optionsStatus"
          label="Status da Bike"
          class="select"
        >
          <template v-slot:prepend>
            <q-icon name="pedal_bike" />
          </template>
        </q-select>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Editar" @click="edit" />
        <q-btn outline label="Fechar" color="red" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "EditBikeModal",
  props: { showModal: Boolean, bike: Object },

  data() {
    return {
      img: this.bike.img,
      quilometragem_carga: this.bike.quilometragem_carga,
      optionsKm: [
        { label: "10km Disponíveis", value: 10 },
        { label: "15km Disponíveis", value: 15 },
        { label: "20km Disponíveis", value: 20 },
      ],
      baia: this.bike.baia,
      optionsStation: [
        {
          label: "Estação Centro Histórico",
          value: "Estação Centro Histórico",
        },
        { label: "Estação Orla do Guaíba", value: "Estação Orla do Guaíba" },
        {
          label: "Estação Bairro Menino-Deus",
          value: "Estação Bairro Menino-Deus",
        },
        { label: "Estação do Gasômetro", value: "Estação do Gasômetro" },
      ],
      catraca: this.bike.catraca,
      optionsTurnstile: [
        { label: "Nº 1", value: 1 },
        { label: "Nº 2", value: 2 },
        { label: "Nº 3", value: 3 },
        { label: "Nº 4", value: 4 },
        { label: "Nº 5", value: 5 },
        { label: "Nº 6", value: 6 },
        { label: "Nº 7", value: 7 },
        { label: "Nº 8", value: 8 },
        { label: "Nº 9", value: 9 },
        { label: "Nº 10", value: 10 },
      ],
      status: this.bike.status,
      optionsStatus: [
        { label: "Disponível", value: "disponível" },
        { label: "Em Reparo", value: "indisponível" },
        { label: "Alugada", value: "alugada" },
      ],
    };
  },
  emits: ["edit"],
  methods: {
    edit() {
      const json = {
        id: this.bike.id,
        quilometragem_carga: this.quilometragem_carga.value ?? this.bike.quilometragem_carga,
        baia: this.baia.value ?? this.bike.baia,
        catraca: this.catraca.value ?? this.bike.catraca,
        status: this.status.value ?? this.bike.status,
        img: this.img ?? this.bike.img,
      };
      this.$emit("edit", json);
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
