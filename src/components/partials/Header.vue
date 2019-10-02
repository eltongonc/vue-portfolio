<template>
  <header class="header" :class="{'header--filled': headerFilled}">
      <div class="header__inner container">

          <router-link to="/" class="header__logo">
            <img src="/static/logo-white.png"/>
          </router-link>
          
          <nav class="header__nav">
              <ul class="nav__inner">
                  <div v-for="(item, i) in menuItems" :key="i">
                    <li v-if="$route.name == 'Home'" class="nav__item">
                      <a :href="'#'+item.url" v-scroll-to="{el: '#'+item.url, offset: -50}" active-class="nav--active">{{item.title}}</a>
                    </li>
                    <li v-else-if="!item.homeOnly" class="nav__item">
                      <router-link :to="'/'+item.url" active-class="nav--active">{{item.title}}</router-link>
                    </li>
                  </div>
                 
                  <li class="nav__item mobile_only">
                    <a v-on:click="toggleMenu" href="#navigation">Menu</a>
                  </li>
              </ul>
          </nav>

          <nav :class="['header__nav--aside', mobileNavOpen? 'nav--open': '']">
            <ul>
              <div v-for="(item, i) in menuItems" :key="i">
                <li v-if="$route.name == 'Home'" class="nav__item">
                  <a :href="'#'+item.url" v-on:click="closeMenu" v-scroll-to="{el: '#'+item.url, offset: -50}" active-class="nav--active">{{item.title}}</a>
                </li>
                <li v-else-if="!item.homeOnly" class="nav__item">
                  <router-link :to="'/'+item.url" v-on:click="closeMenu" active-class="nav--active">{{item.title}}</router-link>
                </li>
              </div>

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
        { title: 'Home', url: ''},
        { title: 'About', url: 'about'},
        { title: 'Projects', url: 'projects'},
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