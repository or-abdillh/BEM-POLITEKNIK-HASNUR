<template>
   <Carousel>
      <template v-slot:slide-1>
         <div class="slide">
            <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
            <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
         <img src="/article-1.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-2>
         <div class="slide">
            <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
            <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
         <img src="/article-2.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-3>
         <div class="slide">
            <h1 class="text-5xl text-chatams text-color-1 font-bold">Kamu mau curhat?</h1>
            <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         </div>
         <img src="/article-3.jpg" class="w-full" alt="" />
      </template>
   </Carousel>
</template>

<script setup>
   
   import Carousel from '../components/Carousel.vue'
   
</script>