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
            <!-- Nav link -->
            <div class="ml-10">
                <ul class="flex xl:gap-16 md:gap-5 w-full justify-between items-center">
                  <li class="link" @click="dropDown = false">
                     <router-link :to="{ name: 'home' }">Beranda</router-link> 
                  </li>
                  <!-- dropdown -->
                  <li class="link relative">
                     <small @click="dropDown = !dropDown" class="flex items-center gap-2">
                        Tentang
                        <i class="fa duration-300" :class="dropDown ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                     </small>
                     <ul v-if="dropDown" class="duration-300 absolute left-0 right-0 top-full rounded p-2 bg-chatams text-gray-50 text-xxs">
                        <li class="py-0">
                           BEM Polihasnur
                        </li>
                        <li class="py-0">
                           Struktur Pengurus
                        </li>
                     </ul>
                  </li> 
                  <li class="link" @click="dropDown = false">
                     <router-link :to="{ name: 'merchants' }">Merch</router-link>
                  </li> 
                  <li class="link" @click="dropDown = false">
                     <router-link :to="{ name: 'info' }">BEM INFO</router-link>
                  </li> 
                  <li class="link" @click="dropDown = false">
                     <router-link :to="{ name: 'contactUs' }">Hubungi Kami</router-link>
                  </li> 
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
   
   #navbar .navbar-wrapper {
     @apply z-10 fixed flex bg-white top-0 left-0 right-0 p-10;
   }
   
   /* Nav Active */
   .router-link-active {
      text-decoration: underline var(--sunset-orange) 5px;
      text-underline-offset: 5px;
   }
   
   .link {
      @apply text-lg mb-6 px-4 rounded py-2;
      color: var(--chatams-blue);
   }
   
   .link:hover {
      background: var(--chatams-blue);
      color: white;
   }
   
   .link:hover .router-link-active {
      text-decoration: none!important;
   }
   
   .text-xxs {
      font-size: .55rem;
      line-height: 1.25rem;
      text-decoration: underline white;
      text-underline-offset: 5px;
   }

</style>

<script setup>

   import { ref } from 'vue'
   
   const dropDown = ref(false)
</script>