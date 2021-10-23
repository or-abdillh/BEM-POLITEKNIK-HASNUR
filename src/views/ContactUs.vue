<template>
   <Cover 
   img="/contact-cover.jpg" title="Hubungi Kami"
   sub-title="Pengen curhat tapi bingung kemana? Tenang, temen - temen dari Kemendagri akan membantu semua permasalahan kamu disini!"></Cover>
   <Title>
      <template v-slot:title>
         <h1>Hubungi Kami</h1>
      </template>
   </Title>
   <p class="mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Silahkan isi pertanyaan kamu disini ya temen - temen!
   </p>
   <!-- Form wrapper -->
   <section class="px-20 w-full mb-16 mx-auto justify-between gap-10 lg:gap-16 mt-20">
      <div class="w-full mb-10 flex gap-10">
         <input v-model="form.email" type="text" class="input-form" placeholder="Tuliskan email kamu disini" />
         <input v-model="form.nomor" type="text" class="input-form" placeholder="Tuliskan nomor kamu disini" />
      </div>
      <textarea v-model="form.pesan" class="input-form" rows="12" cols="40" placeholder="Tuliskan pesan kamu disini"></textarea>
      <CTA>
         <template v-slot:cta-title>Submit pertanyaan kamu disini</template>
      </CTA>
   </section>
   <GoogleMap></GoogleMap>
   <Footer></Footer>
</template>

<style scoped>
   
   .input-form {
      @apply w-full bg-gray-300 text-gray-900 px-4 py-4 rounded-2xl font-semibold;
   }
   
</style>

<script setup>

   import Footer from '../components/Footer.vue'
   import Title from '../components/Title.vue'
   import Cover from '../components/Cover.vue'
   import CTA from '../components/CTA.vue'
   import GoogleMap from '../components/GoogleMap.vue'
   import { ref } from 'vue'
   
   const form = ref({
      email: '',
      nomor: '',
      pesan: ''
   })
</script>