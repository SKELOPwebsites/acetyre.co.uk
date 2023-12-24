<template>
    <div>
        <div class="relative h-72">
            <div class="absolute bg-gradient-to-r from-stone-700 via-stone-700 via-30% to-transparent w-full h-full py-8 px-4 z-20">
                <div class="xl:w-5/12 sm:w-3/4 w-full">
                    <h1 class="mb-4 sm:text-4xl text-2xl tracking-tight font-extrabold text-white font-poppins dark:text-white">Mobile Tyre Fitting</h1>
                    <p class="mb-8 font-light text-white sm:text-xl dark:text-gray-400">
                        Elevate your convenience with Ace Tyres – your nationwide on-the-go tyre fitting experts.
                        Whether it's an emergency on the roadside, at home, or at work, we deliver same-day solutions, ensuring you stay on track with ease.
                    </p>
                </div>
            </div>
            <MainCarousel />
        </div>
        <div class=" bg-stone-700 overflow-hidden grid grid-cols-12 items-start justify-center">
            <div class="xl:col-span-4 sm:col-span-5 col-span-12 h-full bg-site-400 relative md:py-8 py-4 px-4">
                <div class="flex flex-col h-full relative z-20">
                    <h3 class="mb-4 2xl:text-3xl text-2xl tracking-tight font-extrabold text-stone-700 font-poppins dark:text-white">Search by Vehicle</h3>

                    <p class="font-open-sans text-stone-700 xl:text-lg text-base tracking-wide">Enter your vehicle registration and we'll find your tyre size.</p>
                    <div class="relative mt-auto">
                        <input
                            v-model="regForm.registration"
                            name="registration"
                            class="car-registeration outline-0 py-1 pr-4 pl-8 w-full font-number-plate lg:text-3xl text-2xl rounded border border-black relative uppercase"
                            type="text"
                        >
                        <span class="unit font-bold block w-[30px] h-full bg-[#063298] absolute top-0 rounded-l leading-[60px] pl-1 text-[#f8d038]">GB</span>
                    </div>
                    <div class="grid grid-cols-2 gap-x-1 mt-2">
                        <div class="col-span-1">
                            <div class="relative">
                                <input
                                    type="text"
                                    v-model="regForm.postcode"
                                    id="postcode"
                                    name="postcode"
                                    autocomplete="postal-code"
                                    placeholder="Postcode"
                                    :class="{'block uppercase font-montserrat lg:text-sm text-xs w-full py-2.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none': true, 'border-red-500':$page.props.flash.errors.postcode, 'border-gray-300':!$page.props.flash.errors.postcode}"
                                >
                                <svg v-if="$page.props.flash.errors.regPostcode" xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <button
                                :disabled="!regValid"
                                @click="submitRegForm"
                                :class="{'relative flex items-center justify-center bg-blue-500 text-white w-full rounded outline-0 h-full lg:text-base text-sm text-center font-montserrat': true, 'focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out': regValid, 'opacity-50 cursor-not-allowed': !regValid, 'button--loading': regForm.processing }"
                            >
                                <span v-if="!regForm.processing">Continue</span>
                            </button>
                        </div>
                    </div>
                    <span class="w-full block text-end text-xs text-red-500" v-if="$page.props.flash.errors.registration" v-text="$page.props.flash.errors.registration"></span>
                </div>

                <div class="sm:block hidden w-0 h-0 border-b-[550px] border-b-transparent border-l-[70px] border-l-site-400 absolute top-0 -right-10 z-10 box-shadow"></div>
            </div>
            <div class="xl:col-span-5 sm:col-span-7 col-span-12 h-full relative lg:pl-32 md:pl-28 sm:pl-24 pl-4 pr-4 md:py-8 py-4">
                <img class="absolute -left-14 top-1/2 -translate-y-[45%] md:w-60 w-56 md:rotate-[95deg] rotate-90 sm:block hidden" src="/images/main/tyre-size-guide-300.webp" alt="Tyre Size Guide">

                <h3 class="mb-4 2xl:text-3xl sm:text-2xl text-lg tracking-tight font-extrabold text-white font-poppins dark:text-white z-20 relative">Search by Tyre Size</h3>

                <div class="z-20 relative">
                    <TyreSizeForm />
                </div>

                <div class="xl:block hidden w-0 h-0 border-b-[550px] border-b-transparent border-l-[70px] border-l-stone-700 absolute top-0 -right-10 z-10 box-shadow"></div>
            </div>
            <div class="col-span-3 h-full bg-stone-900 relative pl-12 pr-4 py-8 xl:flex hidden flex-col">
                <p class="text-xl uppercase font-montserrat font-semibold text-red-600">Need Tyres NOW?</p>

                <p class="mt-2 font-light text-white text-lg dark:text-gray-400">
                    For urgent tyre fitting, or emergency situations, please dial <a class="underline" href="tel:0800123123">0800 123123</a>
                </p>

                <a class="mt-auto flex items-center justify-center bg-red-600 text-white w-full rounded outline-0 h-10 text-center font-montserrat" href="tel:0800123123">
                    <svg data-v-8fe86598="" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path data-v-8fe86598="" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    0800 123123
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import MainCarousel from "/resources/js/Shared/Main/Carousel/MainCarousel.vue"
import TyreSizeForm from "/resources/js/Shared/Main/TyreSizeForm.vue"

const regValid = computed(() => {
    return (regForm.registration && regForm.postcode)
});

const regForm = useForm({
    registration: null,
    postcode: null,
})

function submitRegForm() {
    if(!regValid) return

    regForm.post('/choose-tyre-size')
}
</script>

<style scoped>

.car-registeration{
    background: linear-gradient(to bottom, #f8d038 0%,#f5ca2e 100%);
}
.unit:after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 7px;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    border: 1px dashed #f8d038;
}
.button--loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}

</style>
