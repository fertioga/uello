<template>
  <b-card
    style="max-width: 20rem;"
    class="mb-2 shadow mb-5 bg-body rounded card-det-entrega"
  >
    <central-ajuda/>
    <tracking class="card-tracking"/>
    <b-card-text class="card-saiu-entrega">
      <span class="titulo">SAIU PARA ENTREGA</span>
      <br>
      <span class="texto">
        Seu pedido da <b>{{ status.empresaEntregadora }}</b> saiu para entrega, 
        e será entregue no endereço:         
      </span>
    </b-card-text>

    <b-card-text class="card-endereco">
      <b-row>
        <b-col class="col-1">
            <b-icon-geo-alt-fill class="icone" />
        </b-col>
        <b-col class="col-10">
         <p>{{ status.pais }} - {{ status.cidade }} - {{ status.endereco }}</p>
        </b-col>
      </b-row>
    </b-card-text>

    <b-card-text class="card-hora-entrega text-left">
      <p>
        <b-icon-clock />
        HORÁRIO ESTIMADO: 14:45 - 16:58
      </p>
      <hr>
    </b-card-text>
    <b-card-text class="card-detalhes-entrega">
      <b-row>
        <b-col class="col-4">
          <qt-falta-entrega />
        </b-col>
        <b-col class="col-8 texto-detalhe-entrega">
          <ul>
            <li><b>Sua entrega é a nº </b><b class="text-danger">{{ status.suaEntrega }}</b></li>
            <li><b>Entrega Atual:</b> {{ status.entregaAtual }}</li>
            <li><b>Quantidade de Volumes:</b> {{ status.qtVolumes }}</li>
            <li><b>Motorista:</b> {{ status.motorista }}</li>
            <li><b>Horário Estimado:</b> 14:45 - 16:58</li>
          </ul>
        </b-col>
      </b-row>
    </b-card-text>

    <b-card class="card-historico-entrega">
      <p class="titulo"><b-icon-arrow-counterclockwise /> Histórico</p>

      <ul class="steps-historico">
        <li class="first">
          <b-icon-circle class="icone" /> 
          <div class="linha-status">
            <p>Solicitação Recebida<br><small>14/08 - 22h41</small></p>
          </div>
        </li>
        <li>
          <b-icon-circle class="icone" /> 
          <div class="linha-status">
            <p>Pedido em separação <br> <small>14/08 - 16h23</small></p>
          </div>
        </li>
        <li class="last">
          <b-icon-circle class="icone" /> 
          <div class="linha-status">
            <p>Motorista está a caminho<br><small>14/08 - 16h23</small></p>
          </div>
        </li>
      </ul>
    </b-card>
  </b-card> 
  
</template>

<script>

import CentralAjuda from "../../../CentralAjuda.vue";
import Tracking from "../../../Tracking.vue";
import QtFaltaEntrega from "../../../QtFaltaEntrega.vue";
import { mapGetters} from "vuex";

export default {
  name: "Desktop",
  components: {
    "qt-falta-entrega": QtFaltaEntrega,
    "central-ajuda":CentralAjuda,
    "tracking":Tracking
  },
     data() {
      return {
       //
      }
    },
    computed:{
      ...mapGetters(['status'])
    }
};
</script>
<style scoped>

  .card-det-entrega{
    position: absolute;
    width: 300px;
    left: 90px;
    top: 61px;
    z-index: 99999;
    padding: 1rem 1rem 0 1rem !important
  }
  .card-det-entrega .card-body{padding: 1rem 0 0 0 !important}

  .card-tracking{margin-top:24px}

  .card-saiu-entrega{ 
    left: 110px;
    top: 256px;
    background: #0B4F6C;
    border-radius: 4px;
    padding: 10px 14px 10px 14px;
    margin-top: 40px;
  }
  .card-saiu-entrega .titulo{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
    overflow: auto;
  }
  .card-saiu-entrega .texto{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 1.3;
    color: #FFFFFF;
  }

  .card-endereco .icone{width: 18px;}
  .card-endereco p{font-size: 12px;}

  .card-hora-entrega{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #0B4F6C;
  }
  .card-hora-entrega hr{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid #B4B4B8;
    width: 80px;
  }

  .texto-detalhe-entrega{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #4B4B4D;
  }
  .texto-detalhe-entrega ul{
    padding-left: 0;
  }
  .texto-detalhe-entrega ul li{
    font-weight: 600;
    list-style: none;
    margin: 2px 0;
    }

  .card-historico-entrega{
    border-bottom-style: none;
    border-radius: 0.25rem 0.25rem 0 0;
    border-color: #E63B4F;
  }

  .card-historico-entrega .titulo{
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #E63B4F;
      text-align: center;
      margin-bottom:33px !important
  }
  .steps-historico{margin-left: -10px; margin-bottom: -10px;}
  .steps-historico li{
    list-style:none; 
    margin-top:-20px
  }
  .steps-historico .first{margin-top:0 important;}
  .steps-historico .last .linha-status{
    border-left: 0;
    }
  .steps-historico li .icone{
    margin-left:-18px; 
    background:#fff;
    color: #E63B4F;
  }
  .steps-historico .linha-status{
    border-left:1px solid #E63B4F; 
    margin-left:-11px; 
    padding-left:20px; 
    padding-bottom:10px
  }
  .steps-historico .linha-status p{
    margin-top:-20px; 
    font-size:10px; 
    font-weight:400
  }
  .steps-historico .linha-status small{
    font-size:9px; 
    line-height:1
  }

</style>