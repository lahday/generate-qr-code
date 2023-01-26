<template>
  <section>
    <!-- Desktop Screen & mobile screen-->
    <div class="nav-menu">
      <i class="fas fa-bars" @click="showMenu()"> </i>
      <div
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
        class="flex flex-col md:flex-row justify-between items-center px-5 bg-gray border-2 py-2 shadow-xl md:box-border nav-content"
      >
        <p class="px-5 pt-5 font-bold text-xl text-center">
          <router-link to="/"> uCreate </router-link>
        </p>
        <div class="flex flex-col md:flex-row justify-end items-center px-5">
          <div class="px-4 text-md font-semibold">
            <p>
              <router-link
                to="/"
                @click="makeCurrent('home')"
                :class="{ current: home }"
              >
                Home
              </router-link>
            </p>
          </div>
          <div class="px-4 text-md font-semibold">
            <p>About</p>
          </div>
          <div class="px-4 text-md font-semibold">
            <p>
              <router-link
                to="/viewall"
                @click="makeCurrent('viewAllQr')"
                class="view-qr"
                :class="{ current: viewAllQr }"
              >
                View All Qr
              </router-link>
            </p>
          </div>
          <div class="px-4 text-md font-semibold">
            <p>Pricing</p>
          </div>
          <div class="pl-3">
            <button
              class="text-md font-semibold border-1 bg-primary text-secondary rounded-md px-4 py-2"
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      home: true,
      viewAllQr: false,
      showMobileMenu: false,
    };
  },
  methods: {
    makeCurrent(value) {
      if (value === "home") {
        this.home = true;
        this.viewAllQr = false;
      } else if (value === "viewAllQr") {
        this.home = false;
        this.viewAllQr = true;
      }
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.current {
  cursor: pointer !important;
  color: #6f50b5 !important;
}
i {
  display: none;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    width: 100%;
    background: #f1f5f2;
  }
  .open-menu {
    opacity: 1;
    height: 200px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
