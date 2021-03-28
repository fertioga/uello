<template>
  <div class="barra-logo">
      <logo/>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'BarraLogo',
  components: { 'logo' : Logo  },
}
</script>

<style scoped>

  .barra-logo{
    position: absolute;
    width: 70px;
    padding: 12px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #EA394F;
    z-index: 1;
  }

  @media screen and (max-width: 760px) {
    .barra-logo{
      position: absolute;
      width: 100%;
      padding: 7px 12px 12px 12px;
      height: 60px;
      left: 0px;
      top: 0px;
      background: #E63B4F;
    }
    .barra-logo #logo{
      float: left;
    }
  }

</style>
