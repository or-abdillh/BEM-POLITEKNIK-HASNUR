<template>
   <Cover 
   img="/about-cover.jpg" title="Tentang Kami" 
   sub-title="Tak kenal maka tak sayang! kenalan dulu yuk!">
   </Cover>
   
   <!-- Struktur Anggota -->
   <Title>
      <template v-slot:title>
         <h1 class="show">Struktur Anggota</h1>
      </template>
   </Title>
   <p class="show tracking-wider show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      <small class="text-sunset text-2xl">Kabinet Sinergi Koloborasi &nbsp;</small>
      <small class="text-2xl text-chatams">2020 / 2021</small>
   </p>
   <section class="my-10">
      <template v-for="(item, index) in BEM" :key="index">
         <section class="show mb-16 items-start flex-wrap flex justify-center gap-16">
            <template v-for="(profile, index) in item" :key="index">
               <CardProfile :profile="profile"></CardProfile>
            </template>
         </section>
      </template>
   </section>
   
   <!-- fungsionaris -->
   <Title>
      <template v-slot:title>
         <h1 class="show">Fungsionaris</h1>
      </template>
   </Title>
   <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Hmm sudah pada kenalan ? Sekarang kenalan lagi yuk sama job desk mereka.
   </p>
   
   <section>
      <template v-for="(profile, index) in fungsionaris" :key="index">
         <BannerProfile class="show" :profile="profile"></BannerProfile>
      </template>
   </section>
   
   <div class="show text-chatams text-2xl text-center font-medium w-10/12 mx-auto">
      <p>Dilantik pada tanggal : 21 Desember 2021</p>
      <p>Jumlah Kepengurusan: 29 Anggota</p>
      <template v-for="circle in 3">
         <i class="fa fa-circle text-sunset mr-4 my-5"></i>
      </template>
   </div>
   
   <Footer></Footer>
</template>

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