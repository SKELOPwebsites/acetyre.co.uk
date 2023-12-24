<template>
    <Head>
        <title>Choose your tyre size | Ace Tyres</title>
        <meta name="description" content="Products">
        <link rel="canonical" href="https://acetyres.co.uk/checkout/products">
    </Head>

    <div class="container border-x border-stone-700 font-montserrat">
        <div class="py-12 px-4 bg-stone-700">
            <div class="sm:w-[500px] w-full mx-auto" v-if="vehicleDetails && tyreRecordList">
                <h1 class="sm:text-3xl text-2xl text-center text-stone-300">Please check and confirm your <b>tyre size</b></h1>

                <div class="bg-stone-600 flex items-center sm:flex-row flex-col py-4 mt-10 rounded-lg shadow-lg shadow-stone-500">
                    <div class="mx-6 h-15 w-15 shrink-0 flex items-center justify-center rounded-full">
                        <img class="h-14 w-14" :src="'/images/manufacturer_logos/' + slugify(vehicleDetails.Make) + '.svg'">
                        <p class="sm:hidden block uppercase text-lg text-stone-300 font-light">Your Vehicle</p>
                    </div>
                    <div>
                        <p class="hidden sm:block uppercase text-lg text-stone-300 font-light">Your Vehicle</p>
                        <p class="mt-2 uppercase sm:text-lg text-base text-stone-300 font-bold sm:text-left text-center" v-text="vehicleDetails.BuildYear + ' ' + vehicleDetails.Make + ' ' + vehicleDetails.Model"></p>
                    </div>
                </div>

                <div class="mt-10 bg-stone-600 mx-auto shadow-lg shadow-stone-500 rounded-lg px-4 py-6">
                    <div class="border-b border-stone-500">
                        <div class="sm:w-[300px] w-64  mx-auto flex flex-col items-center justify-center">
                            <img class="w-full" src="/images/main/tyre-size-guide-300.webp" alt="Tyre Size Guide">
                        </div>
                    </div>
                    <div class="sm:w-[300px] w-64 mx-auto mt-4">
                        <p class="text-center sm:text-lg text-base font-semibold text-stone-300">Check the sidewall of your tyre and confirm your tyre size</p>
                    </div>
                    <div class="grid grid-cols-2 sm:gap-x-4 gap-x-0 sm:gap-y-0 gap-y-6 mt-10">
                        <div class="sm:col-span-1 col-span-2">
                            <h1 class="text-2xl text-center text-stone-300">Front</h1>
                            <div class="space-y-2 mt-4">
                                <div
                                    class="flex items-center pl-4 border border-stone-400 rounded select-none"
                                    v-for="(recordList, index) in tyreRecordList"
                                >
                                    <input type="radio" v-model="form.size" :value="'f'+recordList.Front.Tyre.Size" :id="recordList.Front.Tyre.Size + '-' + index" name="tyre-size" class="w-4 h-4 text-blue-600 bg-stone-300 border-stone-400">

                                    <label :for="recordList.Front.Tyre.Size + '-' + index" class="w-full py-4 ms-2 text-stone-300 grid grid-cols-3">

                                        <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Width</span>
                                            <b v-text="recordList.Front.Tyre.SectionWidth"></b>
                                        </span>
                                            <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Profile</span>
                                            <b v-text="recordList.Front.Tyre.AspectRatio"></b>
                                        </span>
                                            <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Rim</span>
                                            <b v-text="recordList.Front.Tyre.RimDiameter"></b>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-1 col-span-2">
                            <h1 class="text-2xl text-center text-stone-300">Rear</h1>
                            <div class="space-y-2 mt-4">
                                <div
                                    class="flex items-center pl-4 border border-stone-400 rounded select-none"
                                    v-for="(recordList, index) in tyreRecordList"
                                >
                                    <input type="radio" v-model="form.size" :value="'r'+recordList.Rear.Tyre.Size" :id="recordList.Rear.Tyre.Size + '-' + ((index + 1) * 2)" name="tyre-size" class="w-4 h-4 text-blue-600 bg-stone-300 border-stone-400">

                                    <label :for="recordList.Rear.Tyre.Size + '-' + ((index + 1) * 2)" class="w-full py-4 ms-2 text-stone-300 grid grid-cols-3">

                                        <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Width</span>
                                            <b v-text="recordList.Rear.Tyre.SectionWidth"></b>
                                        </span>
                                        <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Profile</span>
                                            <b v-text="recordList.Rear.Tyre.AspectRatio"></b>
                                        </span>
                                        <span class="col-span-1 flex flex-col items-center justify-center">
                                            <span class="text-xs text-stone-400">Rim</span>
                                            <b v-text="recordList.Rear.Tyre.RimDiameter"></b>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        :disabled="!sizeValid"
                        @click="submit"
                        :class="{'relative mt-4 flex items-center justify-center bg-blue-500 text-white w-full rounded outline-0 h-12 text-center font-montserrat': true, 'focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out':sizeValid, 'opacity-50 cursor-not-allowed': !sizeValid, 'button--loading': form.processing }"
                    >
                        <span v-if="!form.processing">Continue</span>
                    </button>
                </div>
            </div>

            <div class="w-[500px] mx-auto" v-else>
                <h1 class="text-3xl text-center text-stone-300">Please check and confirm your <b>tyre size</b></h1>

                <div class="bg-stone-600 flex items-center py-4 mt-10 rounded-lg shadow-lg shadow-stone-500">
                    <div class="mx-6 h-16 w-16 shrink-0 flex items-center justify-center bg-white rounded-full">
                        <img class="h-12 w-12" :src="'/images/manufacturer_logos/unknown-vehicle.svg'">
                    </div>
                    <div>
                        <p class="uppercase text-lg text-stone-300 font-light">Your Vehicle</p>
                        <p class="mt-2 uppercase text-lg text-stone-300 font-bold">No Vehicle Found</p>
                    </div>
                </div>

                <div class="mt-10 bg-stone-600 mx-auto shadow-lg shadow-stone-500 rounded-lg px-4 py-6">
                    <div class="border-b border-stone-500">
                        <div class="w-[300px] mx-auto flex flex-col items-center justify-center">
                            <img class="w-full" src="/images/main/tyre-size-guide-300.webp" alt="Tyre Size Guide">
                        </div>
                    </div>
                    <div class="w-[300px] mx-auto mt-4">
                        <p class="text-center text-lg font-semibold text-stone-300">Check the sidewall of your tyre and confirm your tyre size</p>
                    </div>
                    <TyreSizeForm />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import {Head, useForm, usePage, router} from "@inertiajs/vue3"
import {computed, ref, watch} from "vue";
import TyreSizeForm from "../../Shared/Main/TyreSizeForm.vue";

defineProps({
    vehicleDetails: {
        type: Object,
        required: false,
    },
    tyreRecordList: {
        type: Object,
        required: false,
    }
})

const sizeValid = computed(() => {
    return form.size != null
});

const form = useForm({
    size: null,
})

function submit() {
    if(sizeValid) {
        let url = form.size.replace(/\D+/g, '');

        router.get('/tyre/'+url);
    }
}

function slugify(str) {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}
</script>

<style scoped>
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
