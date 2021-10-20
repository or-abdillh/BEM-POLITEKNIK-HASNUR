<template>
    <section id="navbar">
        <div class="navbar-wrapper">
            <div class="flex gap-4 w-5/12 xl:w-3/12">
                <img src="/logo.png">
                <span>
                   <h1 class="text-chatams font-bold">BEM POLITEKNIK HASNUR</h1>
                   <p class="sub-title text-sm">Kabinet Sinergi Koloborasi</p>
                </span>
            </div>
            <div class="ml-10">
                <ul class="flex xl:gap-16 md:gap-5">
                     <li class="text-lg mb-6 text-chatams">Beranda</li> 
                     <li class="text-lg mb-6">
                        <small class="flex items-center gap-2 text-chatams">
                           Tentang
                           <i class="fa fa-chevron-down"></i>
                        </small>
                     </li> 
                     <li class="text-lg mb-6 text-chatams">Merch</li> 
                     <li class="text-lg mb-6 text-chatams">BEM Info</li> 
                     <li class="text-lg mb-6 text-chatams">Hubungi Kami</li> 
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

   #navbar .navbar-wrapper {
     @apply z-10 bg-white fixed flex  top-0 left-0 right-0 p-10;
   }

</style>

<script setup>

   import { ref } from 'vue'
   
   const currentTab = ref('Beranda')
</script>