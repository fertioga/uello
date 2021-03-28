<template>
  <MatchMedia query="(max-width: 760px)" v-slot="{ matches }">
    <mobile-home v-if="matches"/>
    <desktop-home v-if="!matches" />
  </MatchMedia>
</template>

<script>
import { MediaQueryProvider,MatchMedia } from "vue-component-media-queries";
import DesktopHome from "./Desktop/Home/DesktopHome.vue";
import MobileHome from "./Mobile/Home/MobileHome.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    MediaQueryProvider,
    MatchMedia,
    "desktop-home": DesktopHome,
    "mobile-home": MobileHome    
  },
  mounted () {   
    this.getStatusApi();    
  },
  computed:{
    ...mapGetters(['status'])
  },
  methods:{    
    ...mapActions(['getStatusApi'])    
  }
};
</script>