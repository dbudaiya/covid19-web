<template>
  <div id="maskinfo-warpper">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
const TitleProps = defineProps({
  title: String,
})

const { title } = toRefs(TitleProps)
</script>

<style scoped lang="less">
#maskinfo-warpper {
  padding: 0.13rem 0.18rem;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;

  .title {
    font-size: 0.25rem;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 20px;
      background-color: #4169e2;
      margin-right: 10px;
    }
  }
}
</style>
