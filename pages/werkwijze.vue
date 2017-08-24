<template>
  <div>
    <dagevosHeader></dagevosHeader>
    <dagevosWerkwijze :hoeProp="hoe"></dagevosWerkwijze>
    <dagevosFooter></dagevosFooter>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import dagevosHeader from '~/components/dagevosHeader.vue'
import dagevosWerkwijze from '~/components/dagevosWerkwijze.vue'
import dagevosFooter from '~/components/dagevosFooter.vue'
import axios from 'axios'

import hoe from '~/static/content/json/hoe.json'


export default {
  components: {
    Logo,
    dagevosHeader,
    dagevosWerkwijze,
    dagevosFooter
  },

  data: function () {
    return {
      hoe
    }
  },


  // async asyncData({
  //   query,
  //   error
  // }) {
  //   let [hoeRes] = await Promise.all([
  //     axios.get('http://werkt.template01.info/json/hoe.json'),
  //
  //   ])
  //   return {
  //     hoe: hoeRes.data,
  //   }
  // }

}
</script>

<style>

</style>
