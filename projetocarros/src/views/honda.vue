<script setup>
import { ref, computed } from 'vue';
import CarCard from '../components/CarCard.vue';

const cars = [
    {
        id: "Honda_1",
        name: "Honda Accord Sedan 96",
        imageUrl: "https://cdn.discordapp.com/attachments/644690595033645104/1228903014325289040/Honda_Accord_Sedan_96.png?ex=662dbc1e&is=661b471e&hm=b7818a18eb0fee55e03f0270256c7e1bb886a3f14b89774023442d43c68f5b77&",
        hp: "181",
        type: "FF",
        price: "23.540",
        description: "Como conseguir: Loja de novos da Honda",
    },
    {
        id: "Honda_2",
        name: "Honda Accord Wagon 96",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903441049587712/Honda_CR-X_Del-Sol_SiR_95.png?ex=662dbc84&is=661b4784&hm=feeb9daf8be6118fc8b897f8d7ee9f9bf57d0f85c6714339a51405db3e591ab2&",
        hp: "181",
        type: "FF",
        price: "26.890",
        description: "Como conseguir: Loja de novos da Honda",
    },

    {
        id: "Honda_3",
        name: "Honda Civic Ferio Si-II (EK) '96",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903441691316274/Honda_Accord_Wagon_96.png?ex=662dbc84&is=661b4784&hm=99ff8c2f7020c5fdf6359b87814d7c241a90f09e561a610884b30c938c8e9fe3&",
        hp: "164",
        type: "FF",
        price: "18.280",
        description: "Como conseguir: Loja de novos da Honda",
    },
    
    {
        id: "Honda_4",
        name: "Honda Civic Ferio SiR (EG) '93",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903441997234296/Honda_CIVIC_Ferio_Si-II_EK_96.png?ex=662dbc84&is=661b4784&hm=2a22a88996015a68d7d0dd7286ce62c2c7fd698be23dd768b3b5ad36fd78dbb4&",
        hp: "151",
        type: "FF",
        price: "11.000",
        description: "Como conseguir: Loja de novos da Honda",
    },
    
    {
        id: "Honda_5",
        name: "Honda Civic Ferio SiR-II (EG) '93",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903442332913684/Honda_CIVIC_Ferio_SiR_EG_93.png?ex=662dbc84&is=661b4784&hm=ebcfe465702f988e2eeef0f54e85f9410be890f031f92a0215bb5f5c18dd25c0&",
        hp: "153",
        type: "FF",
        price: "5.000",
        description: "Como conseguir: Loja de novos da Honda",
    },

    {
        id: "Honda_6",
        name: "Honda Civic Ferio SiR-II (EK) '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903443108724847/Honda_CIVIC_SiR-II_EG_93.png?ex=662dbc84&is=661b4784&hm=3850047250888409997cfe63050ee2a015db905ea690c25a4f026f756339ab12&",
        hp: "164",
        type: "FF",
        price: "17.280",
        description: "Como conseguir: Loja de novos da Honda",
    },

    {
        id: "Honda_7",
        name: "Honda Civic Type R (EK) '97",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903443490541628/Honda_CIVIC_SiR-II_EK_95.png?ex=662dbc84&is=661b4784&hm=e0d6d197aa3c6f12b865c028b16dae51432e27cd77a5da0fff4cf324ccdc3c7d&",
        hp: "175",
        type: "FF",
        price: "19.980",
        description: "Como conseguir: Loja de novos da Honda",
    },

    {
        id: "Honda_8",
        name: "Honda CR-X del Sol SiR '92",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903443826217051/Honda_CIVIC_TYPE_R_EK_97.png?ex=662dbc84&is=661b4784&hm=90a2dc676f8f4ad8e60f2b3645fd98de505868c67061d76186d370e963c57f56&",
        hp: "175",
        type: "FF",
        price: "7.000",
        description: "Como conseguir: Loja de novos da Honda",
    },

    {
        id: "Honda_9",
        name: "Honda CR-X del Sol VGi '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903444257964052/Honda_CR-X_del_Sol_SiR_92.png?ex=662dbc85&is=661b4785&hm=7586f7824b183ebe3fe92ec4a25bdaf03032726c22f4d78f3f2bb58c5688978d&",
        hp: "130",
        type: "FF",
        price: "1.553.000",
        description: "Como conseguir: Loja de novos da Honda",
    },
    
    {
        id: "Honda_10",
        name: "Honda CR-X del Sol LM Edition",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903444560220260/Honda_CR-X_Del_Sol_VGi_95.png?ex=662dbc85&is=661b4785&hm=b5695806a03a3f69d29e5ef08a82d534d9229c37c02a06a4ff9e07470a5cc56a&",
        hp: "580",
        type: "FF",
        price: "Não tem",
        description: "Como conseguir: Vencendo o Anglo-Japanese Sports Car Championship",
    },
    
    {
        id: "Honda_11",
        name: "Honda CR-X Del-Sol SiR '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903444882915368/Honda_CR-X_del-sol_LM_Edition.png?ex=662dbc85&is=661b4785&hm=1a82fa479045abbc5a4ab2281b1c446da41d34de692427da9e73b90594f79059&",
        hp: "170",
        type: "FF",
        price: "1.873.000",
        description: "Como conseguir: Loja de novos da Honda. *Só disponível na versão japonesa.",
    },

    {
        id: "Honda_12",
        name: "Honda CR-X Del-Sol Vxi '92",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903512373461043/Honda_NSX-R_GT1_Turbo_95.png?ex=662dbc95&is=661b4795&hm=86b230b59a565c457763678d990ff9ecf6df850892e58676b3dee0c27ac16131&",
        hp: "130",
        type: "FF",
        price: "7.000",
        description: "Como conseguir: Na Loja de usados da Honda.",
    },

    {
        id: "Honda_13",
        name: "Honda CR-X SiR '90",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903512750952499/Honda_CR-X_Del-Sol_VXi_92.png?ex=662dbc95&is=661b4795&hm=6ffb53647cb9dd9a851c128dc787b80e2ea06fdee282b18c79bb379426ce27bf&",
        hp: "160",
        type: "FF",
        price: "5.000",
        description: "Como conseguir: Na Loja de usados da Honda.",
    },

    {
        id: "Honda_14",
        name: "Honda Integra SiR-G (DC2) '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903513069715476/Honda_CR-X_SiR_90.png?ex=662dbc95&is=661b4795&hm=720bd09f44e357206ffb32fb1f1331f54e06c62ba2b5ca2e39a611b1eaccdd85&",
        hp: "180",
        type: "FF",
        price: "19.580",
        description: "Como conseguir: Na Loja de novos da Honda.",
    },

    {
        id: "Honda_15",
        name: "Honda Integra Type R (DC2) '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903513418108958/Honda_INTEGRA_SiR-G_DC2_95.png?ex=662dbc95&is=661b4795&hm=424ad0e27dae89d63a65baba4b46f45a7835de74d2ad790ac8c2f6dba3af2a82&",
        hp: "200",
        type: "FF",
        price: "22.280",
        description: "Como conseguir: Na Loja de usados da Honda.",
    },
    {
        id: "Honda_16",
        name: "Honda NSX '90",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903513757585488/Honda_INTEGRA_TYPE_R_DC2_95.png?ex=662dbc95&is=661b4795&hm=f88984663b14807b578300ee5b35b62c2e7cc0fb64830f877a0665aa221b65c6&",
        hp: "280",
        type: "MR",
        price: "50.000",
        description: "Como conseguir: Na Loja de usados da Honda.",
    },
    {
        id: "Honda_17",
        name: "Honda NSX '97",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903514076348516/Honda_NSX_90.png?ex=662dbc95&is=661b4795&hm=40f888cb366196831a8ab09012de1541d8e58ed8e175614210ad365b42a18002&",
        hp: "280",
        type: "MR",
        price: "91.070",
        description: "Como conseguir: Na Loja de novos da Honda.",
    },
    {
        id: "Honda_18",
        name: "Honda NSX Type R '92",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903514437062696/Honda_NSX_97.png?ex=662dbc95&is=661b4795&hm=a4082f09c64ec3583f2379038077dceeeb2b03e6b51a84452c77ba4ce5d233d9&",
        hp: "280",
        type: "MR",
        price: "65.000",
        description: "Como conseguir: Na Loja de novos da Honda.",
    },
    {
        id: "Honda_19",
        name: "Honda NSX Type S '97",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903514814545971/Honda_NSX_Type_R_92.png?ex=662dbc95&is=661b4795&hm=73224b6214a51447760db13734c07a33a95de7c5e30e0bce3435c388ba2dcee5&",
        hp: "280",
        type: "MR",
        price: "103.570",
        description: "Como conseguir: Na Loja de novos da Honda.",
    },
    {
        id: "Honda_20",
        name: "Honda NSX Type S Zero '97",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903515280379975/Honda_NSX_Type_S_97.png?ex=662dbc95&is=661b4795&hm=69c3e070fafa2b58b54d6e33befcf17ee88ad552c047b866fb5a30fe429d989e&",
        hp: "280",
        type: "MR",
        price: "98.570",
        description: "Como conseguir: Na Loja de novos da Honda.",
    },
    {
        id: "Honda_21",
        name: "Honda NSX-R GT1 Turbo '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903515661799465/Honda_NSX_Type_S_Zero_97.png?ex=662dbc96&is=661b4796&hm=913b70412b8daa82e5c2940e5aefc8390b00e4ed8b6dbd919f9cea6003e8c549&",
        hp: "635",
        type: "MR",
        price: "50.000.000",
        description: "Como conseguir: Na seção especial da Honda. *Só disponível na versão japonesa.",
    },
    {
        id: "Honda_22",
        name: "Honda NSX-R LM GT2 Turbo '95",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903539863191593/Honda_NSX-R_LM_GT2_95.png?ex=662dbc9b&is=661b479b&hm=b07eb3576fbc712474017a93f8e7ea379e768cc933eb54e3a493a90ded2304dd&",
        hp: "549",
        type: "MR",
        price: "500.000",
        description: "Como conseguir: Na loja de novos da Honda.",
    },
    {
        id: "Honda_23",
        name: "Honda Prelude Si '91",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903540206862366/Honda_PRELUDE_Si_91.png?ex=662dbc9b&is=661b479b&hm=8fa0a8c767534e753e845dad4033cba90f2ba5190f7083db57d8098353d085bb&",
        hp: "155",
        type: "FF",
        price: "8.400",
        description: "Como conseguir: Na loja de novos da Honda.",
    },
    {
        id: "Honda_24",
        name: "Honda Prelude Si VTEC '91",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903540534022184/Honda_PRELUDE_Si_VTEC_91.png?ex=662dbc9b&is=661b479b&hm=1a930931b6c973c5f769a800e8817f5392f978ea7fa993e2ad97a6c52aa445c4&",
        hp: "200",
        type: "FF",
        price: "11.000",
        description: "Como conseguir: Na loja de novos da Honda.",
    },
    {
        id: "Honda_25",
        name: "Honda Prelude SiR '96",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903540832075847/Honda_PRELUDE_SiR_96.png?ex=662dbc9c&is=661b479c&hm=38482f1c2df6cc33272c31295552c924b3cd54c0f3e91430fb1f153da4e5ded4&",
        hp: "192",
        type: "FF",
        price: "18.830",
        description: "Como conseguir: Na loja de novos da Honda.",
    },
    {
        id: "Honda_26",
        name: "Honda Prelude Type S '96",
        imageUrl: "https://cdn.discordapp.com/attachments/640205523123437569/1228903541175746750/Honda_PRELUDE_Type_S_96.png?ex=662dbc9c&is=661b479c&hm=fd527ad677c7dd71f4670ecb2aaab4047c1a2d94a97de24bd8dafcab61de5f96&",
        hp: "216",
        type: "FF",
        price: "26.530",
        description: "Como conseguir: Na loja de novos da Honda.",
    },
]

