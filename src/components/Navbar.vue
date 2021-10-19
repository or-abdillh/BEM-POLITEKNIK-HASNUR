<template>
    <section id="navbar">
        <div class="navbar-wrapper">
            <div class="flex gap-4 w-5/12 lg:w-2/12">
                <img src="/logo.png">
                <span>
                   <h1 class="main-title font-bold">BEM POLITEKNIK HASNUR</h1>
                   <p class="sub-title text-sm">Kabinet Sinergi Koloborasi</p>
                </span>
            </div>
            <div class="ml-10">
                <ul class="flex lg:gap-20 md:gap-5">
                    <template v-for="(nav ,index) in navList" :key="index">
                        <li class="nav-link">{{ nav }}</li>
                    </template>      
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

    #navbar .navbar-wrapper {
        @apply z-10 bg-white fixed flex  top-0 left-0 right-0 p-10;
    }

    #navbar .main-title {
        color: #114A82;
    }

    #navbar .sub-title {
        color: #FF5151;
    }

    #navbar .nav-link {
        @apply text-lg mb-6;
        color: #124B83;
    }
</style>

<script setup>

    import { ref } from 'vue'

    //Navbar list
    const navList = ref(['Beranda', 'Tentang', 'Merch', 'Aspirasi Mahasiswa', 'Artikel', 'Hubungi Kami'])

    console.log('hello')
</script>