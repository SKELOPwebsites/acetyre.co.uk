<template>
    <Head>
        <title>Contact Us | Ace Tyres</title>
        <meta name="description" content="Contact Ace Tyres easily. Get mobile tyre fitting quotes or any other assistance you seek here!">
        <link rel="canonical" href="https://acetyres.co.uk/contact-us">
    </Head>

    <div class="container border-x border-stone-700">
        <div class="relative h-72">
            <div class="absolute bg-gradient-to-r from-stone-700 via-stone-700 via-30% to-transparent w-full h-full py-8 px-4 z-20">
                <div class="xl:w-5/12 sm:w-3/4 w-full">
                    <h1 class="mb-4 sm:text-4xl text-2xl tracking-tight font-extrabold text-white font-poppins dark:text-white">Contact The Team</h1>
                    <p class="mb-8 font-light text-white sm:text-xl dark:text-gray-400">
                        Connect with Ace Tyres today for a tire service that revolves around your convenience.
                        Visit us or reach out – our expert team is ready to ensure your journey stays on track.
                    </p>
                </div>
            </div>
            <MainCarousel />
        </div>


        <div class="px-3 bg-stone-700 py-10">
            <div class="flex md:flex-row flex-col-reverse md:items-start items-center w-full pb-5">
                <div class="md:w-5/12 w-full md:text-left text-center text-stone-300 md:m-0 mt-12 mb-6">
                    <h3 class="text-3xl mb-8">Points of Contact</h3>
                    <div class="mb-6">
                        <p class="text-lg font-bold mb-2">Support &amp; Inquiries</p>
                        <p>info@acetyres.co.uk</p>
                    </div>
                    <div>
                        <p class="text-lg font-bold mb-2">Telephone</p>
                        <p>0800 123123</p>
                    </div>
                </div>
                <div class="md:w-7/12 w-full">
                    <div class="bg-white shadow-xl shadow-stone-300 px-6 py-4 rounded-lg">
                        <template v-if="$page.props.success">
                            <p class="uppercase font-medium tracking-wide">Message sent successfully</p>
                            <p class="text-sm mt-2">Hold tight for our response soon!</p>

                            <Link href="/" class="block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150">Back to home</Link>
                        </template>
                        <template v-else>
                            <p class="text-sm text-gray-400 mb-4">Note: * fields are required</p>
                            <div class="mb-4">
                                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="fname">
                                    First Name <span class="text-red-500">*</span>
                                </label>

                                <input v-model="form.first_name" class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="fname" autocomplete="given-name" type="text">
                                <span v-if="$page.props.errors.first_name" v-text="$page.props.errors.first_name" class="text-xs text-red-500"></span>
                            </div>
                            <div class="mb-4">
                                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="lname">
                                    Last Name <span class="text-red-500">*</span>
                                </label>

                                <input v-model="form.last_name" class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="lname" autocomplete="family-name" type="text">
                                <span v-if="$page.props.errors.last_name" v-text="$page.props.errors.last_name" class="text-xs text-red-500"></span>
                            </div>
                            <div class="mb-4">
                                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="email">
                                    E-mail Address <span class="text-red-500">*</span>
                                </label>

                                <input v-model="form.email" class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="email" autocomplete="email" type="email">
                                <span v-if="$page.props.errors.email" v-text="$page.props.errors.email" class="text-xs text-red-500"></span>
                            </div>
                            <div class="mb-4">
                                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="phone">
                                    Phone Number
                                </label>

                                <input v-model="form.phone" class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="phone" type="text">
                                <span v-if="$page.props.errors.phone" v-text="$page.props.errors.phone" class="text-xs text-red-500"></span>
                            </div>
                            <div class="mb-4">
                                <label class="block font-medium sm:text-sm text-xs text-gray-700" for="comments">
                                    Comments <span class="text-red-500">*</span>
                                </label>

                                <textarea v-model="form.comments" id="comments" class="w-full py-2 px-3 block mt-1 min-h-[6rem] rounded shadow-sm outline-0 border border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25"></textarea>
                                <span v-if="$page.props.errors.comments" v-text="$page.props.errors.comments" class="text-xs text-red-500"></span>
                            </div>

                            <div class="flex items-center justify-end">
                                <button
                                    @click="submit"
                                    :disabled="form.processing"
                                    class="relative w-full h-[42px] bg-site-600 border border-transparent rounded-md hover:bg-site-500 active:bg-site-700 focus:outline-none focus:bg-site-700 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150"
                                    :class="{'button--loading': form.processing}"
                                >
                                    <span v-if="!form.processing" class="font-semibold text-sm text-white uppercase tracking-widest">SEND INQUIRY</span>
                                </button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {router, Link, Head, useForm} from "@inertiajs/vue3";
import { reactive } from "vue";
import MainCarousel from "/resources/js/Shared/Main/Carousel/MainCarousel.vue"

defineProps({
    errors: Object,
})

const form = reactive({
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    comments: null,
})

function submit() {
    // form.post('/contact', {
    //     preserveScroll: true,
    // })
    router.post('/contact', form, {
        preserveScroll: (page) => Object.keys(page.props.errors).length,
    });

}

</script>

<style scoped>

</style>
