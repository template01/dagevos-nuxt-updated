<template>
<div>
  <dagevosHeader></dagevosHeader>
  <dagevosRene :reneProp="rene"></dagevosRene>
  <dagevosFooter></dagevosFooter>

</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import dagevosHeader from '~/components/dagevosHeader.vue'
import dagevosRene from '~/components/dagevosRene.vue'
import dagevosFooter from '~/components/dagevosFooter.vue'
import axios from 'axios'

import rene from '~/static/content/json/rene.json'


export default {
  components: {
    Logo,
    dagevosHeader,
    dagevosRene,
    dagevosFooter
  },


  data: function() {
    return {
      rene
    }
  },


  //
  // async asyncData({
  //   query,
  //   error
  // }) {
  //   let [reneRes] = await Promise.all([
  //     axios.get('http://werkt.template01.info/json/rene.json'),
  //
  //   ])
  //   return {
  //     rene: reneRes.data,
  //   }
  // }

}
</script>

<style>

</style>
