<template>
  <header class="header"  :class="{'header--filled': headerFilled}">
      <div class="header__inner">
          <!-- Logo -->
          <router-link class="header__logo" to="/">
            <img src="../../assets/images/logo-white.png"/>
          </router-link>
          
          <!-- Desktop nav -->
          <nav class="header__nav">
              <ul class="nav__inner">
                  <li class="nav__item">
                    <router-link to="/about" active-class="nav--active">About</router-link>
                  </li>
                  <li class="nav__item">
                    <router-link to="/portfolio" active-class="nav--active">Portfolio</router-link>
                  </li>
                  <li class="nav__item">
                    <router-link to="/contact" active-class="nav--active">Contact</router-link>
                  </li>
                  <li class="nav__item mobile_only">
                    <a v-on:click="toggleMenu" href="#navigation">Menu</a>
                  </li>
              </ul>
          </nav>

          <!-- Mobile overlay nav -->
          <nav :class="['header__nav--aside', mobileNavOpen? 'nav--open': '']">
            <ul>
              <li>
                <router-link to="/" active-class="nav--active">Home</router-link>
              </li>
                <li>
                  <router-link to="/about" active-class="nav--active">About</router-link>
              </li>
              <li>
                <router-link to="/portfolio" active-class="nav--active">Portfolio</router-link>
              </li>
              <li class="mobile_only">
                <a v-on:click="toggleMenu" href="#navigation">Close</a>
              </li>
            </ul>
          </nav>

      </div>
  </header>
</template>

<script>
export default {
  name: "vueHeader",
  data() {
    return {
      scrollId: null,
      headerFilled: this.$route.name == 'About' || this.$route.name == 'DetailPage',
      mobileNavOpen: false,
    }
  },
  methods: {
    toggleMenu(e) {
      e.preventDefault();
      this.mobileNavOpen = !this.mobileNavOpen;
    },

    updateHeader() {
      const header = document.querySelector("header");
      const offset = header.clientHeight - 50;

      if (this.$route.name === "Home" || this.$route.name === "Portfolio" || this.$route.name === 'PageNotFound' ) {
        if (window.pageYOffset <= offset) {
          header.classList.remove("header--filled");
        } else {
          this.headerFilled = true;
        }
      } else {
        header.classList.add("header--filled");
      }
    },

    handleScroll() {
      const header = document.querySelector("header");
      const offset = header.clientHeight - 50;

      console.log(window.pageYOffset <= offset);
      
      if (window.pageYOffset <= offset) {
        this.headerFilled = false;
      } else {
        this.headerFilled = true;
      }

      // add a filled background on pages that don't have a picture background
      if (this.$route.name == "Home" || this.$route.name == "Portfolio" || this.$route.name == 'PageNotFound' ) {
        this.scrollId = window.addEventListener("scroll", () => {
          if (window.pageYOffset <= offset) {
            this.headerFilled = false;
          } else {
            this.headerFilled = true;
          }
        });
      } else {
        header.classList.add("header--filled");
        window.removeEventListener("scroll", this.scrollId);
      }
    },
  },

  watch: {
    $route(to, from) {
      this.mobileNavOpen = false;
      this.updateHeader();
    }
  },

  mounted() {
    this.handleScroll();
  },
};
</script>