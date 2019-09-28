<template>
  <header class="header" :class="{'header--filled': headerFilled}">
      <div class="header__inner container">

          <router-link to="/" class="header__logo">
            <img src="../../assets/images/logo-white.png"/>
          </router-link>
          
          <nav class="header__nav">
              <ul class="nav__inner">

                  <li v-for="(item, i) in menuItems" :key="i" class="nav__item">
                    <a :href="'#'+item.url" v-if="$route.name == 'Home'" v-scroll-to="{el: '#'+item.url, offset: -50}" active-class="nav--active">{{item.title}}</a>
                    <router-link v-else :to="'/'+item.url" active-class="nav--active">{{item.title}}</router-link>
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
                <a v-on:click="closeMenu" href="#portfolio" v-scroll-to="{el: '#portfolio', offset: -50}" active-class="nav--active">Projects</a>
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
      menuItems: [
        { title: 'About', url: 'about'},
        { title: 'Skills', url: 'skills'},
        { title: 'Portfolio', url: 'portfolio'},
        { title: 'Contact', url: 'contact'},
      ]
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
      window.removeEventListener("scroll", this.scrollId, false);

      if(this.$route.name == 'DetailPage') {
        this.headerFilled = true;
      } else {
        this.handleScroll();
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


      if(this.$route.name == 'DetailPage') {
        this.headerFilled = true;
      } else {
        // add a filled background on pages that don't have a picture background
          this.scrollId = () => {
            if (window.pageYOffset <= offset) {
              this.headerFilled = false;
            } else {
              this.headerFilled = true;
            }
          }

          window.addEventListener("scroll", this.scrollId, false);
      }
    },
  },

  watch: {
    $route(to, from) {
      this.mobileNavOpen = false;
      this.updateHeader();

      window.scrollTo(0,0);
    }
  },

  mounted() {
    this.handleScroll();
  },
};
</script>