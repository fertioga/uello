<template>
  <div>
    <nav-bar />
    <barra-logo />
    <card-det-entrega-top />
    <card-det-entrega-bottom />
    <mapa/> 
  </div>
</template>

<script>

import BarraLogo from "../../BarraLogo.vue";
import NavBar from "../../NavBar.vue";
import Mapa from "../../Mapa.vue";
import CardDetEntregaTop from "./CardDetEntregaTop"
import CardDetEntregaBottom from "./CardDetEntregaBottom"

export default {
  name: "Mobile",
  components: {
    "barra-logo": BarraLogo,
    "nav-bar": NavBar,
    "mapa": Mapa,
    "card-det-entrega-top": CardDetEntregaTop,
    "card-det-entrega-bottom":CardDetEntregaBottom,
  }
};
</script>