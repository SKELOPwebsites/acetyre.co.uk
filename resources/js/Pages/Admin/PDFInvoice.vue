<template>
    <Head>
        <title>PDF Invoice</title>
    </Head>
    <div class="container">
        <div class="w-full mx-auto pt-8">
            <div class="flex justify-center items-center space-x-4 mb-8">
                <p class="font-semibold text-3xl text-center">PDF Invoice</p>
<!--                <button-->
<!--                    @click="test()"-->
<!--                    class="relative mt-auto w-24 rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out"-->
<!--                >-->
<!--                    <span>Test</span>-->
<!--                </button>-->
            </div>

            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg">

                    <span class="block font-semibold text-lg text-gray-700">Customer Details</span>
                    <div class="mt-4">
                        <Label :required="true">Name/Company</Label>
                        <Input
                            v-model="form.name"
                            type="text"
                            id="name"
                        />
                        <span class="text-xs text-red-500" v-if="errors.name" v-text="errors.name"></span>
                    </div>
                    <div class="mt-2">
                        <Label :required="true">Phone</Label>
                        <Input
                            v-model="form.phone"
                            type="text"
                            id="phone"
                        />
                        <span class="text-xs text-red-500" v-if="errors.phone" v-text="errors.phone"></span>
                    </div>
                    <div class="mt-2">
                        <Label :required="true">Email</Label>

                        <Input
                            v-model="form.email"
                            type="text"
                            id="email"
                        />
                        <span class="text-xs text-red-500" v-if="errors.email" v-text="errors.email"></span>
                    </div>
                    <div class="mt-2">
                        <Label>Address</Label>

                        <Input
                            v-model="form.address"
                            type="text"
                            id="address"
                            class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                        />
                    </div>
                    <div class="flex items-start space-x-2 mt-2">
                        <div class="w-1/2">
                            <Label>Town/City</Label>

                            <Input
                                v-model="form.town"
                                type="text"
                                id="town"
                            />
                            <span class="text-xs text-red-500" v-if="errors.town" v-text="errors.town"></span>
                        </div>
                        <div class="w-1/2">
                            <Label>Postcode</Label>
                            <Input
                                v-model="form.postcode"
                                type="text"
                                id="postcode"
                                class="uppercase"
                            />
                            <span class="text-xs text-red-500" v-if="errors.postcode" v-text="errors.postcode"></span>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg">
                    <span class="block font-semibold text-lg text-gray-700">Fitting Details</span>
                    <div class="mt-4">
                        <Label>Address</Label>

                        <Input
                            v-model="form.fitting_address"
                            type="text"
                            id="fitting_address"
                        />
                        <span class="text-xs text-red-500" v-if="errors.fitting_address" v-text="errors.fitting_address"></span>
                    </div>
                    <div class="flex items-start space-x-2 mt-2">
                        <div class="w-1/2">
                            <Label>Town/City</Label>

                            <Input
                                v-model="form.fitting_town"
                                type="text"
                                id="fitting_town"
                            />
                            <span class="text-xs text-red-500" v-if="errors.fitting_town" v-text="errors.fitting_town"></span>
                        </div>
                        <div class="w-1/2">
                            <Label>Postcode</Label>

                            <Input
                                v-model="form.fitting_postcode"
                                type="text"
                                id="fitting_postcode"
                                class="uppercase"
                            />
                            <span class="text-xs text-red-500" v-if="errors.fitting_postcode" v-text="errors.fitting_postcode"></span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <Label>Car Registration</Label>

                        <Input
                            v-model="form.registration"
                            type="text"
                            id="registration"
                            class="uppercase"
                        />
                        <span class="text-xs text-red-500" v-if="errors.registration" v-text="errors.registration"></span>
                    </div>
                    <div class="mt-2">
                        <Label :required="true">Call-out Type</Label>

                        <div class="mt-2 flex flex-row items-center space-x-4" id="extra_load">
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="next_day" value="Next Day" v-model="form.callout_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="next_day">Next Day</label>
                            </div>
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="same_day" value="Same Day" v-model="form.callout_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="same_day">Same Day</label>
                            </div>
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="emergency" value="Emergency" v-model="form.callout_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="emergency">Emergency</label>
                            </div>
                        </div>
                        <span class="text-xs text-red-500" v-if="errors.callout_type" v-text="errors.callout_type"></span>
                    </div>
                </div>

                <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg">
                    <span class="block font-semibold text-lg text-gray-700">Tyre Details</span>
                    <div class="relative mt-4">
                        <div class="absolute -right-6 bottom-2">
                            <button @click="addTyre" class="flex items-center justify-center p-0 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-start space-x-2">
                            <div class="w-4/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Tyre
                            </span>
                            </div>
                            <div class="w-1/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Qty
                            </span>
                            </div>
                            <div class="w-1/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Total
                            </span>
                            </div>
                        </div>
                        <div v-for="(tyre, index) in form.tyres" class="relative flex items-start" :key="index">
                            <button @click="deleteTyre(index)" class="absolute -left-5 bottom-2.5 text-red-500 flex items-center justify-center p-0 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div class="w-4/6 mr-2">
                                <Input
                                    v-model="tyre.name"
                                    type="text"
                                />
                            </div>
                            <div class="w-1/6 mr-2">
                                <Input
                                    v-model="tyre.qty"
                                    type="number"
                                />
                            </div>
                            <div class="w-1/6">
                                <Input
                                    v-model="tyre.total"
                                    type="number"
                                    placeholder="£"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 bg-white px-6 py-4 rounded-lg shadow-lg">
                    <span class="block font-semibold text-lg text-gray-700">Service Charges</span>
                    <div class="relative mt-4">
                        <div class="absolute -right-6 bottom-2">
                            <button @click="addItem" class="flex items-center justify-center p-0 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-start space-x-2">
                            <div class="w-4/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Extra Service
                            </span>
                            </div>
                            <div class="w-1/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Qty
                            </span>
                            </div>
                            <div class="w-1/6">
                            <span class="block font-medium sm:text-sm text-xs text-gray-700">
                                Total
                            </span>
                            </div>
                        </div>
                        <div v-for="(item, index) in form.items" class="relative flex items-start" :key="index">
                            <button @click="deleteItem(index)" class="absolute -left-5 bottom-2.5 text-red-500 flex items-center justify-center p-0 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div class="w-4/6 mr-2">
                                <Input
                                    v-model="item.name"
                                    type="text"
                                />
                            </div>
                            <div class="w-1/6 mr-2">
                                <Input
                                    v-model="item.qty"
                                    type="number"
                                />
                            </div>
                            <div class="w-1/6">
                                <Input
                                    v-model="item.total"
                                    type="number"
                                    placeholder="£"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 flex flex-row items-start space-x-2">
                        <div class="w-1/3">
                            <Label>Fitting</Label>

                            <Input
                                v-model="form.fitting"
                                type="text"
                                id="fitting"
                                placeholder="£"
                            />
                        </div>
                        <div class="w-1/3">
                            <Label>Call-out</Label>

                            <Input
                                v-model="form.callout"
                                type="text"
                                id="callout"
                                placeholder="£"
                            />
                        </div>
                        <div class="w-1/3">
                            <Label>Tyre Disposal</Label>

                            <Input
                                v-model="form.disposal"
                                type="text"
                                id="disposal"
                                placeholder="£"
                            />
                        </div>
                    </div>
                    <div class="mt-2">
                        <Label :required="true">Payment Type</Label>

                        <div class="mt-2 flex flex-row items-center space-x-4" id="payment_type">
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="cash" value="Cash" v-model="form.payment_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="cash">Cash</label>
                            </div>
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="card" value="Card" v-model="form.payment_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="card">Card</label>
                            </div>
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="bank_transfer" value="Bank Transfer" v-model="form.payment_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="bank_transfer">Bank Transfer</label>
                            </div>
                            <div class="flex items-center space-x-1">
                                <input type="radio" id="unpaid" value="Unpaid" v-model="form.payment_type">
                                <label class="block sm:text-sm text-xs text-gray-700" for="unpaid">Unpaid</label>
                            </div>
                        </div>
                        <span class="text-xs text-red-500" v-if="errors.payment_type" v-text="errors.payment_type"></span>
                    </div>
                    <div class="mt-2">
                        <Label>Amount to pay</Label>

                        <Input
                            v-model="form.amount_to_pay"
                            type="text"
                            id="amount_to_pay"
                            placeholder="£"
                        />
                    </div>
                </div>

                <div class="col-span-4 flex flex-col bg-white px-6 py-4 rounded-lg shadow-lg">
                    <span class="block font-semibold text-lg text-gray-700">Recipient</span>

                    <div class="mt-4">
                        <Label :required="true">Date</Label>
                        <Input
                            v-model="form.date"
                            type="date"
                            id="date"
                        />
                        <span class="text-xs text-red-500" v-if="errors.date" v-text="errors.date"></span>
                    </div>
                    <div class="mt-4">
                        <SwitchGroup>
                            <div class="w-fit mx-auto px-4 py-2 rounded-xl flex sm:flex-row flex-col items-center justify-center bg-gray-100 sm:space-x-4 sm:space-y-0 space-y-4">
                                <Switch
                                    v-model="useCustomerEmail"
                                    :class='useCustomerEmail ? "bg-green-500" : "bg-gray-200"'
                                    class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none"
                                >
                                <span
                                    :class='useCustomerEmail ? "translate-x-6" : "translate-x-1"'
                                    class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
                                />
                                </Switch>
                                <SwitchLabel class="mr-4 sm:text-base text-sm sm:text-left text-center">Send to customer's email</SwitchLabel>
                            </div>
                        </SwitchGroup>
                        <div v-if="!useCustomerEmail">
                            <label class="block font-medium sm:text-sm text-xs text-gray-700" for="recipient_email">
                                Email <span class="text-red-500">*</span>
                            </label>
                            <input
                                v-model="form.recipient_email"
                                type="text"
                                id="recipient_email"
                                class="py-2 px-3 text-sm border outline-0 rounded shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25 w-full mt-1"
                            >
                        </div>
                        <span class="text-xs text-red-500" v-if="errors.recipient_email" v-text="errors.recipient_email"></span>
                    </div>

                    <button @click="submit" :class="{'relative mt-auto w-full rounded outline-0 h-[2.125rem] text-base text-center uppercase bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-150 ease-in-out': true, 'button--loading': form.processing}">
                        <span v-if="!form.processing">Preview Invoice</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <Transition name="success">
        <div v-show="success" v-text="success" class="fixed md:bottom-8 md:right-8 bottom-4 sm:right-4 sm:left-auto left-1/2 sm:translate-x-0 -translate-x-1/2 sm:px-4 px-2 py-2 bg-green-500/80 text-white sm:text-sm text-xs whitespace-nowrap rounded-lg font-semibold"></div>
    </Transition>

    <div class="min-h-[50vh]"></div>
