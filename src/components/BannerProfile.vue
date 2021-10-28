<template>
   <section class="banner shadow-cstm">
      <img class="mt-2" :src="profile.poster" :class="profile.center ? 'ml-8' : ''" />
      <div class="content">
         <h1 class="font-semibold text-3xl mb-3">{{ profile.divisi }}</h1>
         <p class="font-medium text-xl">{{ profile.deskripsi }}</p>
      </div>
   </section>
</template>

<style scoped>
   
   .banner {
      @apply overflow-hidden w-10/12 mx-auto mb-8 rounded-xl flex gap-10 items-center;
      background: var(--sunset-orange);
   }
   
   .content {
      @apply mt-5 text-gray-50 mr-10;
   }
   
</style>

<script setup>
   
   const props = defineProps({
      profile: {
         type: Object,
         default: {
            divisi: 'Main title goes here',
            deskripsi: 'The description about title',
            poster: 'the image'
         }
      }
   })
   
</script>