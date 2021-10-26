<template>
   <section class="card">
      <div class="card-header" :class="profile.nama === 'Ari Firtana' ? 'justify-end' : 'justify-center'">
         <img class="w-8/12 mt-5" :src="profile.image" alt="" />   
      </div>
      <div class="card-footer">
         <div class="profile-btn">{{ profile.jabatan }}</div>
         <p class="mt-4 text-chatams font-semibold ">{{ profile.nama }}</p>
         <p class="text-chatams font-sm ">{{ profile.prodi }} {{ profile.angkatan }}</p>
      </div>
   </section>
</template>

<style scoped>
   
   .card {
      @apply w-3/12 h-full;
   }
   
   .card-header {
      @apply w-full px-1 flex items-end rounded-xl shadow-xl;
      background: var(--sunset-orange);
   }
   
   .card-footer {
      @apply w-full mt-3 text-center;
   }
   
   .profile-btn {
      @apply text-sm font-medium shadow-xl text-center py-2 px-1 rounded-xl text-gray-50 w-full;
      background: var(--chatams-blue);
   }
</style>

<script setup>
   
   const props = defineProps({
      profile: {
         type: Object
      }
   })
   
</script>