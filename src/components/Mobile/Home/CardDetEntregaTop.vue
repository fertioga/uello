<template>
    <b-card
      class="shadow mb-5 mr-2 ml-2 bg-body rounded card-det-entrega-top"
    >
      <b-row>
        <b-col class="col-4">
          <qt-falta-entrega/>
        </b-col>
        <b-col class="col-8 col-traking">
          <tracking class="traking"/>
          <p>
            Status do pedido: Saiu para entrega<br>
            Horário estimado: 15:29 - 16:29
          </p>
        </b-col>
      </b-row>      
    </b-card>
   
</template>
<script>
import QtFaltaEntrega from "./../../QtFaltaEntrega";
import Tracking from "./../../Tracking"
import { mapGetters } from 'vuex';
export default {

  name: "CardDetEntregaTop",
  components: {
    "qt-falta-entrega": QtFaltaEntrega,
    "tracking": Tracking
  },
  data() {
    return {      
        // 
    };    
  },
 computed:{
    ...mapGetters(['status'])
  }

};
</script>
<style scoped>
.card-det-entrega-top{
    top: 75px;
    z-index: 9;
    background: #0B4F6C;
    border-radius: 4px;
}
.card-det-entrega-top .card-body{
  padding: 5px 16px 0 37px;
} 
.traking{
  margin:0 auto;
  margin-top: -10px;
}
.col-traking p{
  text-align: center;
  color: #fff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
  text-align: left;
}
</style>