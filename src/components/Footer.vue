<style scoped>
   .footer-title {
      @apply mb-6;
      text-underline-offset: 8p;
      text-decoration: underline var(--sunset-orange) 6px;
   }
   
   .icon {
      @apply rounded-full p-2;
      background: var(--sunset-orange);
   }
   
   .icon-wrapper {
      @apply flex items-center gap-2 mt-2;
   }
   
</style>

<template>
   <section class="w-full gap-24 flex justify-between px-20 bg-chatams py-16">
      <!-- Alamat -->
      <div class="text-gray-50 w-4/12">
         <h1 class="text-3xl footer-title">Alamat</h1>
         <p class="text-xl">
            Ray V, JL.Brigjen H. hasan Basri, Handil Bakti, Kec. Alalak, Kabupaten Barito Kuala, Kalimantan Selatan 70582.   
         </p>
         <ul class="mt-5">
            <li class="icon-wrapper">
               <i class="icon fab fa-whatsapp"></i>   
               +6282385423122 (Salma)
            </li>
            <li class="icon-wrapper">
               <i class="icon fas fa-envelope"></i>
               bem.politeknik.hasnur@gmail.com
            </li>
            <li class="icon-wrapper">
               <i class="icon fab fa-instagram"></i>   
               bem.polihasnur
            </li>
            <li class="icon-wrapper">
               <i class="icon fab fa-youtube"></i>   
               BEM POLIHASNUR
            </li>
         </ul>
      </div>
      
      <!-- Link cepat -->
      <div class="text-gray-50 w-4/12">
         <h1 class="text-3xl footer-title">Link Cepat</h1>
         <ul class="text-2xl">
            <li>
               <router-link to="">Beranda</router-link>
            </li>
            <li>
               <router-link to="">Tentang</router-link>
            </li>
            <li>
               <router-link to="">Merch</router-link>
            </li>
            <li>
               <router-link to="">BEM INFO</router-link>
            </li>
            <li>
               <router-link to="">Hubungi Kami</router-link>
            </li>
         </ul>
      </div>
      
      <!-- Artikel -->
      <div class="text-gray-50 w-4/12">
         <h1 class="text-3xl footer-title">Artikel</h1>
         <ul>
            <li class="mb-4">
               <router-link class="font-semibold" to="">Dokumenter PKKMB POLITEKNIK HASNUR 2021</router-link>
               <p>Senin, 20 September 2021</p>
            </li>
            <li class="mb-4">
               <router-link class="font-semibold" to="">PKKMB POLITEKNIK HASNUR DILAKSANAKAN DENGAN LANCAR</router-link>
               <p>Rabu, 15 September 2021</p>
            </li>
            <li class="mb-4">
               <router-link class="font-semibold" to="">PKKMB POLITEKNIK HASNUR 2021 AKAN DILAKSANAKAN SECARA HYBRID</router-link>
               <p>Minggu, 12 September 2021</p>
            </li>
         </ul>
      </div>
   </section>
   <footer class="bg-gray-800 py-5 text-gray-50 text-xl text-center ">
      2021 © BEM POLITEKNIK HASNUR
   </footer>
</template>