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
  <div class="container">

    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.wat.title"></h4>
            <p class="" v-html="indexIndexProp.wat.blurb"></p>
            <div class="float-right buttonImitate" style="background:transparent; border-color:#552E87;">
              <nuxt-link to="/wat">Lees verder over Het Echte Werkt! <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>
      </div>


      <div class="col-sm-6 spacerTopM">
        <div class="card m-5">
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

              <h6 class="card-title float-left">Referentie</h6>
              <h6 class="card-text float-right ml-3" v-html="indexRefsProp.referenties[0].function"></h6>
              <h6 class="card-text float-right" v-html="indexRefsProp.referenties[0].name"></h6>
            </div>
            </div>
            <h1 class="card-text" v-html="indexRefsProp.referenties[0].blurb"></h1>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>
      </div>
    </div>


  </div>
      <hr class="m-4 p-2">
  <div class="container pt-2">

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
  <div class="container">

    <div class="row">

      <div class="col-sm-6 pl-5 pr-5">
        <div class="row pl-1">
          <div v-for="card in indexIndexProp.hoe.cards" class="col-sm-6 p-4">
            <div class="card p-3" style="background:white;">
              <h3 v-html="card.content"></h3>
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
            <div class="float-right buttonImitate" style="background:transparent; border-color:#552E87;">
              <nuxt-link to="/hoe">Lees verder hoe Het Echte Werkt! <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="index-full-cover heightTall spacerTopS">

  </div>
  <div class="container">

    <div class="row spacerBottomS">

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS">
        <div class="card m-5">
          <div class="card-block">
            <div class="row">
              <div class="col-md-12">

              <h6 class="card-title float-left">Referentie</h6>
              <h6 class="card-text float-right ml-3" v-html="indexRefsProp.referenties[1].function"></h6>
              <h6 class="card-text float-right" v-html="indexRefsProp.referenties[1].name"></h6>
            </div>
            </div>
            <h1 class="card-text" v-html="indexRefsProp.referenties[1].blurb"></h1>
            <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="container">

    <div class="row">
      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.wie.title"></h4>

            <div v-html="indexIndexProp.rene.content">

            </div>
            <!-- <p class="" v-html="indexOpdrachtsProp.wie.blurb"></p> -->

            <div class="buttonImitate" style="background:transparent; border-color:#552E87;">
              <nuxt-link to="/referenties">Lees verder voor wie Het Echte Werkt! <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
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
    <hr class="m-4 p-2">
  <div class="container pt-2">

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

        <div class="float-left" style="margin-left:-15px;margin-right:-15px;">
          <img style="max-width:100%;" class="" src="/content/img/russells-RLA002-ST-0146-sq.jpg" alt="">
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-5" style="background-color: transparent; border-color: transparent;" >
          <div v-html="indexIndexProp.rene.content">

          </div>
          <div class="mt-2 buttonImitate" style="background:transparent; border-color:#552E87;">
            <nuxt-link to="/rene">Lees meer over René <i class="fa fa-hand-o-right" aria-hidden="true"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <hr class="m-4 p-2 mt-5">

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

export default {
  data() {
    return {
      // indexWat: '',
      // indexHoe: '',
      // indexReferenties: [],
      // indexOpdrachtgevers: [],
    }
  },
  props: ['indexRefsProp','indexIndexProp','indexOpdrachtsProp']

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
