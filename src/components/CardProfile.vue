<template>
   <section class="card">
      <div class="card-header" :class="profile.nama === 'Ari Firtana' ? 'relative' : ''">
         <img class="w-8/12" :class="profile.nama === 'Ari Firtana' ? 'absolute right-0 bottom-0' : ''" :src="profile.image" alt="" />   
      </div>
      <div class="card-footer">
         <div class="profile-btn">{{ profile.jabatan }}</div>
         <p class="mt-4 text-chatams font-semibold text-center">{{ profile.nama }}</p>
         <p class="text-chatams font-sm text-center">{{ profile.prodi }} {{ profile.angkatan }}</p>
      </div>
   </section>
</template>

<style scoped>
   
   .card {
      @apply w-3/12 h-full;
   }
   
   .card-header {
      @apply w-full px-1 pt-3 flex items-end justify-center rounded-xl shadow;
      background: var(--sunset-orange);
      min-height: 300px;
   }
   
   .card-footer {
      @apply w-full mt-3;
   }
   
   .profile-btn {
      @apply text-sm font-medium text-center py-2 px-1 rounded-xl shadow text-gray-50 w-full;
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