<style scoped>
   img {
      z-index: -99;
   }
   
   .slide-wrapper {
      height: 40%;
   }
   
   @media screen(lg) {
      .slide-wrapper {
         height: 100vh;
      }
   } 
   
   
</style>

<template>
   <!-- splidejs -->
   <section class="px-1 mt-32 lg:mt-16">
      <Splide :options="options">
         <SplideSlide class="slide-wrapper lg:h-screen relative">
            <slot name="slide-1"></slot>
         </SplideSlide>
         <SplideSlide class="slide-wrapper">
            <slot name="slide-2"></slot>
         </SplideSlide>
         <SplideSlide class="slide-wrapper">
            <slot name="slide-3"></slot>
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