<script setup>

const props = defineProps({
  title: String,
  imageUrl: String,
  hp: String,
  type: String,
  price: String,
  description: String
})

function getPercentage(value) {
    return Number(value) / 700 * 100
}
function getDuration(value) {
    return 700 / Number(value) * 0.5 
}
</script>

<template>
  <div class="car-card" id="Honda_1">
      <h3> {{ title }} </h3>
      <img :src="imageUrl">
      <div class="car-header">
          <el-progress
              :percentage="getPercentage(hp)"
              :stroke-width="15"
              status="success"
              striped
              striped-flow
              :duration="getDuration(hp)"
          />
          <p>HP: {{ hp }}</p>
          <p>Tipo: {{ type }}</p>
          <p>Preço: {{ price }}</p>
      </div>
      <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.car-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    background: #fefefe;
}

.car-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.car-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10px;
    padding: 8px;
    gap: 5px;
}

.car-card h3 {
    font-size: 24px;
    font-weight: bold;
}

.description {
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px;
}
</style>