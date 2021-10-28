<template>
    <section class="mt-24 mb-24">
        <Title>
            <template v-slot:title >
                <h1>Latest Video</h1>
            </template>
        </Title>
        <div class="text-center">
            <p class="text-chatams text-2xl font-semibold">
               Video terbaru akan selalu kami upload di kanal YouTube kami!
            </p>
            <div class="flex justify-center mt-16">
               <iframe width="720" height="415" src="https://www.youtube.com/embed/i1crjJTSumk" title="Latest video from BEM Politeknik Hasnur" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
   import Title from './Title.vue'
   import CTA from './CTA.vue'
</script>