</template>

<script>
import AdminLayout from "/resources/js/Shared/Layouts/AdminLayout.vue"
export default {
    layout: AdminLayout
}
</script>

<script setup>
import { useForm, Head, Link, usePage } from "@inertiajs/vue3"
import { computed, watch, ref } from "vue";

import Input from "/resources/js/Shared/Form/Input.vue";
import Label from "/resources/js/Shared/Form/Label.vue";
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
    errors: {
        type: Object,
        required: false,
    },
    details: {
        type: Object,
        required: false,
        default: {
            date: null,
            name: null,
            phone: null,
            email: null,
            address: null,
            town: null,
            postcode: null,
            fitting_address: null,
            fitting_town: null,
            fitting_postcode: null,
            registration: null,
            fitting: null,
            callout: null,
            disposal: null,
            callout_type: null,
            tyres: [{ name: null, qty: null, total: null }],
            items: [{ name: null, qty: null, total: null }],
            payment_type: null,
            amount_to_pay: null,
            recipient_email: null,
        },
    }
})

const success = computed(() => usePage().props.flash.success.admin);

watch(success, () => {
    if(success.value) {
        //play a ding sound
        let audio = new Audio('/audio/notify.mp3');
        audio.play();

        setTimeout(() => {
            usePage().props.flash.success.admin = '';
        }, 2000)
    }
})

