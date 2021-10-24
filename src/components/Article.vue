<template>
    <section class="bg-white mt-10">
        <Title>
            <template v-slot:title >
                <h1>Artikel</h1>
            </template>
        </Title>
        <div class="mt-16 px-16 flex gap-10 justify-between">
            <template v-for="(card, index) in articles" :key="index">
                <div class="overflow-hidden rounded-3xl shadow-xl relative">
                    <img class="w-full" :src="card.poster">
                    <div class="absolute inset-0 bg-gray-900 bg-opacity-25">
                        <div class="z-10 px-6 absolute bottom-10 text-gray-50">
                           <h1 @click="read(index)" class="text-xl font-semibold">{{ card.title.toUpperCase() }}</h1>
                           <p>{{ card.date }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>

   import Title from './Title.vue'
   import { ref } from 'vue'
   import { useRouter } from 'vue-router'
   
   //Init router
   const router = useRouter()
   
   //Read handler
   const read = index => {
      router.push({ name: 'artikel', params: { id: `article-${index + 1}` } })
   }
   
   const articles = ref([
         {
            title: 'PKKMB politeknik hasnur 2021 akan dilaksanakan secara hybrid',
            date: 'Minggu, 12 September 2021',
            poster: 'thumb-article-1.jpg'
         },
         {
            title: 'PKKMB politeknik hasnur dilaksanakan dengan lancar',
            date: 'Rabu, 15 September 2021',
            poster: 'thumb-article-2.jpg'
         },
         {
            title: 'dokumenter PKKMB politkenik hasnur 2021',
            date: 'Senin, 20 September 2021',
            poster: 'thumb-article-3.jpg'
         }
      ])
</script>