const q = ref('');

const filteredCars = computed(() => {
    return cars.filter(car => car.name.toLowerCase().includes(q.value.toLowerCase()));
});

</script>

<template>
      <section class="Marcas_Tabelas">
        <h2>A Honda em Gran Turismo</h2>
            <p>A Honda é uma empresa japonesa fundada em 1948 por Soichiro Honda, um visionário que buscava criar produtos que proporcionassem alegria e liberdade às pessoas. 
            A paixão pela engenharia e a busca incessante por inovação rapidamente impulsionaram a Honda ao topo da indústria automobilística mundial.</p>
            <p>No início dos anos 90, a Honda já era uma marca consagrada, conhecida por seus carros confiáveis, eficientes e divertidos de dirigir. Essa reputação foi solidificada com o lançamento de modelos icônicos como o Honda NSX, 
            o Honda Civic Type R e o Honda Integra Type R, que conquistaram o coração dos entusiastas de carros por todo o mundo.</p>
            <p>Esses modelos lendários estão presentes no Gran Turismo, um dos jogos de simulação de corrida mais populares da história. 
            No jogo, os jogadores podem experimentar a emoção de dirigir esses carros 
            em pistas famosas do mundo todo, explorando seus limites e apreciando seu desempenho excepcional.</p>
        <h2>Os Carros</h2>

            <el-input v-model="q" placeholder="Please input" class="search" />

        <div class="carholder">
            <CarCard
                v-for="car in filteredCars"
                :id="car.id"
                :title="car.name"
                :imageUrl="car.imageUrl"
                :hp="car.hp"
                :type="car.type"
                :price="car.price"
                :description="car.description"
            />
        </div>
    </section>
</template>


<style scoped>
.carholder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
    padding: 16px;
}
.search {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 16px;
}
</style>
