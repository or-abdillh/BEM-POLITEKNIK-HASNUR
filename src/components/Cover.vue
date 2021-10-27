<template>
   <section class="mt-36 lg:mt-18 relative">
      <img class="w-full" :src="img" />
      <div class="bg-gray-900 absolute inset-0 bg-opacity-50 flex items-center justify-center">
         <div class="text-white text-center">
            <h1 class="text-6xl mb-3 font-semibold">{{ title }}</h1>
            <p class="text-2xl px-20">{{ subTitle }}</p>
         </div>
      </div>
   </section>
</template>

<style scoped>
   .title-wrapper {
      transform: translateY(-100%);
   }
</style>

<script setup>
   
   const props = defineProps({
      img: {
         type: String
      },
      title: {
         type: String,
         default: 'Title goes here'
      },
      subTitle: {
         type: String,
         default: 'Sub title goes here'
      }
   })
   
</script>