<template>
   <Cover 
   img="/merch-cover.jpg" title="Merchandise"
   sub-title="Merchandise resmi dari kami untuk rakyat Indonesia!">
   </Cover>
   <Title>
      <template v-slot:title>
         <h1>Latest Product</h1>
      </template>
   </Title>
   <p class="mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Merchandise kami akan selalu update di Halaman ini, pembeliannya via Shoppee ya sob!
   </p>
   <!-- Card wrapper -->
   <section class="px-20 flex flex-wrap w-full mb-16 mx-auto justify-between gap-10 lg:gap-16 mt-20">
      <template v-for="(merch, index) in merchants" :key="index">
         <!-- Card -->
         <div class="w-5/12">
            <div class="rounded-2xl shadow-cstm relative overflow-hidden">
               <img :src="merch.img" class="w-full" :alt="merch.title" />
               <div class="bg-gray-900 text-center text-xl font-semibold text-gray-50 layer absolute left-0 bg-opacity-50 right-0 bottom-0 py-3 px-2">
                  BEM POLITEKNIK HASNUR {{ merch.title }}
               </div>
            </div>
            <!-- Button -->
            <button class="hover:bg-red-500 duration-300 bg-chatams shadow-lg text-gray-50 w-full rounded-xl mt-5 py-2 text-2xl" type="button">
               Rp {{ merch.price.toLocaleString() }}
            </button>
         </div>
      </template>
      <CTA>
         <template v-slot:cta-title>Kunjungi Shoppee kami disini!</template>
      </CTA>
   </section>
   <Footer></Footer>
</template>
<script setup>

   import Footer from '../components/Footer.vue'
   import Title from '../components/Title.vue'
   import Cover from '../components/Cover.vue'
   import CTA from '../components/CTA.vue'
   
   import { ref } from 'vue'
   const merchants = ref([
        {
           title: 'T-SHIRT',
           img: '/merch-1.jpg',
           price: 110000
        },
        {
           title: 'TOTE-BAG',
           img: '/merch-2.jpg',
           price: 120000
        },
        {
           title: 'BASEBALL CAP',
           img: '/merch-3.jpg',
           price: 80000
        },
        {
           title: 'MUG',
           img: '/merch-4.jpg',
           price: 90000
        }
      ])
</script>