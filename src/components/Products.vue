<style scoped>
   .layer {
      backdrop-filter: brightness(.9);
   }
</style>

<template>
    <section class="mt-24 mb-24">
        <Title>
            <template v-slot:title >
                <h1>Latest Product</h1>
            </template>
        </Title>
        <div class="text-center px-20">
            <p class="text-chatams text-xl font-semibold">
               Merchandise kami akan selalu update di Halaman ini, pembeliannya via Shoppee ya sob! 
            </p>
            <!-- Card wrapper -->
            <section class="flex justify-bettween gap-10 mt-20">
               <template v-for="(merch, index) in merchants" :key="index">
                  <!-- Card -->
                  <div>
                     <div class="rounded-2xl shadow-lg relative overflow-hidden">
                        <img :src="merch.img" class="w-full" :alt="merch.title" />
                        <div class="bg-gray-900 font-semibold text-gray-50 layer absolute left-0 bg-opacity-50 right-0 bottom-0 py-3 px-2">
                           BEM POLITEKNIK HASNUR {{ merch.title }}
                        </div>
                     </div>
                     <!-- Button -->
                     <button class="hover:bg-red-500 duration-300 bg-chatams shadow-lg text-gray-50 w-full rounded-xl mt-5 py-2 text-xl" type="button">
                        Rp {{ merch.price.toLocaleString() }}
                     </button>
                  </div>
               </template>
            </section>
            <CTA>
               <template v-slot:cta-title>Kunjungi Shoppee kami disini!</template>
            </CTA>
        </div>
    </section>
</template>

<script setup>
   import { ref } from 'vue'
   import Title from './Title.vue'
   import CTA from './CTA.vue'
   
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