const useCustomerEmail = ref(true);
const items = ref([{ name: null, qty: null, total: null }]);

const form = useForm({
    date: props.details.date,
    name: props.details.name,
    phone: props.details.phone,
    email: props.details.email,
    address: props.details.address,
    town: props.details.town,
    postcode: props.details.postcode,
    fitting_address: props.details.fitting_address,
    fitting_town: props.details.fitting_town,
    fitting_postcode: props.details.fitting_postcode,
    registration: props.details.registration,
    fitting: props.details.fitting,
    callout: props.details.callout,
    disposal: props.details.disposal,
    callout_type: props.details.callout_type,
    tyres: props.details.tyres || [{ name: null, qty: null, total: null }],
    items: props.details.items || [{ name: null, qty: null, total: null }],
    payment_type: props.details.payment_type,
    amount_to_pay: props.details.amount_to_pay,
    recipient_email: props.details.recipient_email,
});
function test() {
    form.date = '2024-10-10'
    form.name = 'Ali'
    form.phone = '0751069498'
    form.email = 'aliplayzzz0@gmail.com'
    form.address = '19 Plum'
    form.town = 'High'
    form.postcode = 'HP112SS'
    form.fitting_address = '19 Plumer Road'
    form.fitting_town = 'High Wycombe'
    form.fitting_postcode = 'HP11'
    form.registration = 'BM19 WEP'
    form.fitting = 100
    form.callout = 110
    form.disposal = 120
    form.callout_type = 'Next Day'
    form.tyres = [{ name: '205/55 R16', qty: 2, total: 150 }]
    form.items = [{ name: 'Wheel Nut Remove', qty: 2, total: 50 }]
    form.payment_type = 'Cash'
    form.amount_to_pay = 20
    form.recipient_email = ''
}
function addItem() {
    form.items.push({ name: null, qty: null, total: null })
}
function deleteItem(index) {
    if(form.items.length === 1) return;
    form.items.splice(index, 1)
}
function addTyre() {
    form.tyres.push({ name: null, qty: null, total: null })
}
function deleteTyre(index) {
    if(form.tyres.length === 1) return;
    form.tyres.splice(index, 1)
}

function submit() {
    form.transform((data) => ({
        ...data,
        tyres: data.tyres[0].name ? data.tyres : null,
        items: data.items[0].name ? data.items : null,
        recipient_email: useCustomerEmail.value ? data.email : data.recipient_email,
    }));

    form.post('/admin/pdf-invoice', {
        preserveState: true,
        preserveScroll: true,
    })
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
