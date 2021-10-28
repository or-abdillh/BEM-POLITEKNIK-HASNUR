<template>
   <Cover 
   img="/contact-cover.jpg" title="Hubungi Kami"
   sub-title="Pengen curhat tapi bingung kemana? Tenang, temen - temen dari Kemendagri akan membantu semua permasalahan kamu disini!"></Cover>
   <Title>
      <template v-slot:title>
         <h1>Hubungi Kami</h1>
      </template>
   </Title>
   <p v-if="!isSuccess" class="show mb-5 text-chatams text-2xl font-semibold px-20 text-center">
      Silahkan isi pertanyaan kamu disini ya temen - temen!
   </p>
   <!-- Form wrapper -->
   <section v-if="!isSuccess" class="show px-20 w-full mb-16 mx-auto justify-between gap-10 lg:gap-16 mt-20">
      <div class="w-full mb-10 flex gap-10">
         <input v-model="form.email" type="email" class="input-form" placeholder="Tuliskan email kamu disini" />
         <input v-model="form.nomor" type="number" class="input-form" placeholder="Tuliskan nomor kamu disini" />
      </div>
      <textarea v-model="form.pesan" class="input-form" rows="12" cols="40" placeholder="Tuliskan pesan kamu disini"></textarea>
      <p class="text-center text-red-600 mt-3">{{ errorMsg }}</p>
      <CTA @click="validation()">
         <template v-slot:cta-title>Submit pertanyaan kamu disini</template>
      </CTA>
   </section>
   <!-- Success state -->
   <Success v-on:back-button="isSuccess = !isSuccess" v-if="isSuccess"></Success>
   <!-- Map -->
   <GoogleMap></GoogleMap>
   <Footer></Footer>
</template>

<style scoped>
   
   .input-form {
      @apply w-full text-gray-900 px-4 py-4 rounded-2xl font-semibold;
      background: #E2E2E2;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, .6);
   }
   
</style>

<script setup>

   import Footer from '../components/Footer.vue'
   import Title from '../components/Title.vue'
   import Cover from '../components/Cover.vue'
   import CTA from '../components/CTA.vue'
   import GoogleMap from '../components/GoogleMap.vue'
   import Success from '../components/contact-us/Success.vue'
   import { ref, reactive } from 'vue'
   
   //V model
   const form = reactive({
      email: '',
      nomor: '',
      pesan: ''
   })
   
   //Show Success state
   const isSuccess = ref(false)
   
   //Error message
   const errorMsg = ref('')
   
   //Validation form
   const validation = () => {
      if ( form.email === '' ) errorMsg.value = 'Anda lupa menginput email'
      else if ( form.nomor === '' ) errorMsg.value = 'Anda lupa menginput nomor'
      else if ( form.pesan === '' ) errorMsg.value = 'Anda lupa menginput pesan anda'
      else {
         setTimeout(() => {
            isSuccess.value = !isSuccess.value
            form.email = ''
            form.pesan = ''
            form.nomor = ''
            errorMsg.value = ''
         }, 500)
      }
   }
   
</script>