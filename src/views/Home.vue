<template>
  <section class="h-screen w-full">
    <!-- backgroung image and url secttion -->
    <div class="bg-img h-screen w-full">
      <div 
      class="bg-no-repeat h-screen w-full"
      :style="{
        'background-image' : `url(${landingImg})`,
        'background-size' : 'cover'
      }"
      > 
      <div class="text-secondary pt-10 px-8"> 
      <p class="text-5xl py-5 font-bold mt-3">Generate Qr Code</p>
        <p class="md:w-1/3 py-5">Get a Qr code in two minutes,Lorem ipsum dolor sit amet, consectetur adipisicing elit.  deserunt delectus optio, test out for free.</p>
        <form @submit.prevent>
          <input type="url" 
          v-model="QrValue"
          placeholder="Enter your url" 
          ref="url"
          required
          class="border-2 mt-5 px-2 py-2 rounded-lg md:w-1/3 outline-none text-black">
          <div>
            <button :disabled="disabledButton"
            @click="handleGenerateQr" class="bg-primary  text-secondary mt-5 px-10 py-3 text-center rounded-md  font-semibold"> Generate Qr Code </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  
    <div v-if="GenerateQr">
      <QrModal />
    </div>
  </section>
</template>

<script>
 import QrModal from '@/components/QrModal'
 import landingImg from '@/assets/images/qr-landing.svg'
import { mapMutations, mapState } from 'vuex'


export default {
  components :{
    QrModal
  },
  data () {
    return {
      landingImg,
      QrValue: '',
      GenerateQr: false,
    }
  },
  computed: {
    ...mapState(['disabledButton'])
  },
  methods: {
    ...mapMutations(['getQrCode']),
    handleGenerateQr () {
        if (this.QrValue) {
          fetch('https://qrtag.net/api/qr_4.png?url=${QrValue}')
          .then((response)=> response.json())
          .then((data) => {
            this.QrValue=data
          })
      }
      this.GenerateQr = !this.GenerateQr
      this.getQrCode(this.QrValue)
    }
  }
}
</script>

<style scoped>
/* .bg-img {
  background: url("@/assets/images/qr-landing.svg");
} */
/* @media screen and (max-width) {
  .bg-text {
    display: hidden;
  }
} */
</style>