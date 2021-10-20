<template>
   <!-- splidejs -->
   <section>
      <Splide class="mt-40" :options="options">
         <SplideSlide>
            <div class="w-6/12 ml-24 mt-40">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <img class="absolute bottom-0 right-16 w-4/12" src="/hero.png" alt="Sample 1">
         </SplideSlide>
         <SplideSlide>
            <img src="/hero.png" alt="Sample 2">
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