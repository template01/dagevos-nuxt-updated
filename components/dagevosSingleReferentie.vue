<template>
<div :class="uniqueId" class="">
  <transition name="fade">
    <div class="dagevosSingleReferentie card m-5" v-if="show">
      <div class="card-block">
        <div class="row">
          <div class="">
            <h6 class="card-title float-left mr-3">Referentie</h6>
            <!-- <h6 class="card-text mr-3 float-left" v-html="referenties[selectRandomReferentie()].name"></h6> -->
            <!-- <h6 class="card-text float-left" v-html="referenties[selectRandomReferentie()].function"></h6> -->
          </div>
        </div>
        <div class="row mb-3">
          <h1 class="card-text" v-html="referenties[selectRandomReferentie()].blurb"></h1>
        </div>
        <div class="row">
            <p class="card-text mr-3 " style="margin-bottom:0" v-html="referenties[selectRandomReferentie()].name"></p>
            <p class="card-text" style="margin-bottom:0" v-html="referenties[selectRandomReferentie()].function"></p>
        </div>
      </div>
    </div>

  </transition>
</div>
</template>

<script>
import inView from 'in-view'

export default {
  data() {
    return {
      uniqueId: '',
      show: false
    }
  },
  props: ['personFunction', 'name', 'blurb', 'referenties'],
  methods: {
    selectRandomReferentie: function(){
      return Math.floor(Math.random() * this.referenties.length)
    },
    guid() {
      function stringGen(len) {
        var text = "";

        var charset = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < len; i++)
          text += charset.charAt(Math.floor(Math.random() * charset.length));

        return text;
      }
      return stringGen(48);

    },
    setFeaturedImage: function() {
      console.log(document.querySelectorAll('.' + this.uniqueId))
      console.log(this.uniqueId)
      var vm = this
      setTimeout(function() {
        inView('.' + vm.uniqueId).on('enter', el => {
          console.log(vm.uniqueId)
          vm.show = true
        });
      }, 100)

    }
  },

  mounted: function() {
    this.uniqueId = this.guid()

  },

  watch: {
    uniqueId: function() {
      this.setFeaturedImage()

    }
  }

}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform .5s, opacity .5s, max-height 2s;
  -webkit-transition-delay: .250s;
  transition-delay: .250s;
  max-height: 1200px;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
  transform: translateY(30px);
}
</style>
