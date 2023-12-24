<template>
    <div class="grid grid-cols-2 mt-4 gap-x-1 gap-y-2">
        <div class="col-span-1">
            <select v-model="sizeForm.width" class="block font-montserrat lg:text-sm text-xs w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                <option>Width</option>
                <optgroup label="Common">
                    <option v-for="width in getCommonWidths()" :value="width" v-text="width"></option>
                </optgroup>
                <optgroup label="Other">
                    <option v-for="width in getOtherWidths()" :value="width" v-text="width"></option>
                </optgroup>
            </select>
        </div>
        <div class="col-span-1">
            <select v-model="sizeForm.profile" :disabled="!profiles" class="block font-montserrat lg:text-sm text-xs w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                <option>Profile</option>
                <option v-for="profile in profiles" :value="profile" v-text="profile"></option>
            </select>
        </div>
        <div class="col-span-1">
            <select v-model="sizeForm.rim" :disabled="!rims" class="block font-montserrat lg:text-sm text-xs w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                <option>Rim</option>
                <option v-for="rim in rims" :value="rim" v-text="rim"></option>
            </select>
        </div>
        <div class="col-span-1">
            <select v-model="sizeForm.speed" class="block font-montserrat lg:text-sm text-xs w-full py-2 sm:pl-4 pl-2 pr-9 bg-white border border-gray-300 rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none">
                <option value="">Speed - All</option>
                <option v-for="speed in speeds" :value="speed.value" v-text="speed.label"></option>
            </select>
        </div>
        <div class="col-span-2">
            <span class="block text-xs text-gray-400">We recommend customers to check the tyre size on the side wall of their tyre(s) before proceeding</span>
        </div>
        <div class="col-span-1">
            <div class="relative">
                <input
                    type="text"
                    v-model="sizeForm.postcode"
                    name="postcode"
                    autocomplete="postal-code"
                    placeholder="Postcode"
                    :class="{'block uppercase font-montserrat lg:text-sm text-xs w-full py-2.5 px-3 bg-white border rounded outline-0 focus:ring-2 focus:ring-wheelfit-600/30 focus:border-wheelfit-600 appearance-none': true, 'border-red-500':$page.props.flash.errors.postcode, 'border-gray-300':!$page.props.flash.errors.postcode}"
                >
                <svg v-if="$page.props.flash.errors.sizePostcode" xmlns="http://www.w3.org/2000/svg" class="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <span class="w-full block text-center text-xs text-red-500" v-if="$page.props.flash.errors.sizePostcode" v-text="$page.props.flash.errors.sizePostcode"></span>
        </div>
        <div class="col-span-1">
            <button
                :disabled="!sizeValid"
                @click="submitSizeForm"
                :class="{'relative flex items-center justify-center bg-blue-500 text-white w-full rounded outline-0 h-full lg:text-base text-sm text-center font-montserrat': true, 'focus:ring-4 focus:ring-wheelfit-600/30 focus:border-wheelfit-600/30 hover:bg-wheelfit-400 transition duration-150 ease-in-out':sizeValid, 'opacity-50 cursor-not-allowed': !sizeValid, 'button--loading': sizeForm.processing }"
            >
                <span v-if="!sizeForm.processing">Continue</span>
            </button>
        </div>
    </div>

</template>

<script setup>
import {useForm, usePage, router} from "@inertiajs/vue3"
import {computed, ref, watch} from "vue";

const tyre_sizes = computed(() => usePage().props.tyre_sizes)

const profiles = ref(null);
const rims = ref(null);
const speeds = ref([
    {label: 'T or better', value: 'T'},
    {label: 'H or better', value: 'H'},
    {label: 'V or better', value: 'V'},
    {label: 'W or better', value: 'W'},
]);

const sizeValid = computed(() => {
    return (typeof sizeForm.width === "number" && typeof sizeForm.profile === "number" && typeof sizeForm.rim === "number" && sizeForm.postcode)
});

const sizeForm = useForm({
    width: "Width",
    profile: "Profile",
    rim: "Rim",
    speed: "",
    postcode: null,
})

function submitSizeForm() {
    if(!sizeValid) return;

    let url = '/tyre/'+sizeForm.width+sizeForm.profile+sizeForm.rim+'?postcode='+sizeForm.postcode

    router.get(url)
}

watch(() => sizeForm.width, (width, prevWidth) => {
    if(width !== prevWidth){
        sizeForm.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
    }

    if(typeof width === "number") {
        profiles.value = [...new Set(tyre_sizes.value.filter((size) => size.width === width).map(size => size.profile))].sort();
    }else{
        sizeForm.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
    }
})
watch(() => sizeForm.profile, (profile, prevProfile) => {
    if(profile !== prevProfile){
        sizeForm.reset("rim")
        rims.value = null;
    }

    if(typeof sizeForm.width !== "number") {
        sizeForm.reset("profile", "rim")
        profiles.value = null;
        rims.value = null;
        return;
    }
    if(typeof profile === "number") {
        rims.value = [...new Set(tyre_sizes.value.filter((size) => (size.width === sizeForm.width && size.profile === profile)).map(size => size.rim))].sort();
    }else{
        sizeForm.reset("profile", "rim")
        rims.value = null;
    }
})

const commonWidths = [175, 185, 195, 205, 215, 225, 235, 245, 255];

function getCommonWidths() {
    return [...new Set(tyre_sizes.value.map(size => size.width))].filter(width => {
        return commonWidths.includes(width)
    });
}
function getOtherWidths() {
    return [...new Set(tyre_sizes.value.map(size => size.width))].filter(width => {
        return !commonWidths.includes(width)
    });
}

</script>

<style scoped>
select{
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'> <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /> </svg>");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.25rem;
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
