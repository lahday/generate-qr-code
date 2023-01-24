<template>
  <div class="bg-secondary w-400 h-2/3 m-auto border-2 round-md border-primary fixed top-0 right-2 inset-0 flex justify-center flex-col">
    <div> 
      <!-- <p class="float-right px-5 font-semibold text-2xl">X</p> -->
      <font-awesome-icon icon="fa-sharp fa-solid fa-xmark" class="float-right" />
      <img :src="`https://qrtag.net/api/qr_4.png?url=${QrValue}`" alt="qrtag" class="m-auto w-2/3 pt-6 px-2 pb-3">
    </div>
    <div class="flex justify-evenly"> 
      <p class="text-justify">Download</p>
      <p>Share </p>
         </div>
   
  </div>
</template>

<script>
export default {
  props: ['QrValue']
}
</script>

<scope>

</scope>