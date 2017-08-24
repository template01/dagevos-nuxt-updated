<template>
<div :class="uniqueId" class="">
  <transition name="fade">
    <div class="dagevosSingleReferentie card m-5" v-if="show">

      <div class="card-block">
        <div class="row">
          <div class="">
            <h6 class="card-title float-left">Referentie</h6>
            <h6 class="card-text float-right ml-3" v-html="personFunction"></h6>
            <h6 class="card-text float-right" v-html="name"></h6>
          </div>
        </div>
        <h1 class="card-text" v-html="blurb"></h1>
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
  props: ['personFunction', 'name', 'blurb'],
  methods: {
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
  transition: all .5s;
  -webkit-transition-delay: .250s;
  transition-delay: .250s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
