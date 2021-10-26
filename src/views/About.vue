<template>
   <Cover 
   img="/about-cover.jpg" title="Tentang Kami" 
   sub-title="Tak kenal maka tak sayang! kenalan dulu yuk!">
   </Cover>
   <About></About>
   <!-- Visi -->
   <Title>
      <template v-slot:title>
         <h1>Visi</h1>
      </template>
   </Title>
   <p class="show mb-5 text-chatams text-xl font-semibold px-20 text-center">
      Mewujudkan BEM Polihasnur sebagai lembaga yang berjiwa kebersamaan serta melahirkan kader-kader banua yang memiliki Imtaq dan Iptek yang selaras.
   </p>
   
   <!-- Misi -->
   <Title>
      <template v-slot:title>
         <h1>Misi</h1>
      </template>
   </Title>
   <section class="px-16 justify-between gap-2 flex flex-wrap">
      <template v-for="(misi, index) in misi" :key="index">
         <div class="w-3/12 mb-16">
            <div class="text-chatams mb-5 flex gap-1 items-end">
               <h1 class="text-4xl font-semibold underline-cstm">0{{ index + 1 }}</h1>
               <i class="fa fa-circle text-xs"></i>
            </div>
            <p class="text-2xl text-chatams font-medium">
               {{ misi }}
            </p>
         </div>
      </template>   
   </section>
   
   <!-- Filosofi Logo -->
   <Title>
      <template v-slot:title>
         <h1>Filosofi Logo</h1>
      </template>
   </Title>
   <img src="/BEM.jpg" class="mx-auto w-5/12" alt="" />
    <section class="px-16 mt-10 justify-between gap-2 flex flex-wrap">
      <template v-for="(text, index) in artiLambang" :key="index">
         <div class="w-3/12 mb-16">
            <div class="text-chatams mb-5 flex gap-1 items-end">
               <h1 class="text-4xl font-semibold underline-cstm">0{{ index + 1 }}</h1>
               <i class="fa fa-circle text-xs"></i>
            </div>
            <p class="text-2xl text-chatams font-medium">
               {{ text }}
            </p>
         </div>
      </template> 
      <div class="w-3/12"></div>
   </section>
   <Footer></Footer>
</template>

<style scoped>
   
   .underline-cstm {
      text-decoration: underline 7px var(--sunset-orange);
      text-underline-offset: 8px;
   }
   
</style>

<script setup>
   
   import Cover from '../components/Cover.vue'
   import About from '../components/About.vue'
   import Title from '../components/Title.vue'
   import Footer from '../components/Footer.vue'
   
   //Import content
   import artiLambang from '../contents/artiLambang.js'
   import misi from '../contents/misi.js'
    
</script>