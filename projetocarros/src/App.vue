<script setup>
import { RouterView } from 'vue-router';
const fits = ['contain']
const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gran_Turismo_logo.png/800px-Gran_Turismo_logo.png'
</script>

<template>
  <header class="header">
      <router-link to="/">
        <div class="homeimg">
          <div v-for="fit in fits" :key="fit" class="block">
            <el-image style="width: 100px; height: 100px" :src='img' :fit="fit" />
          </div>
        </div>
      </router-link>
    </header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
      background-color="#1E1B1B"
      text-color="#fff"
      active-text-color="white"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-sub-menu index="1">
        <template #title>Marcas</template>
        <el-menu-item index="/Acura">Acura</el-menu-item>
        <el-menu-item index="2-2">Aston Martin</el-menu-item>
        <el-menu-item index="/chevrolet">Chevrolet</el-menu-item>
        <el-menu-item index="2-4">Dodge</el-menu-item>
        <el-menu-item index="/honda">Honda</el-menu-item>
        <el-menu-item index="2-6">Mazda</el-menu-item>
        <el-menu-item index="2-7">Mitsubishi</el-menu-item>
        <el-menu-item index="2-8">Nismo</el-menu-item>
        <el-menu-item index="2-9">Nissan</el-menu-item>
        <el-menu-item index="2-10">Subaru</el-menu-item>
        <el-menu-item index="2-11">Toyota</el-menu-item>
        <el-menu-item index="2-12">TRD</el-menu-item>
        <el-menu-item index="2-13">TVR</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/circuitos">Circuitos</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Licenças</template>
        <el-menu-item index="/licenseb">Licença B</el-menu-item>
        <el-menu-item index="/licensea">Licença A</el-menu-item>
        <el-menu-item index="/licenseai">Licença A Internacional</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/torneios">Torneios</el-menu-item>
      <el-menu-item index="/tutorial">Tutorial</el-menu-item>
      <el-menu-item index="/formulario">Formulário</el-menu-item>
    </el-menu>
    <RouterView/>
    <footer>
        <p>
          &lt;&lt;&lt; &copy;
          <router-link to="/copyright">
            <a @click="navigate" role="link">Copyright</a>&gt;&gt;&gt;
          </router-link>
        </p>
        <p>
          <a href="#">Back to Top</a>
        </p>
      </footer>
</template>

<style scoped>
.homeimg{
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-menu-demo {
  margin-bottom: 20px;
}
</style>
