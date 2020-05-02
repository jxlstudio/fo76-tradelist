<template>
    <nav class="lg:flex flex-row flex-wrap justify-center lg:justify-between items-center">
        <h1 class="text-2xl lg:text-3xl text-center py-4 text-fallout-yellow font-black">Fallout 76 Trading Post</h1>
        <div class="flex justify-center">
            <g-link to="/" title="All Items" class="uppercase font-bold text-xs md:text-sm text-white hover:text-gray-200 px-2 py-1 hover:bg-gray-800">All ({{$static.all.edges.length}})</g-link>
            <g-link to="/weapons" title="Weapons" class="uppercase font-bold text-xs md:text-sm text-white hover:text-gray-200 px-2 py-1 hover:bg-gray-800">Weapons ({{$static.weapons.edges.length}})</g-link>
            <g-link to="/armor" title="Armor" class="uppercase font-bold text-xs md:text-sm text-white hover:text-gray-200 px-2 py-1 hover:bg-gray-800">Armor ({{$static.armor.edges.length}})</g-link>
            <g-link to="/outfits" title="Outfits" class="uppercase font-bold text-xs md:text-sm text-white hover:text-gray-200 px-2 py-1 hover:bg-gray-800">Outfits ({{$static.outfits.edges.length}})</g-link>
            <g-link to="/wants" title="Wants" class="uppercase font-bold text-xs md:text-sm text-white hover:text-gray-200 px-2 py-1 hover:bg-gray-800">Wants</g-link>
        </div>
    </nav>
</template>

<static-query>
query ForSaleItems {
  all:  allItem(filter: { nfs: { ne: true } }) {
    edges {
      node {
        id
      }
    }
  }
  weapons: allItem(filter: { nfs: { ne: true }, gearType: { eq: "Weapon" } }) {
    edges {
      node {
        id
      }
    }
  }
  armor: allItem(filter: { nfs: { ne: true }, gearType: { eq: "Armor" } }) {
    edges {
      node {
        id
      }
    }
  }
  outfits: allItem(filter: { nfs: { ne: true }, gearType: { eq: "Outfit" } }) {
    edges {
      node {
        id
      }
    }
  }
}
</static-query>