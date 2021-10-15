<template>
    <section class="bg-white mt-10">
        <Title>
            <template v-slot:title >
                <h1>Article</h1>
            </template>
        </Title>
        <div class="mt-16 px-20 flex gap-10 justify-between">
            <template v-for="card in 3" :key="card">
                <div class="overflow-hidden relative">
                    <img src="/photo-example.png">
                    <div class="z-10 px-10 absolute bottom-10 text-gray-50">
                        <p class="font-2xl">PKKMB Politeknik Hasnur 2021</p>
                        <p>Rabu, 22 Oktober 2021</p>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>

    import Title from './Title.vue'

</script>