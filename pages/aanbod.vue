<template>
<div>
  <dagevosHeader></dagevosHeader>
  <dagevosAanbod :watProp="wat" :opdrachtsProp="opdrachts" ></dagevosAanbod>
  <dagevosFooter></dagevosFooter>

</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import dagevosHeader from '~/components/dagevosHeader.vue'
import dagevosAanbod from '~/components/dagevosAanbod.vue'
import dagevosFooter from '~/components/dagevosFooter.vue'
import opdrachts from '~/static/content/json/opdrachtgevers.json'
import wat from '~/static/content/json/wat.json'


import axios from 'axios'

export default {
  components: {
    Logo,
    dagevosHeader,
    dagevosAanbod,
    dagevosFooter
  },

  data: function() {
    return {
      wat,
      opdrachts
    }
  },
  //
  // async asyncData({
  //   query,
  //   error
  // }) {
  //   let [watRes, opdrachtsRes] = await Promise.all([
  //     axios.get('http://werkt.template01.info/json/wat.json'),
  //     axios.get('http://werkt.template01.info/json/opdrachtgevers.json'),
  //
  //   ])
  //   return {
  //     wat: watRes.data,
  //     opdrachts: opdrachtsRes.data,
  //   }
  // }

}
</script>

<style>

</style>
