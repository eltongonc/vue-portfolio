<template>
	<footer id="navigation" class="footer">
    <div class="footer__inner">
        <h4 class="footer__copyright">Copyright &copy; {{new Date().getUTCFullYear() +  ' Elton Gonçalves Gomes, Amsterdam'}}</h4>

        <div class="contact">
          <section class="contact--mobile">
            <nav class="contact__nav">
              <ul class="nav__inner">
                <li v-if="homeButton">
                  <router-link to="/">
                      <svg viewBox="0 0 27.02 27.02" xml:space="preserve">
                          <g>
                              <path d="M3.674,24.876c0,0-0.024,0.604,0.566,0.604c0.734,0,6.811-0.008,6.811-0.008l0.01-5.581   c0,0-0.096-0.92,0.797-0.92h2.826c1.056,0,0.991,0.92,0.991,0.92l-0.012,5.563c0,0,5.762,0,6.667,0   c0.749,0,0.715-0.752,0.715-0.752V14.413l-9.396-8.358l-9.975,8.358C3.674,14.413,3.674,24.876,3.674,24.876z"/>
                              <path d="M0,13.635c0,0,0.847,1.561,2.694,0l11.038-9.338l10.349,9.28c2.138,1.542,2.939,0,2.939,0   L13.732,1.54L0,13.635z"/>
                              <polygon points="23.83,4.275 21.168,4.275 21.179,7.503 23.83,9.752  "/>
                          </g>
                      </svg>
                  Home</router-link>
                <li>
                  <a href="#app" v-on:click="scrollToTop">
                      <svg viewBox="0 0 284.929 284.929" xml:space="preserve">
                          <g>
                              <g>
                                  <path d="M17.128,167.872c1.903,1.902,4.093,2.854,6.567,2.854c2.474,0,4.664-0.952,6.567-2.854L142.466,55.666l112.208,112.206    c1.902,1.902,4.093,2.854,6.563,2.854c2.478,0,4.668-0.952,6.57-2.854l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.563    c0-2.475-0.951-4.665-2.847-6.567L149.028,7.419c-1.901-1.906-4.088-2.853-6.562-2.853s-4.665,0.95-6.567,2.853L2.856,140.464    C0.95,142.367,0,144.554,0,147.034c0,2.468,0.953,4.658,2.856,6.561L17.128,167.872z" />
                                  <path d="M149.028,117.055c-1.901-1.906-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,250.1    C0.95,252.003,0,254.192,0,256.67c0,2.472,0.953,4.661,2.856,6.564l14.272,14.276c1.903,1.903,4.093,2.848,6.567,2.848    c2.474,0,4.664-0.951,6.567-2.848l112.204-112.209l112.208,112.209c1.902,1.903,4.093,2.852,6.563,2.852    c2.478,0,4.668-0.948,6.57-2.852l14.274-14.276c1.902-1.903,2.847-4.093,2.847-6.564c0-2.478-0.951-4.667-2.847-6.57    L149.028,117.055z" />
                              </g>
                          </g>
                      </svg>
                      Back to top
                  </a>
                </li>
        				<li>
                    <a href="mailto:eltongoncalves@gmail.com">
                        <svg viewBox="0 0 14 14">
                            <g>
                                <g>
                                    <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986    c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
                                    <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8    L13.684,2.271z" />
                                    <polygon points="0,2.878 0,11.186 4.833,7.079   "/>
                                    <polygon points="9.167,7.079 14,11.186 14,2.875   "/>
                                </g>
                            </g>
                        </svg>
                    Send me an email</a>
                </li>
        				<li>
                    <a href="https://github.com/eltongonc">
                        <svg viewBox="0 0 32.6 31.8" xml:space="preserve">
                            <path fill-rule="evenodd;clip-rule:evenodd" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
                              c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
                              c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7
                              c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
                              c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
                              C32.6,7.3,25.3,0,16.3,0z"/>
                        </svg>
                    View more of my work</a>
                </li>
        				<li>
                    <a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/">
                        <svg viewBox="0 0 430.1 430.1" xml:space="preserve">
                            <g>
                              <path d="M398.4,0H31.8C14.2,0,0,13.8,0,30.8v368.5c0,17,14.2,30.8,31.8,30.8h366.6
                                c17.5,0,31.8-13.8,31.8-30.8V30.8C430.1,13.8,415.9,0,398.4,0z M130.4,360h-65V165.8h65V360z M97.9,139.3h-0.4
                                c-21.8,0-35.9-14.9-35.9-33.6c0-19,14.5-33.5,36.8-33.5c22.2,0,35.9,14.5,36.3,33.5C134.7,124.4,120.6,139.3,97.9,139.3z
                                  M364.7,360h-65V256.1c0-26.1-9.4-43.9-32.9-43.9c-18,0-28.6,12-33.3,23.6c-1.7,4.1-2.2,9.9-2.2,15.7V360h-65c0,0,0.9-176,0-194.2
                                h65v27.5c8.6-13.2,24-32.1,58.5-32.1c42.8,0,74.8,27.7,74.8,87.4L364.7,360L364.7,360z M230.9,194c0.1-0.2,0.3-0.4,0.4-0.6v0.6
                                H230.9z"/>
                            </g>
                        </svg>
                    Get to know me better</a>
                </li>
        				<li>
                    <a href="/sitemap.html">
                        <svg viewBox="0 0 430.1 430.1" xml:space="preserve">
                        </svg>
                    View the pages Sitemap</a>
                </li>
        			</ul>
        		</nav>
            </section>
            <section class="contact--desktop">
                <h4>Contact me on</h4>
                <span aria-hidden="true">
                  <svg viewBox="0 0 236.4 89" xml:space="preserve">
                  <path d="M3.8,33.1C35.7,42.8,67,46.1,96.7,49.8c29.6,3.8,59.9,4.7,90.7,2.6c-10.4,5.9-21.4,13.5-33.1,23
                    c-1.6,1.3-2.5,3-2.7,5.1c-0.2,2.1,0.4,3.9,1.7,5.6c1.3,1.6,3,2.6,5.1,2.9c2.1,0.3,3.9-0.2,5.4-1.5c13.8-11.3,26.9-19.9,39.3-26
                    c11.5-5.8,18.8-9.4,21.8-10.8c0.2,0,0.4,0,0.5-0.1l1-0.1c0.8-0.1,1.4-0.2,1.6-0.3c1.9-0.3,3.5-0.8,4.7-1.7c3.2-2.3,4.3-5.3,3.4-9
                    c-0.8-3.6-3-6-6.5-6.9c-1.4-0.5-3-0.6-4.8-0.4l-2.6,0.5c-4.7-0.9-8.6-1.7-11.6-2.5c-17.3-4.8-32.3-14-45.1-27.6
                    c-1.5-1.5-3.2-2.4-5.3-2.4c-2.1-0.1-3.9,0.6-5.4,2c-1.5,1.4-2.2,3.2-2.2,5.3c0,2.1,0.7,3.9,2.2,5.5c10,10.6,20.9,18.7,32.8,24.4
                    c-30.1,2.1-59.6,1.3-88.5-2.2c-28.4-3.6-59.2-6.7-91-16.4C0.7,16.6-3.4,31.1,3.8,33.1z"/>
                  </svg>
                </span>
                <nav class="contact__nav">
                    <ul class="nav__inner">
                        <li>
                            <a href="https://github.com/eltongonc">
                                <svg viewBox="0 0 32.6 31.8" xml:space="preserve">
                                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
                                	c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
                                	c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7
                                	c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
                                	c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
                                	C32.6,7.3,25.3,0,16.3,0z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:eltongonc@gmail.com">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                	 viewBox="0 0 430.1 430.1" style="enable-background:new 0 0 430.1 430.1;" xml:space="preserve">
                                    <g>
                                    	<path class="st0" d="M430.1,191.1c0,24.7-4.1,47.7-12.4,69.1c-8.3,21.4-19.8,38.1-34.5,50.2c-14.7,12.1-31.5,18.1-50.3,18.1
                                    		c-13.5,0-25.7-2.8-36.7-8.3c-10.9-5.5-19.5-13.2-25.6-23h-3.8c-18.3,20.8-40.5,31.3-66.7,31.3c-31.3,0-55.3-9.4-72.1-28.1
                                    		c-16.8-18.7-25.1-44.9-25.1-78.5c0-24.7,5.3-46.5,15.9-65.5c10.6-19,25.9-33.6,45.9-43.9c20-10.2,43.2-15.4,69.5-15.4
                                    		c13.9,0,29.1,1.4,45.8,4.3c16.7,2.9,31.9,6.8,45.8,11.7l-5.4,110.8l-0.5,24.7c0,15.1,4.2,22.6,12.6,22.6c8.9,0,16.1-7.6,21.7-22.9
                                    		c5.6-15.2,8.3-34.5,8.3-57.8c0-41.8-11.5-74.2-34.6-96.9c-23.1-22.8-55.8-34.1-98.2-34.1c-32.5,0-60.7,6.9-84.8,20.7
                                    		c-24,13.8-42.4,33.7-55,59.5c-12.7,25.8-19,56.1-19,90.7c0,44.7,12.2,79.1,36.6,103.4c24.4,24.3,58.8,36.4,103.2,36.4
                                    		c19.8,0,41.3-2.2,64.3-6.6c23-4.4,45.5-10.6,67.6-18.6v60.1c-38.3,16.6-81.1,25-128.2,25c-66.3,0-118.5-17.7-156.3-53.2
                                    		C19.9,341.5,1,292.3,1,229.4c0-44.3,9.8-84,29.4-119.1c19.6-35.1,46.6-62.2,81.1-81.2c34.5-19,73.5-28.5,117.1-28.5
                                    		c40,0,75.4,7.8,106.1,23.4c30.7,15.6,54.3,37.8,70.8,66.6C421.8,119.4,430.1,152.9,430.1,191.1z M174.9,221.3
                                    		c0,17.5,3.1,30.2,9.4,38.1c6.2,7.9,14.5,11.8,24.8,11.8c13.2,0,22.8-5.4,29-16.3c6.2-10.9,10.2-30.1,12.1-57.8l2.6-41
                                    		c-6.8-1.1-12.7-1.6-17.4-1.6c-18.5,0-33.1,5.9-44,17.6C180.3,183.9,174.9,200.3,174.9,221.3z"/>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/">
                                <svg viewBox="0 0 430.1 430.1" xml:space="preserve">
                                <g>
                                	<path d="M398.4,0H31.8C14.2,0,0,13.8,0,30.8v368.5c0,17,14.2,30.8,31.8,30.8h366.6
                                		c17.5,0,31.8-13.8,31.8-30.8V30.8C430.1,13.8,415.9,0,398.4,0z M130.4,360h-65V165.8h65V360z M97.9,139.3h-0.4
                                		c-21.8,0-35.9-14.9-35.9-33.6c0-19,14.5-33.5,36.8-33.5c22.2,0,35.9,14.5,36.3,33.5C134.7,124.4,120.6,139.3,97.9,139.3z
                                		 M364.7,360h-65V256.1c0-26.1-9.4-43.9-32.9-43.9c-18,0-28.6,12-33.3,23.6c-1.7,4.1-2.2,9.9-2.2,15.7V360h-65c0,0,0.9-176,0-194.2
                                		h65v27.5c8.6-13.2,24-32.1,58.5-32.1c42.8,0,74.8,27.7,74.8,87.4L364.7,360L364.7,360z M230.9,194c0.1-0.2,0.3-0.4,0.4-0.6v0.6
                                		H230.9z"/>
                                </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </div>
	</footer>
