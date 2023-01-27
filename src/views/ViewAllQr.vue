<template>
  <div v-if="QrList.length < 1" class="w-full h-full">
    <p class="text-center p-10">You have not Generated any Qr Code</p>
    <img
      :src="require('../assets/images/modal-img.png')"
      class="md:fixed md:inset-0 sm:h-40 m-auto w-40"
    />
  </div>
  <div v-else class="w-full h-full">
    <div class="flex flex-col justify-center items-center p-3">
      <p class="font-semibold text-xl py-5">
        Welcome, See below the url you have Generated, to Generate more Qrcode
        <span class="text-primary">
          <router-link to="/">Click Here</router-link>
        </span>
      </p>
      <div class="flex flex-wrap md:grid md:grid-cols-4 gap-4 mt-3">
        <div
          v-for="(QrValue, index) in QrList"
          :key="index"
          class="border-2 p-4 mt-3"
        >
          <p data-test="QrList">{{ QrValue }}</p>
          <img
            :src="`https://qrtag.net/api/qr_4.png?url=${QrValue}`"
            class="sm:h-40 m-auto w-40"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["QrValue"],
  computed: {
    ...mapGetters(["QrList"]),
  },
};
</script>
