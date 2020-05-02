<template>
  <div class="bg-fallout-blue dark:bg-gray-900 dark:text-white">
    <div class="container px-2 pb-20">
      <slot/>
    </div>

    <div id="dark-mode-toggle" class="fixed bg-yellow-500 hover:bg-yellow-600 dark:bg-indigo-900 dark-hover:bg-indigo-800 bottom-0 right-0 opacity-50 hover:opacity-70 rounded-tl z-50">

      <button v-if="!darkMode" @click="toggleDarkMode()" class="py-4 px-2 inline text-white transition duration-300 ease-in-out" title="Turn Dark Mode Off">
        <!-- <moon class="w-5 h-5"/> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      
      <button v-else @click="toggleDarkMode()" class="py-4 px-2 inline text-white transition duration-300 ease-in-out" title="Turn Dark Mode On">
        <!-- <sun class="w-5 h-5"/> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun w-5 h-5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>

      <!-- Dark Mode Debug: {{darkMode}} -->
      <!-- <p>$static.metadata.darkModeButtonToggle = {{$static.metadata.darkModeButtonToggle}}</p> -->
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode () {
      document.documentElement.classList.toggle('mode-dark')
      this.darkMode = !this.darkMode
    },
    checkDarkMode () {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.darkMode = true
        return true
      }
      this.darkMode = false
      return false
    }
  },
  mounted () {
    if (this.checkDarkMode()) {
      document.documentElement.classList.add('mode-dark')
    } else {
      document.documentElement.classList.remove('mode-dark')
    }
  }
}
</script>

<style>
body {
  margin: 0 !important;
}
</style>