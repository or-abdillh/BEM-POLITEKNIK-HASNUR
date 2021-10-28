<template>
   <Cover 
   img="/article-cover.jpg" title="BEM Info"
   sub-title="Seputar informasi tentang kampus Politeknik Hasnur">
   </Cover>
   <Calendar>
      <template v-slot:sub-title>
         <p class="show mb-5 text-chatams text-2xl font-semibold px-20 text-center">
            Jangan sampai kelewatan event - event dari kami!
         </p>
      </template>
   </Calendar>
   <Title>
      <template v-slot:title>
         <h1 class="show">Artikel</h1>
      </template>
   </Title>
   <p class="show mb-5 text-chatams text-2xl font-semibold px-20 text-center">
      Seputar informasi tentang kampus Politeknik Hasnur   
   </p>
   <!-- Articles -->
   <section class="w-full px-20 mt-10">
      <template v-for="(article, index) in artikel" :key="index">
         <!-- Card -->
         <div class="show flex justify-center items-start gap-10 mb-20">
            <img :src="article.poster" class="w-5/12 lg:w-4/12 rounded-3xl shadow" />
            <div class="text-chatams">
               <h1 class="font-bold text-2xl">{{ article.title.toUpperCase() }}</h1>
               <p class="mt-2 font-light text-xl">{{ article.date }}</p>
               <p class="mt-4 mb-5 font-medium text-2xl">{{ article.description }}</p>
               <router-link to="/artikel" class="text-xl text-chatams pointer">Read more...</router-link>
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
   import artikel from '../contents/artikel.js'
   
</script>