<template>
  <MatchMedia query="(max-width: 760px)" v-slot="{ matches }">
      <!-- MOBILE -->
      <b-dropdown :no-caret="true" button-class="centro-ajuda-bottom" :dropright="true"  v-if="matches">
        <template #button-content>
          <span class="txt-central-ajuda-mobile">Central de ajuda</span>
        </template>
          <b-dropdown-item>Tópico de Ajuda 1</b-dropdown-item>
          <b-dropdown-item>Tópico de Ajuda 2</b-dropdown-item>
      </b-dropdown>

      <!-- DESKTOP -->
      <b-dropdown :block="true"  v-if="!matches">
        <template #button-content>
          <b-icon-question-circle/> Central de Ajuda
        </template>
          <b-dropdown-item>Tópico de Ajuda 1</b-dropdown-item>
          <b-dropdown-item>Tópico de Ajuda 2</b-dropdown-item>
      </b-dropdown>
  </MatchMedia>
</template>
<script>
import { MatchMedia } from "vue-component-media-queries";
export default {
  name: 'CentralAjuda',
  components:{    
    MatchMedia
  }
}
</script>
<style scoped>
 .centro-ajuda-bottom{
      float: right; 
      margin-bottom: 10px;
      font-size: 10px;
      z-index: 9999;
  }
  .txt-central-ajuda-mobile{
    font-size: 11px!important; 
    font-weight: 600;
    margin: -2px 8px;
    }
</style>