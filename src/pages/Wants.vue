<template>
  <Layout>

    
    <Nav/>

    <item-table name="Wishlist" :data="$page.wants.edges" :saves="true" />


  </Layout>
</template>

<page-query>
query WantedItems {
  wants: allWant {
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
  }
}
</script>
