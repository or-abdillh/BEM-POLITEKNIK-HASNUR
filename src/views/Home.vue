<template>
   <Carousel>
      <template v-slot:slide-1>
         <div class="slide z-20">
            <h1 class="text-5xl text-chatams text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
            <p class="text-3xl text-sunset mt-4 text-color-2">
               Untuk mempermudah informasi, kami menghadirkan website media informasi kepada para mahasiswa Poiteknik Hasnur
            </p>
         </div>
         <img class="z-10 absolute lg:-bottom-10 right-0 bottom-0 w-7/12 lg:w-6/12" src="/caraousel-1.png" alt="caraousel-1">
      </template>
      <template v-slot:slide-2>
         <div class="slide z-20">
               <h1 class="text-5xl text-chatams text-color-1 font-bold">Merchandise juga tersedia disini</h1>
               <p class="text-3xl text-sunset mt-4 text-color-2">Merchandise kami akan selalu update di Halaman ini, pembeliannya via Shoppee ya sob!</p>
            </div>
            <img class="z-10 absolute bottom-0 right-0 w-8/12" src="/caraousel-2.png">
      </template>
      <template v-slot:slide-3>
         <div class="slide z-20">
            <h1 class="text-5xl text-chatams text-color-1 font-bold">Kamu mau curhat?</h1>
            <p class="text-3xl text-sunset mt-4 text-color-2">Pengen curhat tapi bingung kemana? Tenang, temen - temen dari Kemendagri akan membantu semua permasalahan kamu disini!</p>
         </div>
         <img class="z-10 absolute -bottom-44 left-0 right-0 w-full" src="/caraousel-3.png" alt="Sample 1">
      </template>
   </Carousel>
   
   <!-- About -->
   <About></About>
   <!-- MEDSOS COUNT -->
   <section class="p-20 mt-0 flex justify-between">
        <template v-for="(item, index) in sosmedNum" :key="index">
            <div class="show text-5xl text-center font-bold">
                <h1 class="text-sunset">{{ item.num }}</h1>
                <h1 class="text-chatams">{{ item.title }}</h1>
            </div>
        </template>
    </section>
   <Calendar class="show"></Calendar>
   <Article class="show"></Article>
   <Medsos class="show"></Medsos>
   <ContactUs class="show"></ContactUs>
   <LatestVideo class="show"></LatestVideo>
   <Products class="show"></Products>
   <Footer class="show"></Footer>
</template>

<script setup>

   import Carousel from '../components/Carousel.vue'
   import About from '../components/About.vue'
   import Calendar from '../components/Calendar.vue'
   import Article from '../components/Article.vue'
   import Medsos from '../components/Medsos.vue'
   import ContactUs from '../components/ContactUs.vue'
   import LatestVideo from '../components/LatestVideo.vue'
   import Products from '../components/Products.vue'
   import Footer from '../components/Footer.vue'
   
   import { ref } from 'vue'

    const sosmedNum = ref([
        {
            num: 49,
            title: 'Subscriber'
        },
        {
            num: 1299,
            title: 'Followers'
        },
        {
            num: 30,
            title: 'Agenda'
        }
    ])
</script>