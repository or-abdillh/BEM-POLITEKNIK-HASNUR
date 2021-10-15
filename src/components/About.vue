<template>
    <section id="about">
        <div class="w-3/12">
            <small class="text-3xl">Tentang</small>
            <br>
            <strong class="text-4xl mt-2">BEM Polihasnur</strong>
        </div>
        <div class="w-5/12 text-xl w-8/12">
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
                <h1 class="text-color-2">{{ item.num }}</h1>
                <h1 class="text-color-1">{{ item.title }}</h1>
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

    console.log(sosmedNum.value)

</script>

<style scoped>

    #about {
        background: #114A82;
        @apply px-20 py-28 text-gray-50 flex gap-20 items-center justify-between;
    }

    .text-color-1 {
        color: #114A82;
    }

    .text-color-2 {
        color: #FF5151
    }
</style>