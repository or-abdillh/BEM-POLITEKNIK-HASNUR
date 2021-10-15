<template>
    <section id="title">
        <hr class="line"> 
        <slot name="title">

        </slot>
        <hr class="line"> 
    </section>
</template>

<style scoped>

    #title {
        @apply text-5xl font-black text-center px-20 py-10 flex gap-20 w-full items-center justify-between;
        color: #114A82;
     }

     .line {
         @apply bg-red-400 w-4/12 rounded;
         color: #FF5151;
         height: 6px;
     }

</style>