<template>
  <div>
      <b-navbar id="navbar" toggleable="lg" type="light" variant="light">
      <b-navbar-nav class="ml-auto" >
            <b-nav-item right>| FULANO DE TAL DA SILVA</b-nav-item>
      </b-navbar-nav>
      </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

  #navbar{
    background-color: #E5E5E5 !important;
  }

  @media screen and (max-width: 760px) {
    #navbar{
      display: none;
    }
  }

</style>
