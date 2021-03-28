<template>
  <div id="mapa"></div>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default {

  name: 'Mapa',
  mounted() {
    
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY;
      var map = new mapboxgl.Map({
        container: "mapa",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-46.6618, -23.6302],
        zoom: 12
       
    });

    const marker = new mapboxgl.Marker().setLngLat([-46.6669,-23.6325]).addTo(map);
    const marker2 = new mapboxgl.Marker().setLngLat([-46.6665,-23.6241]).addTo(map);     
                        
  }

}
</script>

<style scoped>

  #mapa{
    top:0;
    left: 0;
    width: 100%;
    height: calc(100vh * 1.3);
  }

  @media screen and (max-width: 760px) {
    #mapa{
      top:-85px
    }
  }

</style>
