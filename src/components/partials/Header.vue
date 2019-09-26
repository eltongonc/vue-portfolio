<template>
  <header class="header" :class="{'header--filled': headerFilled}">
      <div class="header__inner container">

          <router-link class="header__logo" to="/">
            <img src="../../assets/images/logo-white.png"/>
          </router-link>
          
          <nav class="header__nav">
              <ul class="nav__inner">
                  <li class="nav__item">
                    <a href="#about" v-scroll-to="{el: '#about', offset: -50}" active-class="nav--active">About</a>
                  </li>
                  <li class="nav__item">
                    <a href="#services" v-scroll-to="{el: '#services', offset: -50}" active-class="nav--active">Services</a>
                  </li>
                  <li class="nav__item">
                    <a href="#skills" v-scroll-to="{el: '#skills', offset: -50}" active-class="nav--active">Skills</a>
                  </li>
                  <li class="nav__item">
                    <a href="#portfolio" v-scroll-to="{el: '#portfolio', offset: -50}" active-class="nav--active">Portfolio</a>
                  </li>
                  <li class="nav__item">
                    <a href="#contact" v-scroll-to="{el: '#contact', offset: -50}" active-class="nav--active">Contact</a>
                  </li>
                  <!-- <li class="nav__item">
                    <router-link to="/blog" active-class="nav--active">Blog</router-link>
                  </li> -->
                  <li class="nav__item mobile_only">
                    <a v-on:click="toggleMenu" href="#navigation">Menu</a>
                  </li>
              </ul>
          </nav>

          <nav :class="['header__nav--aside', mobileNavOpen? 'nav--open': '']">
            <ul>
              <li>
                <router-link to="/" active-class="nav--active">Home</router-link>
              </li>
              <!-- <li>
                <router-link to="/portfolio" active-class="nav--active">Portfolio</router-link>
              </li> -->
                <li>
                  <router-link to="/about" active-class="nav--active">About</router-link>
              </li>
              <!-- <li>
                <router-link to="/blog" active-class="nav--active">Blog</router-link>
              </li> -->
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
      headerFilled: false,
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

        if (window.pageYOffset <= offset) {
          header.classList.remove("header--filled");
        } else {
          this.headerFilled = true;
        }
    },

    handleScroll() {
      const header = document.querySelector("header");
      const offset = header.clientHeight - 50;

      if (window.pageYOffset <= offset) {
        this.headerFilled = false;
      } else {
        this.headerFilled = true;
      }

      // add a filled background on pages that don't have a picture background
        this.scrollId = window.addEventListener("scroll", () => {
          if (window.pageYOffset <= offset) {
            this.headerFilled = false;
          } else {
            this.headerFilled = true;
          }
        });
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