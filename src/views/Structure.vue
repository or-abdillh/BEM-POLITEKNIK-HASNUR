<template>
   <Cover 
   img="/about-cover.jpg" title="Tentang Kami" 
   sub-title="Tak kenal maka tak sayang! kenalan dulu yuk!">
   </Cover>
   
   <!-- Struktur Anggota -->
   <Title>
      <template v-slot:title>
         <h1>Struktur Anggota</h1>
      </template>
   </Title>
   <p class="tracking-wider show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      <small class="text-sunset text-2xl">Kabinet Sinergi Koloborasi &nbsp;</small>
      <small class="text-2xl text-chatams">2020 / 2021</small>
   </p>
   <section class="my-10">
      <template v-for="(item, index) in BEM" :key="index">
         <section class="mb-16 items-start flex-wrap flex justify-center gap-16">
            <template v-for="(profile, index) in item" :key="index">
               <CardProfile :profile="profile"></CardProfile>
            </template>
         </section>
      </template>
   </section>
   
   <!-- fungsionaris -->
   <Title>
      <template v-slot:title>
         <h1>Fungsionaris</h1>
      </template>
   </Title>
   <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Hmm sudah pada kenalan ? Sekarang kenalan lagi yuk sama job desk mereka.
   </p>
   
   <section>
      <template v-for="(profile, index) in fungsionaris" :key="index">
         <BannerProfile :profile="profile"></BannerProfile>
      </template>
   </section>
   
   <Footer></Footer>
</template>

<style scoped>
   
   
</style>

<script setup>
   
   import Cover from '../components/Cover.vue'
   import CardProfile from '../components/CardProfile.vue'
   import Title from '../components/Title.vue'
   import Footer from '../components/Footer.vue'
   import BannerProfile from '../components/BannerProfile.vue'
   
   //Import contents
   import BEM from '../contents/BEM.js'
   import fungsionaris from '../contents/fungsionaris.js'
</script>