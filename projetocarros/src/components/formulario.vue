<script setup>
import { ref, onMounted } from 'vue'
import Api from '../services/api'
import Chart from 'chart.js/auto';
const input = ref('')
const marca = ref('')
const carro = ref([])
const pista = ref('')
const value = ref('')
const labelsMarca = ref([])
const labelsCarro = ref([])
const labelsPista = ref([])
const formularios = ref([])
const showCanvas = ref(true)

onMounted(async () => {
  await fetchChart()
  bindChart()
})
async function fetchChart(){
  formularios.value = await new Api().getFormularios()
  labelsMarca.value = formularios.value.map((formulario) => formulario.marca).filter((value, index, self) => self.indexOf(value) === index)
  labelsCarro.value = formularios.value.map((formulario) => formulario.carro).filter((value, index, self) => self.indexOf(value) === index)
  labelsPista.value = formularios.value.map((formulario) => formulario.pista).filter((value, index, self) => self.indexOf(value) === index)
}

function bindChart(){
  const ctx = document.getElementById('chartMarca');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labelsMarca.value,
          datasets:[
            {
              label: 'Marca',
              data: labelsMarca.value.map(label => {
                return formularios.value.filter(formulario => formulario.marca === label).length
              }),
            }
          ]
        },
    });
    const ctx2 = document.getElementById('chartCarro');
    const myChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
          labels: labelsCarro.value,
          datasets:[
            {
              label: 'Carro',
              data: labelsCarro.value.map(label => {
                return formularios.value.filter(formulario => formulario.carro === label).length
              }),
            }
          ]
        },
    });
    const ctx3 = document.getElementById('chartPista');
    const myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
          labels: labelsPista.value,
          datasets:[
            {
              label: 'Pista',
              data: labelsPista.value.map(label => {
                return formularios.value.filter(formulario => formulario.pista === label).length
              }),
            }
          ]
        },
    });
}

async function submit(){
  if (marca.value === "" || carro.value[1] === "" || pista.value === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
  const api = new Api();
  await api.postFormulario({
    marca: marca.value,
    carro: carro.value[1],
    pista: pista.value
  })
  await fetchChart()
  location.reload()
}
const pistas = [
  {
    value: 'Autumn Ring'
  },
  {
    value: 'Clubman Stage Route 5'
  },
  {
    value: 'Deep Forest Raceway'
  }
]
const options = [
  { 
    value: 'Acura',
    label: 'Acura',
    children: [
      {
        value: 'Acura INTEGRA GS-R',
        label: 'Acura INTEGRA Type-R'
      },
      {
        value: 'Acura INTEGRA Type-R',
        label: 'Acura INTEGRA Type-R'
      },
      {
        value: 'Acura NSX',
        label: 'Acura NSX'
      }
    ]
  },
  {
    value: 'Aston Martin',
    label: 'Aston Martin',
    children: [
      {
        value: 'Aston Martin DB7 Coupe',
        label: 'Aston Martin DB7 Coupe'
      },
      {
        value: 'Aston Martin DB7 Volante',
        label: 'Aston Martin DB7 Volante'
      }
    ]
  },
  {
    value: 'Chevrolet',
    label: 'Chevrolet',
    children: [
      {
        value: 'Chevrolet 96 Corvette COUPE',
        label: 'Chevrolet 96 Corvette COUPE'
      },
      {
        value: 'Chevrolet 96 Corvette GRAND SPORT',
        label: 'Chevrolet 96 Corvette GRAND SPORT'
      },
      {
        value: 'Chevrolet Camaro Z28',
        label: 'Chevrolet Camaro Z28'
      }
    ]
  },
  {
    value: 'Dodge',
    label: 'Dodge',
    children: [
      {
        value: 'Dodge Concept Car',
        label: 'Dodge Concept Car'
      },
      {
        value: 'Dodge Concept Car LM Edition',
        label: 'Dodge Concept Car LM Edition'
      },
      {
        value: 'Dodge Viper GTS 96',
        label: 'Dodge Viper GTS 96'
      }
    ]
  },
  {
    value: 'Honda',
    label: 'Honda',
    children: [
      {
        value: 'Honda ACCORD SEDAN SiR',
        label: 'Honda ACCORD SEDAN SiR'
      },
      {
        value: 'Honda ACCORD WAGON SiR',
        label: 'Honda ACCORD WAGON SiR'
      },
      {
        value: 'Honda NSX',
        label: 'Honda NSX'
      }
    ]
  },{
    value: 'Mazda',
    label: 'Mazda',
    children: [
      {
        value: 'Mazda DEMIO A spec',
        label: 'Mazda DEMIO A spec'
      },
      {
        value: 'Mazda EUNOS COSMO 13BTYPE-SCCS',
        label: 'Mazda EUNOS COSMO 13BTYPE-SCCS'
      },
      {
        value: 'Mazda FD EFINI RX-7 Type R',
        label: 'Mazda FD EFINI RX-7 Type R'
      }
    ]
  },{
    value: 'Toyota',
    label: 'Toyota',
    children: [
      {
        value: 'Toyota AE86 COROLLA LEVIN GT-APEX',
        label: 'Toyota AE86 COROLLA LEVIN GT-APEX'
      },
      {
        value: 'Toyota MR2 G-Limited',
        label: 'Toyota MR2 G-Limited'
      },
      {
        value: 'Toyota SUPRA 95 RZ',
        label: 'Toyota SUPRA 95 RZ'
      }
    ]
  }
]

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="formTitle">Pesquisa de preferências dos usuários</h1>
  <div class="form">
    <div class="input">
      <span class="label">Marca</span>
      <el-select v-model="marca" style="flex-grow: 1" placeholder="Please input">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="input">
      <span class="label">Carro</span>
      <el-cascader v-model="carro" :options="options" style="flex-grow: 1" placeholder="Please input" />
    </div>
    <div class="input">
      <span class="label">Pista</span> 
      <el-select v-model="pista" style="flex-grow: 1" placeholder="Please input">
        <el-option
          v-for="item in pistas"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-button class="benviar" type="primary" @click="submit()">Enviar</el-button>
  </div>
  <div class="allcanvas">
    <div class="canvas-marca">
      <span>Marcas</span>
      <canvas id='chartMarca' v-if="showCanvas" width="400" height="400"></canvas>
    </div>
    <div class="canvas-carro">
      <span>Modelos</span>
      <canvas id="chartCarro" v-if="showCanvas" width="400" height="400"></canvas>
    </div>
    <div class="canvas-pista">
      <span>Pistas</span>
      <canvas id="chartPista" v-if="showCanvas" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.form {
  max-width: 700px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 32px;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
}
.input{
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.label{
  min-width: 100px;
  text-align: left;
}
.benviar{
  width: 100%;
  margin-top: 16px;
}
.canvas-marca, .canvas-carro, .canvas-pista{
  width: 350px;
}

.allcanvas{
  display: flex;
  justify-content: space-between;
  margin: 32px 48px;
}

.allcanvas span{
  display: block;
  text-align: center;
  margin-bottom: 8px;
}


</style>
