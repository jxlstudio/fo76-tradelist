<template>
    <section>
        <h3 class="md:text-2xl text-center text-white py-4">{{name}}</h3>

        <table class="table-auto w-full mb-6">
        <thead>
            <tr>
                <th v-if="saves" class="px-4 py-2 border border-gray-300 dark:border-gray-500 bg-gray-900 text-white text-center text-sm md:text-base md:w-1/12">Like</th>
                <th class="px-4 py-2 border border-gray-300 dark:border-gray-500 bg-gray-900 text-white text-left text-sm md:text-base hidden md:table-cell text-center">Lvl</th>
                <th class="px-4 py-2 border border-gray-300 dark:border-gray-500 bg-gray-900 text-white text-left text-sm md:text-base">Item Name</th>
                <th class="px-4 py-2 border border-gray-300 dark:border-gray-500 bg-gray-900 text-white text-left text-sm md:text-base">Perks</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="{ node } in data" :key="node.id" class="bg-white hover:bg-gray-200 dark:bg-gray-800 dark-hover:bg-gray-700" :id="node.id">
                <td v-if="saves" class="px-4 py-2 border border-gray-300 dark:border-gray-500 text-center"><input class="mx-auto" type="checkbox" :checked="getFave(node.id)" :name="node.id" @click="toggleFave(node.id)"></td>
                <td class="px-4 py-2 border border-gray-300 dark:border-gray-500 hidden md:table-cell text-center">{{node.lvl}}</td>
                <td class="px-4 py-2 border border-gray-300 dark:border-gray-500">{{node.name}} <span v-if="node.lvl > 1" class="block md:hidden">Lvl {{node.lvl}}</span></td>
                <td class="px-4 py-2 border border-gray-300 dark:border-gray-500">
                    <div class="flex flex-wrap" v-if="node.perks.length > 0">
                    <span v-for="perk in node.perks" :key="perk" class="bg-gray-300 dark:bg-blue-900 px-2 py-1 mr-1 rounded-sm text-sm mb-1 md:mb-0">
                        {{perk}}
                    </span>
                    </div>
                    <div class="flex flex-wrap" v-else><span class="bg-gray-300 dark:bg-blue-900 px-2 py-1 mr-1 rounded-sm text-sm mb-1 md:mb-0">None</span></div>
                </td>
            </tr>
        </tbody>
        </table>
    </section>
</template>

<script>
export default {
    props: [
        'name',
        'data',
        'saves'
    ],
    watch: {

    },
    methods: {
        toggleFave (id) {
            if (process.isClient) {
                // Add fave in local storage
                if (localStorage.getItem(id)) {
                    localStorage.removeItem(id)
                } else {
                    localStorage.setItem(id, true)
                }
            }
        },
        getFave (id) {
            // console.log(localStorage.getItem(id))
            // let row = document.getElementById(id)
            if (process.isClient) {
                if (window.localStorage.getItem(id)) {
                    // document.getElementById(id).classList.add('bg-pink-600', 'hover:bg-pink-700', 'dark:bg-pink-900', 'dark-hover:bg-pink-800')
                    return true
                } else {
                    // document.getElementById(id).classList.add('bg-white', 'hover:bggray-200', 'dark:bg-gray-800', 'dark-hover:bg-gray-700')
                    return false
                }
            }
        }
    }
}
</script>

<style>
input[type="checkbox"] {
    transform : scale(1.5);
}
</style>