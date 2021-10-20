<template>
    <section id="about" class="bg-sunset relative">
        <div class="w-3/12">
           <img src="/firtana.png" class="absolute w-3/12 bottom-0 left-0" />
        </div>
        <div class="text-xl w-8/12">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
        </div>
    </section>
    <section class="bg-white p-20 mt-0 flex justify-between">
        <template v-for="(item, index) in sosmedNum" :key="index">
            <div class="text-5xl text-center font-bold">
                <h1 class="text-sunset">{{ item.num }}</h1>
                <h1 class="text-chatams">{{ item.title }}</h1>
            </div>
        </template>
    </section>
</template>

<script setup>

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

<style scoped>

   #about {
      @apply px-20 py-20 text-gray-50 flex gap-10 items-center justify-between;
   }
</style>