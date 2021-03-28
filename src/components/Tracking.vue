<template>
  <div class="row">
    
    <!-- step 1 -->
    <div :class="classStep1">
      <div class="icones">
        <b-icon-inbox-fill />
      </div>
      <div class="statusicon rounded-circle">
        <span class="font-weight-bold h5 text-white"></span>
        <i class="fas fa-check pt-2" aria-hidden="true"></i>
      </div>
      <div class="linhastatus statusleft"></div>
      <h6 class="mt-2">Solicitação</h6>
    </div>

    <!-- step 2 -->
    <div :class="classStep2">
      <div class="icones">
        <b-icon-alarm />
      </div>
      <div class="statusicon rounded-circle text-white">
        <span class="font-weight-bold h5"></span>
        <i class="fas fa-check pt-2" aria-hidden="true"></i>
      </div>
      <div class="linhastatus"></div>
      <h6 class="mt-2">Pedido em separação</h6>
    </div>

    <!-- step 3 -->
    <div :class="classStep3">
      <div class="icones">
        <b-icon-geo-alt-fill />
      </div>
      <div class="statusicon rounded-circle text-white">
        <span class="font-weight-bold h5"></span>
        <i class="fas fa-check pt-2" aria-hidden="true"></i>
      </div>
      <div class="linhastatus"></div>
      <h6 class="mt-2">Motorista em trânsito</h6>
    </div>

    <!-- step 4 -->
    <div :class="classStep4">
      <div class="icones">
        <b-icon-check2 />
      </div>
      <div class="statusicon rounded-circle text-white">
        <span class="font-weight-bold h5"></span>
        <i class="fas fa-check pt-2" aria-hidden="true"></i>
      </div>
      <div class="linhastatus statusright"></div>
      <h6 class="mt-2">Pedido<br>entregue</h6>
    </div>
  
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

  name: "Tracking",
  data() {
    return {      
      classStep1: "col-3 pt-3 px-0 text-center containdetalhes pendente",
      classStep2: "col-3 pt-3 px-0 text-center containdetalhes pendente",
      classStep3: "col-3 pt-3 px-0 text-center containdetalhes pendente",
      classStep4: "col-3 pt-3 px-0 text-center containdetalhes pendente"
    }
  },

 computed:{
    ...mapGetters(['status'])
  },
 
  watch:{
    status: function(val) {
        
        switch (val.status){
            case 1:
              this.classStep1 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep2 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
              this.classStep3 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
              this.classStep4 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
            break;

            case 2:
              this.classStep1 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep2 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep3 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
              this.classStep4 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
            break;

            case 3:
              this.classStep1 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep2 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep3 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep4 = "col-3 pt-3 px-0 text-center containdetalhes pendente";
            break;

            case 4:
              this.classStep1 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep2 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep3 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
              this.classStep4 = "col-3 pt-3 px-0 text-center containdetalhes concluido";
            break;
          }
    }
  }
};
</script>
<style scoped>
.pendente .statusicon {
  background: #fff;
  border: 2px solid #ccc;
}
.pendente .icones{color:#ccc}
.rounded-circle {
  border-radius: 50% !important;
}
.text-white {
  color: #fff !important;
}
.statusicon {
  width: 8px;
  height: 8px;
  display: block;
  position: relative;
  z-index: 3;
  margin: -5px auto;
}

.containdetalhes .statusicon span {
  display: block;
  color: #909090;
}

.icones{margin-bottom:5px}

.linha-tempo h5,
.linha-tempo .h5 {
  font-size: 1.25rem;
}

.linhastatus {
  width: 100%;
  height: 1px;
  background: #ccc;
  position: relative;
  z-index: 2;
  /* margin-top: -17px; */
}

.statusleft {
  width: 50% !important;
  float: right;
}

.statusright {
  width: 50% !important;
  float: left;
}

.containdetalhes h6 {
  font-size: 9px;
  color: #606060;
  line-height: 1.5;
}

.concluido .linhastatusright,
.concluido .linhastatusleft,
.concluido .linhastatus {
  background: #ea394f;
}
.concluido .icones{color:#ea394f}
.concluido .statusicon {
  background: #fff;
  border: 1px solid #ea394f;
}

.concluido{
  padding-top: 16px !important;
}

@media screen and (max-width: 760px) {

  .concluido .icones{color:#fff}
  .rounded-circle {color: #fff}
  .statusicon {
    width: 8px;
    height: 8px;
    display: block;
    position: relative;
    z-index: 3;
    margin: -5px auto;
    color: #fff;
  }

  .containdetalhes h6{
    display: none;
  }

  .linhastatus {
  width: 100%;
  height: 1px;
  background: #fff;
  position: relative;
  z-index: 2;
  /* margin-top: -17px; */
}
}

</style>
