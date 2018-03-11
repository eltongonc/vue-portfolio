<template>
  <header class="header">
      <div class="header__inner">
          <router-link to="/"><h1>Elton Gonçalves Gomes <small>Frontend Developer</small></h1></router-link>
          <nav class="header__nav">
              <ul>
                  <li><router-link to="/#app" v-on:click.native="scrollTo" :class="[ this.$route.path.match('/_')? 'nav--active': '']" active-class="nav--active">About</router-link></li>
                  <li><router-link to="/#skills" v-on:click.native="scrollTo" active-class="nav--active">Skills</router-link></li>
                  <li><router-link to="/#portfolio" v-on:click.native="scrollTo" active-class="nav--active">Portfolio</router-link></li>
                  <li class="mobile_only"><a v-on:click="toggleMenu" href="#navigation">Menu</a></li>
              </ul>
          </nav>
          <nav ref="nav" class="header__nav--aside">
              <ul>
                  <li><router-link to="/"  v-if="!this.$route.path.match('/')">Home</router-link></li>
                  <li><router-link to="/#app" v-on:click.native="scrollTo" :class="[ this.$route.path.match('/_')? 'nav--active': '']" active-class="nav--active">About</router-link></li>
                  <li><router-link to="/#skills" v-on:click.native="scrollTo" active-class="nav--active">Skills</router-link></li>
                  <li><router-link to="/#portfolio" v-on:click.native="scrollTo" active-class="nav--active">Portfolio</router-link></li>
                  <li class="mobile_only"><a v-on:click="toggleMenu" href="#navigation">Close</a></li>
              </ul>
          </nav>
      </div>
  </header>
</template>

<script>
import { TweenLite as tl, } from 'gsap';
import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';

export default {
    name: 'vueHeader',
    methods: {
        addHiddenClass() {
            return (window.innerWidth / 16) > 50 ? "hidden" : "";
        },
        toggleMenu(e) {
            e.preventDefault();
            const menu = this.$refs.nav;
            menu.classList.toggle('nav--open');
        },

        handleScroll(event) {
            const header = document.querySelector('header');
            const offset = header.clientHeight - 10;

            if (window.pageYOffset < offset && header.classList.contains('header--filled')) {
                header.classList.remove('header--filled');
            } else if(!header.classList.contains('header--filled')) {
                header.classList.add('header--filled');
            }
        },
        scrollTo(e) {
            e.preventDefault();

            const menu = this.$refs.nav;
            menu.classList.remove('nav--open');

            const el = document.querySelector(e.target.hash)
            let yPos = el.offsetTop - el.scrollTop + el.clientTop;
            const target = el.getBoundingClientRect();

            window.setTimeout(()=>{
                tl.to(window, 1, {
                    scrollTo: yPos,
                });
            },100)
        }
    },
    mounted() {
        const header = document.querySelector('header');
        if (window.location.pathname !== "/") {
            header.classList.add('header--filled');
        }
    },
    updated() {
        const menu = this.$refs.nav;
        menu.classList.remove('nav--open');
    },
    created() {
        if (window.location.pathname === "/") {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    $grid-large: 80rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;

    .header {
        top: 0;
        background-color: transparent;
        color: white;
        position: fixed;
        width: 100%;
        transition: .3s;
        z-index: 9;
        a {
            text-decoration: none;
        }
        .header__inner {
            max-width: $grid-large;
            margin: 0 auto;
            display: flex;
            padding: 0.5rem 1rem;
            h1 {
                color: $green;
                font-size: 1.2rem;
                text-transform: uppercase;
                font-weight: bold;
                text-align: left;
                small {
                    font-size: 1rem;
                    color: #aaa;
                }
            }
            .header__nav {
                width: 100%;
                height: inherit;
                display: flex;
                ul {
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    li {
                        margin: 1rem;
                        a {
                            display: block;
                            padding: 0.5rem 1rem;
                            text-decoration: none;
                            color: #aaa;
                            font-weight: bold;
                            text-transform: uppercase;
                            font-size: .8rem;
                            transition: .3s;
                            &:hover,
                            &.nav--active {
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
                transition: .3s;
                opacity: 0;
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
                            &.nav--active {
                                color: $green;
                            }
                        }
                        &.mobile_only {
                            position: absolute;
                            top: 1rem;
                            right: 1rem;
                            a {
                                font-size: 1rem;
                                text-transform:capitalize;
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
                .header__nav {
                    ul {
                        li {
                            display: none;
                            &.mobile_only {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
