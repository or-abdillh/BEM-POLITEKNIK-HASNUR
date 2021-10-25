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
                  <li class="link relative" :class="dropDown ? 'bg-chatams' : ''">
                     <small :class="dropDown ? 'text-gray-50' : ''" @click="dropDown = !dropDown" class="flex items-center gap-2">
                        Tentang
                        <i class="fa duration-300" :class="dropDown ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                     </small>
                     <ul v-if="dropDown" class="dropdown bg-chatams">
                        <li class="py-0 mb-3">
                           <router-link to="">BEM Polihasnur</router-link>
                        </li>
                        <li class="py-0 mb-2">
                           <router-link to="">Struktur Anggota</router-link>
                        </li>
                     </ul>
                  </li> 
                  <li class="link" @click="dropDown = false">
                     <router-link :to="{ name: 'merchants' }">Merch</router-link>
                  </li> 
                  <li class="link" @click="dropDown = false">
                     <router-link :class="isCurrentRoute ? 'router-link-active' : ''"  :to="{ name: 'info' }">BEM INFO</router-link>
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
   
   .link:active {
      background: var(--chatams-blue);
   }
   
   .link:hover {
      background: var(--chatams-blue);
      color: white;
   }
   
   .link:hover .router-link-active {
      text-decoration: none!important;
   }
   
   .text-xxs {
      text-decoration: underline white;
      text-underline-offset: 5px;
   }
   
   .dropdown {
      @apply duration-300 absolute left-0 right-0 top-full rounded py-2 px-3 text-gray-50 text-sm text-xxs;
      transform: translateY(-5px);
      width: 150%;
   }

</style>

<script setup>

   import { ref, computed } from 'vue'
   import { useRoute } from 'vue-router'
   
   //Init route
   const route = useRoute()
   
   //Get current route name
   const currentRoute = computed(() => route.name)
   
   //If currentRoute === artikel atau info
   const isCurrentRoute = computed(() => {
      if ( currentRoute.value === 'artikel' || currentRoute.value === 'info' ) return true
      else return false
   })
   
   const dropDown = ref(false)
</script>