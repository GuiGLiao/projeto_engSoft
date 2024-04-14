<script setup>
</script>

<template>
    <div class ="texto_circuito">
        <h1>Circuitos</h1>
        <div class="tracks">
            <div class="track">
                <img src = "https://cdn.staticneo.com/w/granturismo/Autumn_ring_165x168.gif" >
                <span>Autumn ring</span>
            </div>
            <div class="track">
                <img src = "https://cdn.staticneo.com/w/granturismo/Clubman_sr5.gif" >
                <span>Clubman Stage Route 5</span>
            </div>
            <div class="track">
                <img src = "https://cdn.staticneo.com/w/granturismo/Deep_forest_165x168.gif" >
                <span>Deep Forest Raceway</span>
            </div>
        </div>
    </div>
</template>


<style scoped>
    table {
        margin-left: 15px;
        background-color: white;
    }

    .track span {
        display: block;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    .track {
        flex-grow: 1;
        width: 30%;
    }

    .track img {
        flex-grow: 1;
        width: 100%; 
    }

    .tracks {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 48px;
        padding: 48px;
    }
    h1{
        text-align: center;
    }
</style>
