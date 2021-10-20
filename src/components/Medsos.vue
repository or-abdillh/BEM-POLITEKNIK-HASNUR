<template>
    <section class="mt-24 mb-24">
        <Title>
            <template v-slot:title >
                <h1>Medsos</h1>
            </template>
        </Title>
        <div class="text-center">
            <p class="text-sunset font-semibold">Info terbaru akan lebih update di media sosial Instagram kami ya sob!</p>
            <img class="mx-auto mt-20" src="/phone.png" alt="">
            <button type="button" class="bg-sunset text-gray-50 px-10 py-3 rounded-2xl mt-10 font-semibold">Kunjungi Instagram kami disini!</button> 
        </div>
    </section>
</template>

<script setup>
   import Title from './Title.vue'
</script>