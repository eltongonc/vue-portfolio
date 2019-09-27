<template>
  <header class="header" :class="{'header--filled': headerFilled}">
      <div class="header__inner container">

          <a href="" v-scroll-to="{el: '.poster'}" class="header__logo" to="/">
            <img src="../../assets/images/logo-white.png"/>
          </a>
          
          <nav class="header__nav">
              <ul class="nav__inner">
                  <li class="nav__item">
                    <a href="#about" v-scroll-to="{el: '#about', offset: -50}" active-class="nav--active">About me</a>
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
                  <li class="nav__item mobile_only">
                    <a v-on:click="toggleMenu" href="#navigation">Menu</a>
                  </li>
              </ul>
          </nav>

          <nav :class="['header__nav--aside', mobileNavOpen? 'nav--open': '']">
            <ul>
              <li class="nav__item">
                <a v-on:click="closeMenu" href="#about" v-scroll-to="{el: '#about', offset: -50}" active-class="nav--active">About</a>
              </li>
              <li class="nav__item">
                <a v-on:click="closeMenu" href="#skills" v-scroll-to="{el: '#skills', offset: -50}" active-class="nav--active">Skills</a>
              </li>
              <li class="nav__item">
                <a v-on:click="closeMenu" href="#portfolio" v-scroll-to="{el: '#portfolio', offset: -50}" active-class="nav--active">Portfolio</a>
              </li>
              <li class="nav__item">
                <a v-on:click="closeMenu" href="#contact" v-scroll-to="{el: '#contact', offset: -50}" active-class="nav--active">Contact</a>
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
      headerFilled: false,
      mobileNavOpen: false,
    }
  },
  methods: {
    toggleMenu(e) {
      e.preventDefault();
      this.mobileNavOpen = !this.mobileNavOpen;
    },

    closeMenu() {
      this.mobileNavOpen = false;
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