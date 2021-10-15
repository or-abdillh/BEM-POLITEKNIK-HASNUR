<template>
    <section class="bg-white  px-10 py-6 pt-20 h-screen">
        <img src="/hero.png" class="absolute right-28 bottom-0">
        <div class="flex w-full items-center mt-40 gap-20">
            <i class="text-color-2 text-5xl fas fa-chevron-left"></i>
            <div class="w-5/12">
                <h1 class="text-5xl text-color-1 font-bold">Selamat datang di Website <br> BEM POLIHASNUR!</h1>
                <p class="text-3xl mt-4 text-color-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <i class="text-color-2 text-5xl fas fa-chevron-right absolute right-10"></i>
        </div>
        <div class="flex gap-5 absolute bottom-10 left-1/2" style="transform: translateX(-50%)">
            <i class="fas fa-circle text-3xl text-color-1"></i>
            <i class="fas fa-circle text-3xl text-color-1-disable"></i>
            <i class="fas fa-circle text-3xl text-color-1-disable"></i>
        </div>
    </section>
</template>

<style scoped>

    .text-color-1 {
        color: #114A82;
    }

    .text-color-1-disable {
        color: rgba(17, 74, 130, .8);
    }

    .text-color-2 {
        color: #FF5151
    }

</style>