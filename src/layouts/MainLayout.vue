<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img class="logo" src="../assets/e-bike.png" alt="roda&poa logo" />
        <q-toolbar-title class="title"> Roda&Poa - {{ getTitle() }} </q-toolbar-title>

        <q-btn
          v-if="currentRoute !== '/ListStations'"
          @click="goToStations"
          flat
          round
          dense
          icon="store"
        >
          <q-tooltip class="bg-indigo"> Estações </q-tooltip>
        </q-btn>
        <q-btn
          v-if="currentRoute !== '/ListBikes'"
          @click="goToBikes"
          flat
          round
          dense
          icon="electric_bike"
        >
          <q-tooltip class="bg-indigo"> Bikes </q-tooltip>
        </q-btn>
        <q-btn flat round dense icon="account_circle" @click="goToUserProfile">
          <q-tooltip class="bg-indigo"> Perfil </q-tooltip>
        </q-btn>
        <q-btn @click="onLogOut" flat round dense icon="logout">
          <q-tooltip class="bg-indigo"> Logout </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  data() {},

  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },

  methods: {
    onLogOut() {
      this.$router.push("/");
    },
    goToStations() {
      this.$router.push("/ListStations");
    },
    goToBikes() {
      this.$router.push("/ListBikes");
    },
    goToUserProfile() {
      this.$router.push("/UserProfile");
    },
    getTitle() {
      if (this.currentRoute === "/ListBikes") {
        return "Bikes Disponíveis";
      } else if (this.currentRoute === "/ListStations") {
        return "Estações Próximas";
      } else {
        return "Roda&Poa - Bikes Disponíveis";
      }
    },
  },
});
</script>

<style scooped>
.logo {
  width: 5rem;
  margin-bottom: 1.25rem;
}
.title {
  font-weight: 600;
  font-size: 30px;
}
</style>
