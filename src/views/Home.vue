<template>
  <section class="h-screen w-full">
    <!-- backgroung image and url secttion -->
    <div class="bg-img h-screen w-full" :class="{ makeGray: isNotActive }">
      <div
        class="bg-no-repeat h-screen w-full"
        :style="{
          'background-image': `url(${landingImg})`,
          'background-size': 'cover',
        }"
      >
        <div class="text-secondary pt-10 px-8">
          <p class="text-5xl py-5 font-bold mt-3">Generate Qr Code</p>
          <p class="md:w-1/3 py-5">
            Get a Qr code in two minutes,Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. deserunt delectus optio, test out for free.
          </p>
          <form @submit.prevent data-test="form">
            <input
              type="url"
              v-model="QrValue"
              placeholder="Enter your url"
              ref="url"
              data-test="Qrvalue"
              class="border-2 mt-5 px-2 py-2 rounded-lg md:w-1/3 outline-none text-black"
              @input="checkInput"
            />
            <p v-if="err" class="text-red-400 text-xs">{{ err }}</p>
            <div>
              <button
                type="submit"
                :disabled="disabledButton"
                @click="handleQrModal"
                class="bg-primary text-secondary mt-5 px-10 py-3 text-center rounded-md font-semibold"
              >
                Generate Qr Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <QrModal @close="handleQrModal" />
    </div>
  </section>
</template>

<script>
import QrModal from "@/components/QrModal";
import landingImg from "@/assets/images/qr-landing.svg";
import { mapMutations, mapState } from "vuex";
// import axios from  axios

export default {
  components: {
    QrModal,
  },
  data() {
    return {
      landingImg,
      QrValue: "",
      showModal: false,
      isNotActive: false,
      err: "",
    };
  },
  computed: {
    ...mapState(["disabledButton"]),
  },
  // mounted() {
  //   axios
  //     .get("https://qrtag.net/api/qr_4.png?url=${QrValue}")
  //     .then((response) => (this.QrValue = response));
  // },
  methods: {
    ...mapMutations(["getQrCode"]),
    checkInput() {
      const regex =
        /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g;
      if (!regex.test(this.QrValue)) {
        this.err = "Please input a url ";
      } else {
        this.err = "";
      }
    },
    handleQrModal() {
      this.showModal = !this.showModal;
      this.isNotActive = !this.isNotActive;
      this.getQrCode(this.QrValue);
      this.QrValue = "";

      if (this.QrValue) {
        fetch("https://qrtag.net/api/qr_4.png?url=${QrValue}")
          .then((response) => response.json())
          .then((data) => {
            this.QrValue = data;
          });
      }
    },
  },
};
</script>

<style scoped>
.makeGray {
  background: gray !important;
  opacity: 0.3;
}
</style>
