<template>
<div class="" id="index">


  <!-- <div class="container spacerTopM spacerBottomM">
    <div class="row">
      <div class="col">
        <h1 class="float-right">Wat is het</h1>
      </div>
      <div class="col">
        <h1><br />echte voor jou?</h1>
      </div>
    </div>
  </div> -->
  <div :style="{'background':'url(\'FIRST_Rotterdam_Kantoren_uitzicht2.jpg\')'}" class="index-full-cover heightTall hidden-sm-down">
  </div>
  <div class="container px-5 hidden-sm-up">

    <div class="row">

      <div class="col-sm-12 ">
        <div class="pullimage-left">
          <img style="width:100%;" class="" src="/content/img/FIRST_Rotterdam_Kantoren_uitzicht2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>


  <div class="container px-5 pt-mobile pb-mobile">

    <div class="row">
      <div class="col-sm-6 pb-mobile">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.wat.title"></h4>
            <p class="" v-html="indexIndexProp.wat.blurb"></p>
            <div class=" mb-5 mt-1 float-right buttonImitate buttonBlue" style="border:0px;">
              <nuxt-link to="/werkwijze">Lees verder over werkwijze! <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>
      </div>

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
      <div class="col-sm-6 hidden-sm-up">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
    </div>


  </div>
  <!-- <hr class="m-4 p-2"> -->
  <div class="container greyBackground px-5 pt-mobile pt-mobile">

    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="" v-html="indexIndexProp.hoe.title"></h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container greyBackground pb-5 px-5 pb-mobile">

    <div class="row">

      <div class="col-sm-6 pb-mobile">
        <div class="row">
          <div v-for="card in indexIndexProp.hoe.cards" class="col-sm-6 p-2">
            <div class="card p-3" style="background:#552E87;">
              <h3 v-html="card.content" style="color:white !important;"></h3>
              <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="row ">
          <div class="col px-5">
            <div v-html="indexIndexProp.hoe.content">

            </div>
            <div class=" mb-5 mt-1 float-right buttonImitate buttonBlue" style="border:0px;">
              <nuxt-link to="/aanbod">Lees verder over aanbod <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="index-full-cover heightTall hidden-sm-down">
  </div>
  <div class="container px-5 hidden-sm-up">

    <div class="row">

      <div class="col-sm-12 ">
        <div class="pullimage-left">
          <img style="width:100%;" class="" src="/content/img/FIRST_Rotterdam_Kantoren_uitzicht2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="container px-5 pt-mobile">

    <div class="row">

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
      <div class="col-sm-6 hidden-sm-up">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
    </div>
  </div>

<!-- DOELGROEP + REFERENTIES -->
  <div class="container pb-5 px-5">

    <div class="row">
      <div class="col-sm-6 pb-mobile">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="pb-5 pb-mobile">
            <h4 class="mb-5" v-html="indexIndexProp.wie.title"></h4>

            <div v-html="indexIndexProp.wie.content"> </div>
            <div class="pb-mobile ">
              <div class=" mt-1  float-left buttonImitate float-right buttonBlue" style="border:0px;">
                <nuxt-link :to="{ path: '/aanbod', hash:'doelgroep'}">Lees verder over doelgroep <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
              </div>
            </div>
          </div>
          <div class="pt-mobile pt-5">
            <h4 class="mb-5" v-html="indexIndexProp.referenties.title"></h4>

            <div v-html="indexIndexProp.referenties.content"> </div>

            <div class=" mt-1 float-left buttonImitate float-right buttonBlue" style="border:0px;">
              <nuxt-link to="/referenties">Lees referenties <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
          </div>

        </div>
      </div>
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <h4 class="mb-5">Opdrachtgevers</h4>
          <div class="row mt-5 hidden-sm-down">
            <div class="col-sm-4 p-4 flexer" v-for="opdrachtgever in indexOpdrachtsProp.opdrachtgevers">
              <img style="max-width:100%;" class="flexerContentCenter" :src="opdrachtgever.imgpath" alt="">
            </div>
          </div>
          <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
        </div>
      </div>
      <div class="row mt-5 hidden-sm-up pt-mobile">
        <div class="flexer"  style="width:50%; padding-left: 5%; padding-right: 5%; padding-top: 1rem; padding-bottom: 1rem;" v-for="opdrachtgever in indexOpdrachtsProp.opdrachtgevers">
          <img style="width:100%;" class="flexerContentCenter" :src="opdrachtgever.imgpath" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <hr class="m-4 p-2"> -->
  <div class="container pt-2 greyBackground px-5 pt-mobile pb-mobile">

    <div class="row pb-mobile">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.rene.title"></h4>
            <h4 class="" v-html="indexIndexProp.rene.blurb"></h4>

            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>

      </div>
    </div>

    <div class="row">


      <div class="col-sm-6">

        <div class="float-left pullimage-left">
          <img style="max-width:100%;" class="" src="/content/img/russells-RLA002-ST-0146-sq.jpg" alt="">
        </div>
      </div>

      <div class="col-sm-6 pt-mobile">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div v-html="indexIndexProp.rene.content">

          </div>
          <div class="mb-5 mt-1 float-left  buttonImitate buttonBlue" style="border:0px;">
            <nuxt-link to="/about">Lees meer over René <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- <hr class="m-4 p-2 mt-5"> -->





  <div class="container px-5  pt-mobile pb-mobile" id="contact">


    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5">Contact</h4>
            <div id="contactProp" v-html="indexIndexProp.contact.content"></div>

          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5">Formulier</h4>

            <b-input-group left="Naam">
              <b-form-input></b-form-input>
            </b-input-group>
            <br />
            <b-input-group left="Adres">
              <b-form-input textarea placeholder="" :rows=3></b-form-input>
            </b-input-group>
            <br />

            <b-input-group left="Telefoon">
              <b-form-input></b-form-input>
            </b-input-group>
            <br />

            <b-input-group left="Email">
              <b-form-input></b-form-input>
            </b-input-group>
            <br />

            <p class="smallText">
              Graag wil ik dat Het Echte Werkt! contact met mij opneemt over het volgende:
            </p>
            <b-input-group>
              <b-form-input textarea placeholder="Bericht" :rows=3></b-form-input>
            </b-input-group>
            <br />

            <div class="float-right buttonImitate p-2" style="background:transparent; border-color:#552E87;">
              <nuxt-link to="/about">Stuur!</nuxt-link>
            </div>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>

      </div>
    </div>

  </div>


</div>
</template>

<script>
import _ from 'lodash'
import vueResource from 'vue-resource'
import dagevosSingleReferentie from '~/components/dagevosSingleReferentie.vue'

export default {
  data() {
    return {
      // indexWat: '',
      // indexHoe: '',
      // indexReferenties: [],
      // indexOpdrachtgevers: [],
    }
  },
  props: ['indexRefsProp', 'indexIndexProp', 'indexOpdrachtsProp'],
  components: {
    dagevosSingleReferentie
  }

}
</script>


<style lang="scss">
@import "~assets/css/main.scss";
h1,
h2,
h3,
h4,
h5 {
    color: $purple;
}

#contactProp {
    @media (max-width:991px) {
        * {
            padding: 0;
        }
    }
}
</style>
