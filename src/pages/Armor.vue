<template>
  <Layout>

    
    <Nav/>

    <item-table :name="'Armor for Trade (' + $page.armor.edges.length + ')'" :data="$page.armor.edges" :saves="true" />
    
    <div class="text-center text-xs">
      <button class="bg-red-400 text-white px-4 py-2 rounded-md mb-4" @click="clearFaves()">Clear Saved</button>
    </div>


  </Layout>
</template>

<page-query>
query ForSaleItems {
  armor: allItem(filter: { nfs: { ne: true }, gearType: { eq: "Armor" } }) {
    edges {
      node {
        id
        name
        lvl
        perks
      }
    }
  }
}
</page-query>

<script>
import ItemTable from '@/components/ItemTable.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
    ItemTable,
    Nav
  },
  methods: {
    clearFaves () {
        if (process.isClient) {
            localStorage.clear()
            location.reload()
        }
    }
  },
  mounted () {
      // create faves in local storage
      // window.localStorage.setItem('faves',)
  }
}
</script>