</template>

<script>
import { TweenLite } from "gsap";
import ScrollToPlugin from "gsap/src/uncompressed/plugins/ScrollToPlugin";

export default {
  name: "Footer",
  methods: {
    scrollToTop(e) {
      e.preventDefault();

      TweenLite.to(window, 1.5, {
        scrollTo: 0
      });
    }
  },
  computed: {
    homeButton() {
      return this.$route.name !== 'Home';
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="scss">
$grid-large: 80rem;
$grid-medium: 32rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;
$light_grey: #ededed;

$dark_boxshadow: 0 0 10rem -2rem #000;

.footer {
  background: $dark_grey;
  box-shadow: $dark_boxshadow;
  border-top: 0.1rem solid $green;
  .footer__inner {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    .footer__copyright {
       color: $light_grey;
      display: inline-block;
      font-weight: lighter;
    }
    .contact {
      .contact--mobile {
        display: none;
      }
      .contact--desktop {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        color: white;
        h4 {
          margin: 0;
          display: block;
          font-weight: lighter;
          font-family: "Courgette", cursive;
        }
        span {
          margin-left: 1rem;
          margin-right: .5rem;
          transform: translateY(30%);
          svg {
            width: 2em;
            path {
              fill: white;
            }
          }
        }
        .contact__nav {
          .nav__inner {
            margin: 0;
            padding: 0;
            display: flex;
            li {
              display: inline-block;
              width: 2rem;
              height: 2rem;
              background: none;
              margin: 0 .2em;
              a {
                height: 100%;
                display: inline-block;
                border-radius: 0.3em;
                transition: 0.3s;
                svg {
                  height: 100%;
                  padding: .2em;
                  box-sizing: border-box;
                  path {
                    transition: 0.3s;
                    fill: $green;
                  }
                }
                &:hover {
                  background-color: $green;
                  svg {
                    path {
                      fill: $dark_grey;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 50em) {
    .footer__inner {
      padding: 1rem;
      flex-wrap: wrap;
      .contact {
        width: 100%;
        .contact--desktop {
          display: none;
        }
        .contact--mobile {
          display: block;
          .contact__nav {
            .nav__inner {
              list-style-type: none;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              li {
                width: 100%;
                box-shadow: $dark_boxshadow;
                margin: 0.1em;
                display: inline-block;
                background-color: rgba(151, 220, 172, 0.1);
                overflow: hidden;
                &:first-child {
                  border-radius: 0.3em 0.3em 0 0;
                }
                &:last-child {
                  border-radius: 0 0 0.3em 0.3em;
                }
                a {
                  transition: 0.3s;
                  padding: 0.7rem;
                  color: #663231;
                  text-decoration: none;
                  color: rgba(255, 255, 255, 0.7);
                  display: flex;
                  align-items: center;
                  text-align: left;
                  svg {
                    width: 1.3em;
                    margin-right: 1em;
                    margin-left: .2em;
                    path,
                    polygon {
                      fill: $green;
                    }
                  }
                  &:hover,
                  &:active {
                    background-color: rgba($green, 0.5);
                    color: white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
