<template>
    <nav class="flex select-none sm:relative items-center justify-start">
        <div class="relative sm:block hidden">
            <div class="flex items-center">
                <ul class="flex items-center w-full h-12 list-none">
                    <li class="md:w-40 w-32 flex items-center justify-center">
                        <NavLink href="/mobile-tyre-fitting" title="Contact Us">Mobile Tyre Fitting</NavLink>
                    </li>
                    <li class="md:w-40 w-24 flex items-center justify-center">
                        <NavLink href="/contact-us" title="Contact Us">Contact Us</NavLink>
                    </li>
                    <li class="md:w-20 w-16  flex items-center justify-center">
                        <div class="ml-4 flow-root lg:ml-6">
                            <Link href="/cart" class="group -m-2 flex items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 flex-shrink-0 text-site-500 group-hover:text-site-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <template v-if="$page.props.cart.tyre">
                                    <span class="ml-2 text-sm font-medium text-site-500 group-hover:text-site-700" v-text="$page.props.cart.tyre.quantity"></span>
                                </template>
                                <template v-else-if="$page.props.cart.quantity">
                                    <span class="ml-2 text-sm font-medium text-site-500 group-hover:text-site-700" v-text="$page.props.cart.quantity"></span>
                                </template>
                                <template v-else>
                                    <span class="ml-2 text-sm font-medium text-site-500 group-hover:text-site-700">0</span>
                                </template>
                                <span class="sr-only">items in cart, view bag</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!--Mobile Navigation-->
        <div class="sm:hidden flex items-center justify-center h-10 w-10 absolute right-4 top-1/2 -translate-y-1/2">
            <button @click="toggleMobileNav()" class="menu-btn h-10 w-10 bg-wheelfit-500 hover:bg-wheelfit-400 text-white border-0 outline-0 text-xl flex items-center justify-center transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <transition name="mobile-nav">
            <div v-show="mobileNavShow" class="md:hidden block mobile-nav w-72 fixed top-0 left-0 z-50">
                <div class="h-screen overflow-y-scroll">
                    <button @click="hideMobileNav" class="w-full flex items-center justify-center h-14 bg-[#ebebeb] text-wheelfit-600 text-lg" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        CLOSE
                    </button>
                    <div class="flex flex-col">
                        <NavLinkMob href="/" component="Index" class="border-b flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            HOME
                        </NavLinkMob>
                        <NavLinkMob href="/mobile-tyre-fitting" component="MobileTyreFitting" title="Mobile Tyre Fitting" class="border-b">Mobile Tyre Fitting</NavLinkMob>
                        <NavLinkMob href="/contact-us" component="ContactUs" title="Contact Us" class="border-b"><a>Contact Us</a></NavLinkMob>
                        <NavLinkMob href="/cart" component="Cart" class="border-b flex justify-start items-center">
                            Your Cart
                            <template v-if="$page.props.cart.tyre">
                                <span class="ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px" v-text="$page.props.cart.tyre.quantity"></span>
                            </template>
                            <template v-else-if="$page.props.cart.quantity">
                                <span class="ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px" v-text="$page.props.cart.quantity"></span>
                            </template>
                            <template v-else>
                                <span class="ml-2 bg-blue-500 text-white text-sm uppercase font-bold rounded-full px-1.5 py-px">0</span>
                            </template>

                        </NavLinkMob>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue"
import { router, Link } from "@inertiajs/vue3";
import NavbarDropdown from "/resources/js/Shared/Main/NavbarDropdown.vue"
import NavLink from "/resources/js/Shared/Main/NavLink.vue"
import NavLinkMob from "/resources/js/Shared/Main/NavLinkMob.vue"

router.on('start', (event) => {
    hideMobileNav()
})

const otherServicesOpen = ref(false)
const mobileNavShow = ref(false)
const sliding = ref(false)

function toggleMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = !mobileNavShow.value;
    setSliding();
}
function hideMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = false;
    setSliding();
}
function setSliding() {
    sliding.value = true;
    setTimeout(() => {
        sliding.value = false;
    }, 500)
}
</script>

<style scoped>
@keyframes bg-animation{
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}

.nav-link-gradient-animation{
    background-size: 400px !important;
    border: none !important;
    animation: bg-animation 25s infinite alternate;
}
.nav-link-gradient-1{
    background: linear-gradient(-45deg, #F09821, #E1F328, #85F758, #23E566);
    color: #000 !important;
}
.nav-link-gradient-2{
    background: linear-gradient(45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
    color: #fff;
}

.mobile-nav{
    background: linear-gradient(to right, #ffffff 72%, #ebebeb 100%);
}
.menu-btn{
    box-shadow:
        0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.25),
        0 0.125rem 0.5rem rgba(0, 0, 0, 0.25),
        0 0 0 1px inset rgba(255, 255, 255, 0.10);
}
.color-anim{
    animation: color-anim 1.5s infinite;
}

@keyframes color-anim {
    0%{ color: #fff }
    50%{ color: #ff3333 }
    100%{ color: #fff }
}

.mobile-nav-enter-active{
    animation: navInAnimation 0.5s ease;
}
.mobile-nav-leave-active{
    animation: navOutAnimation 0.5s ease;
}

@keyframes navInAnimation {
    from { transform: translateX(-100%); }
    to { transform: translateX(0) }
}
@keyframes navOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(-100%) }
}
</style>
