<template>
<div class="container px-5">

  <div class="row">
    <div class="col-12" id="dagevosHeader">
      <div class="hidden-sm-down px-5">



        <!-- <b-navbar toggleable type="inverse" variant="" style="padding:0;"> -->
        <div class="float-left py-5">

          <nuxt-link to="/" class="navbar-brand mainMenuHeader">
            <span>
          <img class="" src="~assets/svg/HetEchteWerk_CMYK.svg" />
          </span>
          </nuxt-link>
        </div>


          <div class="float-right py-5">
            <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/werkwijze">Werkwijze</nuxt-link></h4>
            <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/aanbod">Aanbod</nuxt-link></h4>
            <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/referenties">Referenties</nuxt-link></h4>
            <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/about">Rene Dagevos</nuxt-link></h4>
            <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-0" to="/#contact">Contact</nuxt-link></h4>
          </div>
          <!-- <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar class="ml-auto">
              <b-nav-item-dropdown text="<h4>Menu</h4>" class="" right>
                <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/werkwijze">Werkwijze</nuxt-link></h4>
                <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/aanbod">Aanbod</nuxt-link></h4>
                <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/referenties">Referenties</nuxt-link></h4>
                <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-2" to="/about">Rene Dagevos</nuxt-link></h4>
                <h4><nuxt-link class="ml-3 mr-3 mt-2 mb-0" to="/#contact">Contact</nuxt-link></h4>
              </b-nav-item-dropdown>
            </b-nav>
          </b-collapse> -->
        <!-- </b-navbar> -->

      </div>


      <b-navbar class="hidden-sm-up beigeBackground fixed-top  " toggleable type="" id="" type="light">
        <div class="px-5">
          <div class="px-5">
            <b-nav-toggle class="mt-1" target="nav_collapse1"></b-nav-toggle>


            <b-link class="navbar-brand" to="/">
              <span><img class="brand-sm" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
            </b-link>

            <b-collapse is-nav id="nav_collapse1">
              <b-nav is-nav-bar class="ml-auto mt-5 pt-5">
                <nuxt-link class="nav-link" to="/werkwijze">Werkwijze</nuxt-link>
                <nuxt-link class="nav-link" to="/aanbod">Aanbod</nuxt-link>
                <nuxt-link class="nav-link" to="/referenties">Referenties</nuxt-link>
                <nuxt-link class="nav-link" to="/about">Rene Dagevos</nuxt-link>
                <nuxt-link class="nav-link" to="/#contact">Contact</nuxt-link>

              </b-nav>
            </b-collapse>
          </div>
        </div>

      </b-navbar>
      <!-- CLONE FROM ABOVE TO ADD SPACING -->
      <b-navbar class="hidden-sm-up beigeBackground " toggleable type="" id="" type="light" style="opacity: 0;">
        <b-link class="navbar-brand" to="/">
          <span><img class="brand-sm" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
        </b-link>
      </b-navbar>


    </div>
    <transition name="slide">

        <b-navbar v-if="!hideNav" toggleable type="" id="dagevosHeaderFixed" class="fixed-top hidden-sm-down col-12 container" type="light" style="background:#F6FBFF;">
          <div class="  px-5" style="width:100%">

            <div class="row pl-5 pr-5" style="width:100%; display: block;">

              <b-nav-toggle class="mt-1" target="nav_collapse2"></b-nav-toggle>

              <b-link class="navbar-brand" to="/" style="float:left; width: 28%; max-width:274px">
                <span><img  style="width:100%" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
              </b-link>
              <div style="float:right; width:auto%">

                <b-collapse is-nav id="nav_collapse2" style="">
                  <b-nav is-nav-bar class="ml-auto">
                    <nuxt-link class="nav-link" to="/werkwijze">Werkwijze</nuxt-link>
                    <nuxt-link class="nav-link" to="/aanbod">Aanbod</nuxt-link>
                    <nuxt-link class="nav-link" to="/referenties">Referenties</nuxt-link>
                    <nuxt-link class="nav-link" to="/about">Rene Dagevos</nuxt-link>
                    <nuxt-link class="nav-link" to="/#contact">Contact</nuxt-link>

                  </b-nav>
                </b-collapse>
              </div>
            </div>

          </div>
        </b-navbar>
    </transition>

  </div>
</div>
</template>
<script>
import _ from 'lodash'

export default {

  data() {
    return {
      hideNav: true
    }
  },
  methods: {
    test: function() {
      var vm = this
      var heightHeader = this.$el.offsetHeight + parseFloat(window.getComputedStyle(vm.$el).margin) * 2
      if (window.pageYOffset > heightHeader) {
        this.hideNav = false
      } else {
        this.hideNav = true

      }
    }
  },
  mounted() {
    this.test()
    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    var vm = this
    window.addEventListener('scroll', _.throttle(() => {
      vm.test()
    }, 200))
  },

  created() {}

}
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.slide-enter-active {
    transition: all 0.3s ease;
}
.slide-leave-active {
    transition: all 0.5s ease;
}
/* .slide-fade-leave-active below version 2.1.8 */
.slide-enter,
.slide-leave-to {
    transform: translateY(-200px);
    opacity: 0;
}

#dagevosHeader {

    font-family: 'Coolvetica Rg' !important;
    #logo {
        img {
            max-width: 100%;
        }
    }

    .navbar-toggler-right{
      right: 2rem !important;

    }

    .navbar .dropdown-menu a,
    .navbar-nav a {
        &:hover {
            text-decoration: none;
            -webkit-box-shadow: 0 1px 0 0 $purple;
            -moz-box-shadow: 0 1px 0 0 $purple;
            box-shadow: 0 1px 0 0 $purple;
        }
        &:focus {
            text-decoration: none;
        }
    }
    @media screen and (max-width: 992px) {
        .navbar .dropdown-menu a,
        .navbar-nav a {
            &:hover {
                text-decoration: none;
                -webkit-box-shadow: none;
                -moz-box-shadow: none;
                box-shadow: none;
            }
            &:focus {
                text-decoration: none;
            }
        }

    }

    .navbar .dropdown-toggle {
        &:hover {
            box-shadow: none;
        }
    }

    .navbar-light .navbar-toggler {
        border: 0;
        background: white;
    }

    .dropdown-toggle::after {
        content: none;
    }

    .brand-sm {
        height: 40px;
        width: auto;
    }
    @media screen and (max-width: 500px) {
      .brand-sm {
          height: 35px;
          width: auto;
      }


          .navbar-toggler-right{
            padding-left:2px;
            padding-right: 2px;
          }
    }


    .mainMenuHeader{
      img{
        width: 450px;
      }
    }

    h4 {
      margin-bottom: 0.25rem;
      &:last-of-type{
        margin-bottom: 0px;
      }
    }



    .dropdown-menu {
        width: calc(25vw - 38px);
        border-color: white;
        border-radius: 0;

        h4 {
            border: 0;
            margin-top: 8px;
            margin-bottom: 8px;
            width: 100%;
            font-family: 'Aileron' !important;
            font-weight: 200;
            font-size: 25px !important;
        }

        h5 {
            font-family: 'Aileron' !important;
            box-sizing: border-box !important;

            a {
                box-sizing: border-box !important;
                display: inline-block;
                &:hover {}
            }
        }
    }

}

#dagevosHeaderFixed {}
</style>
