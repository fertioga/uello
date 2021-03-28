<template> 
    <b-card
        class="mr-2 ml-2 bg-body rounded card-det-entrega-bottom"
    >      
        <div class="card-det-central-ajuda-mobile"><central-ajuda /></div>

        <b-card
            class="mb-3 bg-body  card-det-entrega-bottom-linha-1"
        >
            <span class="texto">
                Seu pedido da <b>{{ status.empresaEntregadora }}</b> saiu para entrega, 
                e será <b>entregue</b> no endereço:         
            </span>
        </b-card>
        <b-card-text class="card-det-entrega-bottom-linha-2 mr-2 ml-3">
            <b-row>
                <b-col class="col-1">
                    <b-icon-geo-alt-fill class="icone" />
                </b-col>
                <b-col class="col-10">
                <p>{{ status.pais }}</p>
                <small>{{ status.cidade }} - {{ status.endereco }}</small>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>
<script>

import { mapGetters } from 'vuex';
import CentralAjuda from "../../CentralAjuda";
export default {
    name: "CardDetEntregaBottom",
    components:{
        "central-ajuda":CentralAjuda
    },
    computed:{
    ...mapGetters(['status'])
    }
};
</script>

<style scoped>
.card-det-entrega-bottom .card-body{padding: 0; overflow: hidden;}
.card-det-entrega-bottom{
    border: 0;
    background: #FFFFFF;
    border-radius: 4px 4px 0px 0px;
    position: fixed;
    bottom: 0;
    padding-bottom:15px ;
    margin: 0 auto;
    z-index: 9;
}
.card-det-central-ajuda-mobile{
    position: absolute;
    z-index: 9;
    top: -48px;
    right: 0;
}

.card-det-entrega-bottom-linha-1{
    width: 100%;
    font-size: 10px;
    color: #fff;
    padding:10px 15px;
    background: #E63B4F;
    border-radius: 4px 4px 0px 0px;
}
.card-det-entrega-bottom-linha-2 p{font-size: 12px; margin-top: 5px; margin-bottom: -8px;}
.card-det-entrega-bottom-linha-2 small {font-size: 10px; margin: 0;  line-height: 1px;}
</style>