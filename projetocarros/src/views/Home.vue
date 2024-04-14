<script setup>
  const fits = ['contain']
  const url =
    'https://upload.wikimedia.org/wikipedia/pt/4/47/Gran_Turismo_1997_capa.png'
</script>

<template>
    <section class="Inicio">
      <h2>Bem Vindos!</h2>
      <div class="demo-image">
        <div v-for="fit in fits" :key="fit" class="block">
        <el-image style="width: 400px; height: 400px" :src='url' :fit="fit" />
      </div>
  </div>
    </section>
    <main class="main">
      <h3>Sobre o Blog</h3>
      <p>
        Este site foi criado com intuito de ajudar a você a jogar o primeiro
        Gran Turismo, e arrebentar no modo simulação! Aqui você encontrará
        informações sobre os carros, pistas,torneios e também sobre como
        instalar o jogo.
      </p>
      <span>Este Site ainda está em construção!</span>
    </main>
</template>

<style scoped>
  h2 {
    text-align: center;
  }

  p {
    margin-left:2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  span{
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(209, 19, 19);
    margin-left:2.6rem;
  }
.demo-image .block {
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 100%;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}

</style>