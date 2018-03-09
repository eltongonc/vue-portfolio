<template>
  <header class="header">
      <div class="header__inner">
          <h1>Elton Gonçalves Gomes <small>Frontend Developer</small></h1>
          <nav v-if="!this.$route.path.match('/work')">
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a v-on:click="toggleMenu" class="hidden" href="#navigation">Menu</a></li>
                  <!-- <li><a href="/blog">Blog</a></li> -->
              </ul>
          </nav>
      </div>
  </header>
</template>

<script>
export default {
    name: 'vueHeader',
    methods: {
        toggleMenu(e) {
            e.perventDefault();
            var menu = document.querySelector("nav ul");
        },

        handleScroll(event) {
            const header = document.querySelector('header');
            const offset = header.clientHeight - 10;

            if (window.pageYOffset < offset) {
                header.classList.remove('header--filled');
            } else {
                header.classList.add('header--filled');
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
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
        nav {
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
                        &:hover {
                            color: $green;
                        }
                    }
                }
            }
        }
    }
    &.header--filled {
        background-color: $dark_grey;
        box-shadow: 0 0 2em #333;
    }
}
</style>
