<style scoped>
   img {
      z-index: -99;
   }
</style>

<template>
   <!-- splidejs -->
   <section class="px-1">
      <Splide class="mt-40" :options="options">
         <SplideSlide>
            <div class="w-6/12 ml-24 my-40">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute lg:-bottom-10 bottom-0 right-0 w-7/12" src="/caraousel-1.png" alt="caraousel-1">
         </SplideSlide>
         <SplideSlide>
            <div class="w-6/12 ml-24 mt-40">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Merchandise juga tersedia disini</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute bottom-0 right-0 w-6/12" src="/caraousel-2.png">
         </SplideSlide>
         <SplideSlide>
            <div class="w-6/12 ml-24 mt-40">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Kamu mau curhat?</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute lg:bottom-2/4 -bottom-1/4 left-0 right-0 w-full" src="/caraousel-3.png" alt="Sample 1">
         </SplideSlide>
      </Splide>
   </section>
</template>

<script setup>
   
   import { ref } from 'vue'
   const options = ref({
      rewind: true,
      autoplay: true
   })
   
</script>