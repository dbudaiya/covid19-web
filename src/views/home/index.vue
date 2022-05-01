<template>
  <Header />
  <CaseInfo />
  <CaseNum />
  <CaseMap />
  <CaseSwiper />
  <SpringTravel />
  {{ data_modifytime }}
</template>

<script setup lang="ts">
import Header from './Header.vue'
import CaseInfo from './CaseInfo.vue'
import CaseNum from './CaseNum.vue'
import CaseMap from './CaseMap.vue'
import CaseSwiper from './CaseSwiper.vue'
import SpringTravel from './SpringTravel.vue'
import { onMounted, reactive, ref } from 'vue'
import api from '../../api'
const data_modifytime = ref(0)
onMounted(() => {
  const { getCaseNum } = api;
  getCaseNum({
    key: '99a7d7eb3f723f31812ba4ccdf646da6'
  }).then(res => {
    const data = res.data.newslist[0]
    data_modifytime.value = data.desc.modifyTime;
    console.log(data)
  }).catch(err => {
    throw err;
  })
})


</script>

