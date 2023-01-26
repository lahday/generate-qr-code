<template>
  <div @click="closeModal"
  class="bg-secondary w-300 h-1/2 md:w-400 md:h-2/3 m-auto border-0 md:border-2 round-md border-secondary md:border-primary fixed top-0 right-2 inset-0 flex justify-center flex-col">
    <div> 
      <!-- <p class="float-right px-5 font-semibold text-2xl">X</p> -->
      <font-awesome-icon icon="fa-sharp fa-solid fa-xmark" class="float-right" />
      <img :src="`https://qrtag.net/api/qr_4.png?url=${QrValue}`" alt="qrtag" class="m-auto w-1/2 md:w-2/3 pt-6 px-2 pb-3">
    </div>
    <div class="flex justify-evenly"> 
      <button class="px-3 py-2 rounded-md mr-2">Download</button>
      <button class="px-3 py-3 rounded">Share </button>
         </div>
   
  </div>
</template>

<script>
export default {
  props: ['QrValue'],
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<scope>

</scope>