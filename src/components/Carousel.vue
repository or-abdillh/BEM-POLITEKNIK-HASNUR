<style scoped>
   img {
      z-index: -99;
   }
   
   .slide-wrapper {
      height: 40vh;
   }
   
   @media screen(lg) {
      .slide-wrapper {
         height: 100vh;
      }
   } 
   
   .slide {
      @apply w-6/12 top-2/4 absolute left-20;
      transform: translateY(-50%);
   }
</style>

<template>
   <!-- splidejs -->
   <section class="px-1 mt-20 lg:mt-10">
      <Splide :options="options">
         <SplideSlide class="slide-wrapper lg:h-screen relative">
            <div class="slide">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute lg:-bottom-10 right-0 bottom-0 w-7/12 lg:w-6" src="/caraousel-1.png" alt="caraousel-1">
         </SplideSlide>
         <SplideSlide class="slide-wrapper">
            <div class="slide">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Merchandise juga tersedia disini</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute bottom-0 right-0 w-8/12" src="/caraousel-2.png">
         </SplideSlide>
         <SplideSlide class="slide-wrapper">
            <div class="slide">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Kamu mau curhat?</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute -bottom-44 left-0 right-0 w-full" src="/caraousel-3.png" alt="Sample 1">
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
   
   const prevBtn = ref(null)
   const nextBtn = ref(null)
   
</script>