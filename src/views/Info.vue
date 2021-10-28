<template>
   <Cover 
   img="/article-cover.jpg" title="BEM Info"
   sub-title="Seputar informasi tentang kampus Politeknik Hasnur">
   </Cover>
   <Calendar>
      <template v-slot:sub-title>
         <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
            Jangan sampai kelewatan event - event dari kami!
         </p>
      </template>
   </Calendar>
   <Title>
      <template v-slot:title>
         <h1 class="show">Artikel</h1>
      </template>
   </Title>
   <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Seputar informasi tentang kampus Politeknik Hasnur   
   </p>
   <!-- Articles -->
   <section class="w-full px-20 mt-10">
      <template v-for="(article, index) in articles" :key="index">
         <!-- Card -->
         <div class="show flex justify-center items-start gap-10 mb-20">
            <img :src="article.poster" class="w-5/12 rounded-3xl shadow" />
            <div class="text-chatams">
               <h1 class="font-bold">{{ article.title.toUpperCase() }}</h1>
               <p class="mt-2 font-light">{{ article.date }}</p>
               <p class="mt-4 mb-5 font-medium">{{ article.description }}</p>
               <router-link to="/artikel" class="text-chatams pointer">Read more...</router-link>
            </div>
         </div>
      </template>
   </section>
   <Footer></Footer>
</template>
<script setup>

   import Footer from '../components/Footer.vue'
   import Title from '../components/Title.vue'
   import Calendar from '../components/Calendar.vue'
   import Cover from '../components/Cover.vue'
   
   import { ref } from 'vue'
   
   const articles = ref([
         {
            title: 'PKKMB politeknik hasnur 2021 akan dilaksanakan secara hybrid',
            date: 'Minggu, 12 September 2021',
            description: 'PKKMB Politeknik Hasnur 2021 resmi dibuka oleh ibu Linda Rahmawati, S.Si, M.P selaku direktur Politeknik Hasnur, dalam laporannya PKKMB...',
            poster: 'article-1.jpg'
         },
         {
            title: 'PKKMB politeknik hasnur dilaksanakan dengan lancar',
            date: 'Rabu, 15 September 2021',
            description: 'PKKMB Politeknik Hasnur 2021 resmi dibuka oleh ibu Linda Rahmawati, S.Si, M.P selaku direktur Politeknik Hasnur, dalam laporannya PKKMB...',
            poster: 'article-2.jpg'
         },
         {
            title: 'dokumenter PKKMB politkenik hasnur 2021',
            date: 'Senin, 20 September 2021',
            description: 'PKKMB Politeknik Hasnur 2021 resmi dibuka oleh ibu Linda Rahmawati, S.Si, M.P selaku direktur Politeknik Hasnur, dalam laporannya PKKMB...',
            poster: 'article-3.jpg'
         }
      ])
</script>