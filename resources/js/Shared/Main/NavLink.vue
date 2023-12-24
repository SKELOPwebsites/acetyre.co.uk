<template>
    <Link :href="href" class="lg:text-sm text-[13px] text-center text-gray-100 border-gray-800 block">
        <slot></slot>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    href: String
})

</script>

<style scoped>

</style>
