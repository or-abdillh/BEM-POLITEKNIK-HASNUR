<template>
   <Carousel>
      <template v-slot:slide-1>
         <div class="layer-slide"></div>
         <div class="slide-bottom">
            <h1 class="text-3xl text-gray-50 font-bold">{{ 'PKKMB politeknik hasnur 2021 akan dilaksanakan secara hybrid'.toUpperCase() }}</h1>
            <p class="text-2xl font-medium text-gray-50 mt-4">Minggu, 12 September 2021</p>
         </div>
         <img src="/article-1.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-2>
         <div class="layer-slide"></div>
         <div class="slide-bottom">
            <h1 class="text-3xl text-gray-50 font-bold">{{ 'PKKMB politeknik hasnur dilaksanakan dengan lancar'.toUpperCase() }}</h1>
            <p class="text-2xl font-medium text-gray-50 mt-4">Rabu, 15 September 2021</p>
         </div>
         <img src="/article-2.jpg" class="w-full" alt="" />
      </template>
      <template v-slot:slide-3>
         <div class="layer-slide"></div>
         <div class="slide-bottom">
            <h1 class="text-3xl text-gray-50 font-bold">{{ 'dokumenter PKKMB politkenik hasnur 2021'.toUpperCase() }}</h1>
            <p class="text-2xl font-medium mt-4 text-gray-50">Senin, 20 September 2021</p>
         </div>
         <img src="/article-4.jpg" class="w-full" alt="" />
      </template>
   </Carousel>
   <!-- Content -->
   <section class="show px-16 mt-10 mb-20">
      <p class="leading-relaxed text-chatams text-3xl">
         PKKMB Politeknik Hasnur 2021 resmi dibuka oleh ibu Linda Rahmawati, S.Si., M.P. selaku direktur Politeknik Hasnur, dalam laporannya PKKMB tahun ini dilaksanakan 3 hari ini secara hybrid yaitu 1 hari online dan 2 hari offline dengan harapan untuk mencegah penularan Covid-19 dan agar kegiatan tersebut dapat berjalan dengan baik dan semaksimal mungkin.
      </p>
      <Writer></Writer>
   </section>
   <!-- Artikel lainnya -->
   <section class="px-16 mb-10">
      <div class="flex items-center justify-between">
         <h1 class="text-5xl text-chatams font-bold">Artikel lainnya</h1>
         <hr class="line-singgle" />
      </div>
      <!-- Articles -->
      <section class="w-full mt-10">
         <template v-for="(article, index) in artikel" :key="index">
            <!-- Card -->
            <div v-if="index > 0" class="show mb-10 flex items-start gap-10">
               <img :src="article.poster" class="rounded-3xl shadow-cstm w-5/12 lg:w-4/12 shadow mb-10" />
               <div class="">
                  <h1 class="font-bold text-chatams text-2xl">{{ article.title.toUpperCase() }}</h1>
                  <p class="text-chatams text-xl font-light">{{ article.date }}</p>
                  <p class="text-2xl my-4 text-chatams font-medium">{{ article.description }}</p>
                  <router-link :to="{ name: 'artikel' }" class="text-chatams text-xl pointer">Read more...</router-link>
               </div>
            </div>
         </template>
      </section>
   </section>
   <Footer></Footer>
</template>

<script setup>
   
   import Footer from '../components/Footer.vue'
   import Carousel from '../components/Carousel.vue'
   import Writer from '../components/Writer.vue'
   import artikel from '../contents/artikel.js'
</script>