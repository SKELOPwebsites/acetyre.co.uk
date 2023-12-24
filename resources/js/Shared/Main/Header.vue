<template>
    <div class="bg-black">
        <div class="container select-none relative flex flex-row items-center sm:justify-between justify-start py-3">
            <div class="sm:w-[250px] w-52">
                <Link href="/">
                    <img
                        class="w-full"
                        src="/images/main/ace-cars.png"
                        alt="Ace Tyres"
                    >
                </Link>
            </div>

            <div>
                <Navbar />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Navbar from "./Navbar.vue";

</script>

<style scoped>

</style>
