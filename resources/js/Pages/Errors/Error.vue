<template>

    <div class="container border-x border-stone-700 font-montserrat lg:py-32 md:py-20 py-12">

        <div class="w-full max-w-[635px] mx-auto flex items-center justify-center">
            <div class="bg-stone-700 border border-stone-600 flex flex-col items-center justify-center px-4 md:px-8 py-8 rounded-lg shadow-2xl shadow-stone-600">
                <p class="text-6xl md:text-7xl font-bold tracking-wider text-stone-300 text-center" v-text="status"></p>
                <p class="text-2xl md:text-3xl font-bold tracking-wider text-stone-100 mt-4 text-center" v-text="title"></p>
                <p class="text-stone-400 mt-4 pb-4 border-b-2 text-center" v-text="body"></p>
                <Link href="/" class="flex items-center space-x-2 bg-site-600 hover:bg-site-700 text-stone-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"

defineProps({
    status: String,
    title: String,
    body: String,
})
</script>

<style scoped>

</style>
