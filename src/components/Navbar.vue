<template>
    <section class="navbar">
       <!-- Brand -->
        <div class="navbar-brand">
           <img src="/logo.png" alt="">
           <div>
              <h1 class="text-chatams text-xl font-semibold">BEM POLITEKNIK HASNUR</h1>
              <p class="text-sunset font-medium">Kabinet Sinergi Koloborasi</p>
           </div>
        </div>
        
        <!-- Nav -->
        <ul class="w-7/12 flex justify-between items-stretch">
           <li class="link">
              <router-link :to="{ name: 'home' }">Beranda</router-link>
           </li>
           <li class="link relative" :class="dropDown ? 'bg-chatams' : ''">
              <small :class="dropDown ? 'text-gray-50' : '', dropDown ? 'none-underline' : ''" @click="dropDown = !dropDown" class="flex items-center gap-2">
                  <p class="text-lg" :class="isTentangRoute ? 'router-link-active' : ''">Tentang</p>
                  <i class="fa duration-300" :class="dropDown ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
               </small>
               <ul v-if="dropDown" class="dropdown bg-chatams">
                  <li class="py-0 mb-3 cursor-pointer">
                     <p @click="push('tentang')">BEM Polihasnur</p>
                  </li>
                  <li class="py-0 mb-2 cursor-pointer">
                     <p @click="push('struktur')">Struktur Anggota</p>
                  </li>
               </ul>
           </li>
           <li class="link">
             <router-link :to="{ name: 'merchants' }">Merch</router-link>
           </li>
           <li class="link">
             <router-link :class="isInfoRoute ? 'router-link-active' : ''"  :to="{ name: 'info' }">BEM INFO</router-link>
           </li>
           <li class="link">
             <router-link :to="{ name: 'contactUs' }">Hubungi Kami</router-link>
           </li>
        </ul>
    </section>
</template>

<style scoped>
   
   .navbar {
      @apply z-50 bg-white w-full px-10 fixed top-0 left-0 right-0 flex gap-20;
   }
   
   .navbar-brand {
      @apply flex gap-5 items-center my-10;
   }
   
   /* Nav Active */
   .router-link-active {
      text-decoration: underline var(--sunset-orange) 5px;
      text-underline-offset: 5px;
   }
   
   .link {
      @apply text-lg px-4 py-2 flex items-center;
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
   
   .none-underline .router-link-active {
      text-decoration: none!important;
   }
   
   .text-xxs {
      text-decoration: underline white;
      text-underline-offset: 5px;
   }
   
   .dropdown {
      @apply duration-300 absolute left-0 right-0 top-full py-3 pl-5 text-gray-50;
      transform: translateY(-5px);
      width: 180%;
      user-select: none;
   }

</style>

<script setup>

   import { ref, computed } from 'vue'
   import { useRoute, useRouter } from 'vue-router'
   
   //Init route & router
   const route = useRoute()
   const router = useRouter()
   
   //Get current route name
   const currentRoute = computed(() => route.name)
   
   //If currentRoute === artikel atau info
   const isInfoRoute = computed(() => {
      if ( currentRoute.value === 'artikel' || currentRoute.value === 'info' ) return true
      else return false
   })
   
   //If currentRoute === tentang atau struktur
   const isTentangRoute = computed(() => {
      if ( currentRoute.value === 'tentang' || currentRoute.value === 'struktur' ) return true
      else return false
   })
   
   //Dropdown action
   const dropDown = ref(false)
   
   //Handler for push router
   const push = path => {
      setTimeout(() => {
         router.push({ name: path })
      }, 500)
   }
</script>