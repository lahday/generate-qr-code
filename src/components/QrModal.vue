<template>
  <div
    @click="closeModal"
    class="bg-secondary w-300 h-1/2 md:w-400 md:h-2/3 m-auto border-0 md:border-2 round-md border-secondary md:border-primary fixed top-0 right-2 inset-0 flex justify-center flex-col"
  >
    <div>
      <img
        :src="`https://qrtag.net/api/qr_4.png?url=${QrValue}`"
        alt="qrcode"
        class="m-auto w-1/2 md:w-2/3 pt-6 px-2 pb-3"
      />
    </div>
    <div class="flex justify-evenly">
      <a
        :href="`https://qrtag.net/api/qr_4.png?url=${QrValue}`"
        target="_blank"
        class="px-3 py-2 rounded-md mr-2"
        @click="downloadLink"
        >Download</a
      >
      <a
        :href="`https://qrtag.net/api/qr_4.png?url=${QrValue}`"
        target="_blank"
        @click="shareBlobToClipboard"
        class="px-3 py-3 rounded"
        >Share</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "QrModal",
  props: ["QrValue"],

  mounted() {},
  methods: {
    closeModal() {
      this.$emit("close");
    },

    shareBlobToClipboardFirefox(href) {
      const img = document.createElement("img");
      img.src = href;
      const div = document.createElement("div");
      div.contentEditable = true;
      div.appendChild(img);
      document.body.appendChild(div);
      selectText(div);
      const done = document.execCommand("Copy");
      document.body.removeChild(div);
      return done;
    },
    shareBlobToClipboard(blob) {
      // eslint-disable-next-line no-undef
      const clipboardItemInput = new ClipboardItem({
        "image/png": blob,
      });
      return navigator.clipboard
        .write([clipboardItemInput])
        .then(() => true)
        .catch(() => false);
    },
    downloadLink(name, href) {
      const a = document.createElement("a");
      a.download = name;
      a.href = href;
      document.body.append();
      a.click();
      a.remove();
    },
  },
};
</script>

<scope>

</scope>
