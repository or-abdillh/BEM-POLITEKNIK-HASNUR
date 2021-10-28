<template>
    <section class="mt-24 mb-24">
        <Title>
            <template v-slot:title >
                <h1>Hubungi Kami</h1>
            </template>
        </Title>
        <div class="text-center px-10">
            <p class="text-2xl text-chatams font-semibold">
               Pengen curhat tapi bingung kemana? Tenang, temen - temen dari Kemendagri akan membantu semua permasalahan kamu disini!
            </p>
            <img class="mx-auto mt-20" src="/contact-us.png" alt="">
            <CTA>
               <template v-slot:cta-title>Ceritakan masalahmu disini</template>
            </CTA>
        </div>
    </section>
</template>

<script setup>
   import Title from './Title.vue'
   import CTA from './CTA.vue'
</script>