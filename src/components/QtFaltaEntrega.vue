<template>
  <div>    
 
    <MatchMedia query="(max-width: 760px)" v-slot="{ matches }">

      <!-- MOBILE -->
      <vue-circle v-if="matches" 
        class="qtEntregaMobile"
        :progress="75"
        :size="84"
        :reverse="false"
        ref="circleQtFalta"
        line-cap="round"
        :fill="{color: '#02BAEF'}" 
        empty-fill="#fff"
        :animation-start-value="0.0"
        :start-angle="275"
        insert-mode="append"
        :thickness="5"
        :show-percent="false"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <div class="qt-falta-slot-container">
              <p class="qt-falta-conteudo">{{txtFaltam}}</p>
              <p class="qt-falta-conteudo qt-falta-numero">{{qtFaltam}}</p>
              <p class="qt-falta-conteudo">{{txtEntregas}}</p>
          </div>
      </vue-circle>

      <!-- DESKTOP -->
      <vue-circle v-if="!matches" 
        :progress="75"
        :size="84"
        :reverse="false"
        ref="circleQtFalta"
        line-cap="round"
        :fill="{color: '#0B4F6C'}" 
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="275"
        insert-mode="append"
        :thickness="5"
        :show-percent="false"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <div class="qt-falta-slot-container">
              <p class="qt-falta-conteudo">{{txtFaltam}}</p>
              <p class="qt-falta-conteudo qt-falta-numero">{{qtFaltam}}</p>
              <p class="qt-falta-conteudo">{{txtEntregas}}</p>
          </div>
      </vue-circle>
    </MatchMedia>
  </div>
</template>
<script>
import { MediaQueryProvider,MatchMedia } from "vue-component-media-queries";
import VueCircle from 'vue2-circle-progress';
import { mapGetters } from 'vuex';

export default {
  name: 'QtFaltaEntrega',
  components: { 
    VueCircle ,  
    MediaQueryProvider,
    MatchMedia,
  },
  data(){
    return{
      txtFaltam: "Faltam",
      txtEntregas: "Entregas",
      qtFaltam:1,
    }
  },
  mounted(){
    //
  },
  computed:{    
    ...mapGetters(['status'])
  },
 
  watch:{
   
    status: function(val) {   
      
      // correção: plural ou singular no indicador
      if(val.suaEntrega == 1){
          this.txtFaltam    = "Falta";
          this.txtEntregas  = "Entrega!"; 
        }else{
          this.txtFaltam    = "Faltam";
          this.txtEntregas  = "Entregas"; 
      }
      this.qtFaltam = val.suaEntrega - val.entregaAtual;

      // atualiza
      this.$refs.circleQtFalta.updateProgress(( val.entregaAtual* 100) / val.suaEntrega);
    }
  },
  methods:{

    progress(event,progress,stepValue){
      // console.log(stepValue);
    },
    progress_end(event){
      // console.log("Circle progress end");
    }
  }
}

</script>
<style scoped>
  .qtEntregaMobile{
    margin:0
  }
  .qt-falta-slot-container{
    text-align:center; 
    padding-top: 0px;
    font-weight: 700;
    z-index: 5;
  }
  .qt-falta-conteudo{
    margin-bottom: -3px !important;
    margin-top: -3px !important;
    font-size: 10px;
  }

  .qt-falta-numero{
    font-size: 20px;
  }

  #qtFaltaEntrega{
    z-index: 99999;
  }

  @media screen and (max-width: 760px) {
    .qt-falta-slot-container{
      color: #fff;
    }
  }

</style>