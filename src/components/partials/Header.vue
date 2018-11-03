<template>
  <header :class="['header', headerFilled || $route.name == ('About' || 'DetailPage') ? 'header--filled': '']">
      <div class="header__inner">
          <!-- Logo -->
          <router-link class="header__logo" to="/">
            <h1 class="logo__title">Elton Gonçalves Gomes <small class="logo__subtitle">Frontend Developer</small></h1>
          </router-link>

          <!-- Desktop nav -->
          <nav class="header__nav">
              <ul class="nav__inner">
                  <li class="nav__item"><router-link to="/" active-class="nav--active">Home</router-link></li>
                  <li class="nav__item"><router-link to="/about" active-class="nav--active">About</router-link></li>
                  <li class="nav__item"><router-link to="/portfolio" active-class="nav--active">Portfolio</router-link></li>
                  <li class="nav__item mobile_only"><a v-on:click="toggleMenu" href="#navigation">Menu</a></li>
              </ul>
          </nav>

          <!-- Mobile overlay nav -->
          <nav :class="['header__nav--aside', mobileNavOpen? 'nav--open': '']">
              <ul>
                  <li><router-link to="/" active-class="nav--active">Home</router-link></li>
                   <li><router-link to="/about" active-class="nav--active">About</router-link></li>
                  <li><router-link to="/portfolio" active-class="nav--active">Portfolio</router-link></li>
                  <li class="mobile_only"><a v-on:click="toggleMenu" href="#navigation">Close</a></li>
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

    handleScroll() {
      const header = document.querySelector("header");
      const offset = header.clientHeight - 50;

      // add a filled background on pages that don't have a picture background
      if (this.$route.name == "Home" || this.$route.name == "Work" || this.$route.name == 'PageNotFound' ) {
        this.scrollId = window.addEventListener("scroll", () => {
          if (window.pageYOffset < offset) {
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
      this.handleScroll();
    }
  },

  mounted() {
    this.handleScroll();
  },
};
</script>

<style lang="scss" scoped>
$grid-large: 80rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;

.header {
  top: 0;
  background-color: transparent;
  color: white;
  position: fixed;
  width: 100%;
  transition: 0.3s;
  z-index: 9;
  .header__inner {
    max-width: $grid-large;
    margin: 0 auto;
    display: flex;
    padding: 0.5rem 1rem;
    .header__logo {
      .logo__title {
        color: $green;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        text-align: left;
        .logo__subtitle {
          font-size: 1rem;
          color: #aaa;
        }
      }
    }
    .header__nav {
      width: 100%;
      height: inherit;
      display: flex;
      .nav__inner {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        .nav__item {
          margin: 1rem;
          a {
            display: block;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: #aaa;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.8rem;
            transition: 0.3s;
            &:hover,
            &.router-link-exact-active.nav--active {
              color: $green;
            }
          }
          &.mobile_only {
            display: none;
          }
        }
      }
    }
    .header__nav--aside {
      position: absolute;
      top: 0;
      background: rgba($dark_grey, 0.95);
      width: 0%;
      padding: 0;
      margin: 0;
      right: 0;
      display: inline-block;
      height: 100vh;
      transition: 0.3s;
      opacity: 0;
      overflow: hidden;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        position: relative;

        li {
          a {
            color: white;
            font-size: 2rem;
            text-transform: uppercase;
            &:hover,
            &.router-link-exact-active.nav--active {
              color: $green;
            }
          }
          &.mobile_only {
            position: absolute;
            top: 1.3rem;
            right: 2rem;
            a {
              font-size: 1rem;
              text-transform: capitalize;
            }
          }
        }
      }
      &.nav--open {
        opacity: 1;
        height: 100vh;
        width: 100%;
      }
    }
  }
  &.header--filled {
    background-color: $dark_grey;
    box-shadow: 0 0 2em #333;
  }
  @media (max-width: 50rem) {
    .header__inner {
      padding: 0.8rem 1rem;
      align-items: center;
      .header__logo {
        width: 75%;
        .logo__title {
          font-size: .9rem;
          margin: 0;
          .logo__subtitle {
            font-size: .9rem;
          }
        }
      }
      .header__nav {
        width: 25%;
        .nav__inner {
          .nav__item {
            display: none;
            &.mobile_only {
              margin: 0;
              display: block;
            }
          }
        }
      }
      .header__nav--aside {
        ul {
          padding: 0;
          li {
            line-height: 300%;
          }
        }
      }
    }
  }
}
</style>
