<template>
    <header>
        <Header />

        <div class="h-14 w-full bg-stone-700 flex items-center justify-center">
            <h4 class="sm:text-2xl text-lg flex sm:flex-row flex-col items-center uppercase font-montserrat font-semibold glow">
                <span class="">Emergency Landline</span>
                <span class="sm:block hidden mx-4">-</span>
                <a class="underline sm:text-2xl text-2xl" href="tel:0800123123">0800 123123</a>
            </h4>
        </div>

        <div class="container items-center py-3 bg-stone-900 sm:grid hidden grid-cols-3 2xl:text-sm text-xs text-center border-x border-stone-700">
            <div class="col-span-1 flex xl:flex-row flex-col justify-center items-center space-x-1">
                <h5 class="text-stone-600">Mobile Tyre Fitting</h5>
                <span class="text-stone-300 xl:block hidden">-</span>
                <p class="text-stone-300">at work, home or on the roadside</p>
            </div>
            <div class="col-span-1 flex xl:flex-row flex-col justify-center items-center space-x-1">
                <h5 class="text-stone-600">All inclusive price</h5>
                <span class="text-stone-300 xl:block hidden">-</span>
                <p class="text-stone-300">what you see is what you pay</p>
            </div>
            <div class="col-span-1 flex xl:flex-row flex-col justify-center items-center space-x-1">
                <h5 class="text-stone-600">Open 24/7</h5>
                <span class="text-stone-300 xl:block hidden">-</span>
                <p class="text-stone-300">to provide assistance when needed</p>
            </div>
        </div>
    </header>

    <slot />

    <Footer />

</template>

<script setup>
import Header from "/resources/js/Shared/Main/Header.vue"
import Navbar from "/resources/js/Shared/Main/Navbar.vue"
import Footer from "/resources/js/Shared/Main/Footer.vue"

</script>

<style scoped>
.glow {
    color: #ffffff;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #dc2626, 0 0 20px #dc2626, 0 0 25px #dc2626, 0 0 30px #dc2626, 0 0 35px #dc2626;
    }
    to {
        text-shadow: 0 0 10px #fff, 0 0 15px #ef4444, 0 0 20px #ef4444, 0 0 25px #ef4444, 0 0 30px #ef4444, 0 0 35px #ef4444, 0 0 40px #ef4444;
    }
}
</style>
