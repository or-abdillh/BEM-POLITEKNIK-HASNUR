<template>
   <Carousel>
      <template v-slot:slide-1>
         <div class="slide-bottom">
            <h1 class="text-3xl text-gray-50 font-bold">PKKMB politeknik hasnur 2021 akan dilaksanakan secara hybrid</h1>
            <p class="text-xl font-medium text-gray-50 mt-4">Minggu, 12 September 2021</p>
         </div>
         <img src="/article-1.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-2>
         <div class="slide-bottom">
            <h1 class="text-3xl text-gray-50 font-bold">PKKMB politeknik hasnur dilaksanakan dengan lancar</h1>
            <p class="text-xl font-medium text-gray-50 mt-4">Rabu, 15 September 2021</p>
         </div>
         <img src="/article-2.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-3>
         <div class="slide-bottom">
            <h1 class="text-2xl text-gray-50 font-bold">okumenter PKKMB politkenik hasnur 2021</h1>
            <p class="text-xl font-medium mt-4 text-gray-50">Senin, 20 September 2021</p>
         </div>
         <img src="/article-3.jpg" class="w-full" alt="" />
      </template>
   </Carousel>
</template>

<script setup>
   
   import Carousel from '../components/Carousel.vue'
   
</script>