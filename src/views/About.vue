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
   
   import { ref } from 'vue'
   
   const misi = ref([
      "Menyelenggarakan keorganisasian yang berpacu pada keimanan dan ketakwaan terhadap Tuhan YME.",
      "Meningkatkan kinerja anggota BEM Polihasnur  dengan membangun komunikasi dan manajemen yang baik dalam ruang lingkup kekeluargaan.",
      "Menjunjung tinggi almamater dalam berbagai kehidupan kemahasiswaan dan kehidupan bermasyarakat.",
      "Meningkatkan mutu serta pengelolaan Unit Kegiatan Mahasiswa dan organisasi-organisasi yang ada di Politeknik Hasnur untuk mengembangkan Soft Skill mahasiswa.",
      "Mengemban aspirasi mahasiswa Politeknik Hasnur dalam menciptakan kondisi kampus yang demokratis.",
      "Menampung dan menyalurkan aspirasi serta kepedulian mahasiswa terhadap persoalan -persoalan sosial kemasyarakatan."
   ])
    
   const artiLambang = ref([
      "Padi dan Kapas melambangkan kesejahteraan dan kenyamanan, diharapkan BEM Polihasnur dapat memberikan kesejahteraan dan keamanan serta menjadi wadah bagi seluruh aspirasi para mahasiswa Politeknik Hasnur.",
      "Bentuk perisai pada logo melambangkan BEM Polihasnur merupakan sebuah organisasi yang kuat dan dapat bertahan dalam kondisi sesulit apapun.",
      "Warna abu-abu pada kata BEM mempunyai arti profesionalitas, kepandaian, dan keseriusan.",
      "Warna kuning mempunyai arti energi sosial, kerjasama dan loyalitas.",
      "Bola dunia melambangkan Perguruan Tinggi Politeknik Hasnur yang dalam beberapa tahun ke depan akan menjadi pusat pendidikan terapan yang unggul di tingkat nasional dan internasional."
   ])
</script>