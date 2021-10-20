<template>
    <section class="mt-24 mb-24">
        <Title>
            <template v-slot:title >
                <h1>Medsos</h1>
            </template>
        </Title>
        <div class="text-center">
            <p class="text-chatams text-xl font-semibold">Info terbaru akan lebih update di media sosial Instagram kami ya sob!</p>
            <img class="mx-auto mt-20" src="/phone.png" alt="">
            <CTA>
               <template v-slot:cta-title>Kunjungi instagram kami disini</template>
            </CTA>
        </div>
    </section>
</template>

<script setup>
   import Title from './Title.vue'
   import CTA from './CTA.vue'
</script>