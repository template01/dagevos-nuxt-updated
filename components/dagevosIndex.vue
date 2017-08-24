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
  <div class="index-full-cover heightTall">
  </div>
  <div class="container px-5">

    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.wat.title"></h4>
            <p class="" v-html="indexIndexProp.wat.blurb"></p>
            <div class=" mb-5 mt-1 float-right buttonImitate buttonBlue"  style="border:0px;">
              <nuxt-link to="/werkwijze">Lees verder over werkwijze! <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>
      </div>

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS">
        <dagevosSingleReferentie :personFunction="indexRefsProp.referenties[0].function" :name="indexRefsProp.referenties[0].name" :blurb="indexRefsProp.referenties[0].blurb"></dagevosSingleReferentie>
      </div>
    </div>


  </div>
      <!-- <hr class="m-4 p-2"> -->
  <div class="container pt-2 greyBackground px-5">

    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="pl-5 pr-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.hoe.title"></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container greyBackground pb-5 px-5">

    <div class="row">

      <div class="col-sm-6 pl-5 pr-5">
        <div class="row pl-1">
          <div v-for="card in indexIndexProp.hoe.cards" class="col-sm-6 p-4">
            <div class="card p-3" style="background:#552E87;">
              <h3 v-html="card.content" style="color:white !important;"></h3>
              <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 pl-5 pr-5">
        <div class="row pl-1">
          <div class="col p-4">
            <div v-html="indexIndexProp.hoe.content">

            </div>
            <div class=" mb-5 mt-1 float-right buttonImitate buttonBlue"  style="border:0px;">
              <nuxt-link to="/aanbod">Lees verder over aanbod <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="index-full-cover heightTall">

  </div>
  <div class="container px-5">

    <div class="row">

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS">
        <dagevosSingleReferentie :personFunction="indexRefsProp.referenties[1].function" :name="indexRefsProp.referenties[1].name" :blurb="indexRefsProp.referenties[1].blurb"></dagevosSingleReferentie>
      </div>
    </div>
  </div>


  <div class="container pb-5 px-5">

    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.wie.title"></h4>

            <div v-html="indexIndexProp.rene.content">

            </div>
            <!-- <p class="" v-html="indexOpdrachtsProp.wie.blurb"></p> -->

            <div class=" mt-1 float-left buttonImitate float-right buttonBlue" style="border:0px;">
              <nuxt-link to="/referenties">Lees referenties <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <h4 class="mb-5">Opdrachtgevers</h4>
          <div class="row mt-5">
            <div class="col-sm-4 p-4 flexer" v-for="opdrachtgever in indexOpdrachtsProp.opdrachtgevers">
              <img style="max-width:100%;" class="flexerContentCenter" :src="opdrachtgever.imgpath" alt="">
            </div>

          </div>
          <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
    <!-- <hr class="m-4 p-2"> -->
  <div class="container pt-2 greyBackground px-5">

    <div class="row">
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

        <div class="float-left" style="margin-left:-63px; margin-right:-15px;">
          <img style="max-width:100%;" class="" src="/content/img/russells-RLA002-ST-0146-sq.jpg" alt="">
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;" >
          <div v-html="indexIndexProp.rene.content">

          </div>
          <div class="mb-5 mt-1 float-left  buttonImitate buttonBlue"  style="border:0px;">
            <nuxt-link to="/about">Lees meer over René <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- <hr class="m-4 p-2 mt-5"> -->

  <div class="container" id="contact">


    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5">Contact</h4>
            <div v-html="indexIndexProp.contact.content">

            </div>

          </div>
        </div>

      </div>

      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5">Formulier</h4>
            <br />

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

            <div class="float-right buttonImitate" style="background:transparent; border-color:#552E87;">
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
  props: ['indexRefsProp','indexIndexProp','indexOpdrachtsProp'],
  components:{
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
</style>
