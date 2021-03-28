<template>
  <div>
    <nav-bar />
    <barra-logo />
    <card-det-entrega/>
    <mapa/> 
  </div>
</template>

<script>

import BarraLogo from "../../BarraLogo.vue";
import NavBar from "../../NavBar.vue";
import Mapa from "../../Mapa.vue";
import CardDetEntrega from "./CardDetalheEntrega/CardDetEntrega.vue"

export default {
  name: "Desktop",
  components: {
    "barra-logo": BarraLogo,
    "nav-bar": NavBar,
    "mapa": Mapa,
    "card-det-entrega":CardDetEntrega
  }
};
</script>
