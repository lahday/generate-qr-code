<template>
  <div v-if="QrList.length < 1" class="bg-secondary w-full h-full">
      <p class=" text-center p-10">You have not Generated any Qr Code</p>
      <img :src="require('../assets/images/modal-img.png')" class="fixed md:inset-0 sm:h-40 m-auto w-40" >
  </div>
  <div v-else class="bg-secondary w-full">
    <div v-for="(QrValue,index) in QrList" :key="index" class="grid grid-col-3 w-full">
      {{ QrValue }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
computed: {
  ...mapGetters(['QrList'])
}
}
</script>

<style scoped>

</style>