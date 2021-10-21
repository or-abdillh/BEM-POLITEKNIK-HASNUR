<template>
    <section id="navbar">
        <div class="navbar-wrapper">
            <div class="flex gap-4 w-5/12 xl:w-3/12">
                <img src="/logo.png">
                <span>
                   <h1 class="text-chatams font-bold">BEM POLITEKNIK HASNUR</h1>
                   <p class="text-sunset text-sm">Kabinet Sinergi Koloborasi</p>
                </span>
            </div>
            <div class="ml-10">
                <ul class="flex xl:gap-16 md:gap-5 items-center">
                  <li class="link">
                     <router-link :to="{ name: 'home' }">Beranda</router-link> 
                  </li>
                  <li class="link">
                     <small class="flex items-center gap-2">
                        Tentang
                        <i class="fa fa-chevron-down"></i>
                     </small>
                  </li> 
                  <li class="link">Merch</li> 
                  <li class="link">BEM Info</li> 
                  <li class="link">Hubungi Kami</li> 
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

   #navbar .navbar-wrapper {
     @apply z-10 bg-white fixed flex  top-0 left-0 right-0 p-10;
   }
   
   /* Nav Active */
   .router-link-active {
      border-bottom: 5px solid var(--sunset-orange);
   }
   
   .link {
      @apply text-lg mb-6;
      color: var(--chatams-blue);
   }
   
   .link:hover {
      background: var(--chatams-blue);
      color: white;
      @apply px-4 rounded py-2;
   }

</style>

<script setup>

   import { ref } from 'vue'
   
   const currentTab = ref('Beranda')
</script>