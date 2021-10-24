<template>
   <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Pertanyaan kamu sudah terkirim ke email kami, tunggu beberapa hari untuk pesan balasan kami di email kamu ya sob !  
   </p>
   <section class="show px-20 w-full mb-16 mx-auto justify-between gap-10 lg:gap-16 mt-20">
      <img src="/success-aspirasi.png" class="mx-auto" alt="" />
      <CTA @click="backBtn()">
         <template v-slot:cta-title>
            Kembali ke menu ini Aspirasimu
         </template>
      </CTA>
   </section>
</template>

<script setup>
   import CTA from '../CTA.vue'
   
   //Define emits
   const emits = defineEmits(['back-button'])
   
   //Back btn handler
   const backBtn = () => emits('back-button')
   
</script>