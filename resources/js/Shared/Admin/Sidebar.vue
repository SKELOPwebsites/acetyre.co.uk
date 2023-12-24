<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div
        class="fixed top-0 left-0 h-full block bg-gray-200 border-r border-gray-300 z-30 transition-all duration-500 overflow-y-scroll select-none"
        :class="sideBarOpen ? 'w-64' : 'w-20'"
    >

        <div class="w-full h-20 border-b border-gray-300 flex  items-center" @click="sideBarOpen = !sideBarOpen">
            <img v-if="sideBarOpen" class="w-52 mx-auto" src="/images/main/ace-cars.png" alt="Ace Tyres">
            <img v-else class="w-14 mx-auto" src="/images/main/tyresanywhere-icon.webp" alt="Ace Tyres">
        </div>

        <div
            class="h-fit w-full pt-8"
            :class="sideBarOpen ? '' : 'opacity-0'"
            @click="sideBarOpen = true"
        >
            <div
                :class="sideBarOpen ? '' : 'pointer-events-none'"
            >
                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>
                    <SidebarDropdown title="Inventory" href="/admin/inventory">
                        <template v-slot:icon>
                            <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <path d="M12 12l0 .01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                            </svg>
                        </template>
                        <SidebarDropdownLink title="Search Tyre" href="/admin/inventory/search">
                            <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </SidebarDropdownLink>
                    </SidebarDropdown>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">ORDERS</p>
                    <SidebarLink title="Upcoming" href="/admin/orders/active">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                            <path d="M16 3v4" />
                            <path d="M8 3v4" />
                            <path d="M4 11h16" />
                            <path d="M11 15h1" />
                            <path d="M12 15v3" />
                        </svg>
                    </SidebarLink>
                    <SidebarLink title="Archive" href="/admin/orders">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                            <path d="M10 12l4 0" />
                        </svg>
                    </SidebarLink>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">PRODUCTS</p>
                    <SidebarLink title="Add Product" href="/admin/tyres/create">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                        </svg>
                    </SidebarLink>
                    <SidebarLink title="View Products" href="/admin/view-products">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                            <path d="M13 8l2 0" />
                            <path d="M13 12l2 0" />
                        </svg>
                    </SidebarLink>
                    <SidebarLink title="Service Charges" href="/admin/service-charges">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M17 10l-2 -6" />
                            <path d="M7 10l2 -6" />
                            <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.267 1.522" />
                            <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M19.001 15.5v1.5" />
                            <path d="M19.001 21v1.5" />
                            <path d="M22.032 17.25l-1.299 .75" />
                            <path d="M17.27 20l-1.3 .75" />
                            <path d="M15.97 17.25l1.3 .75" />
                            <path d="M20.733 20l1.3 .75" />
                        </svg>
                    </SidebarLink>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">TYRES</p>
                    <SidebarLink title="Sizes" href="/admin/manage-tyre-sizes">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
                            <path d="M4 8l2 0" />
                            <path d="M4 12l3 0" />
                            <path d="M4 16l2 0" />
                            <path d="M8 4l0 2" />
                            <path d="M12 4l0 3" />
                            <path d="M16 4l0 2" />
                        </svg>
                    </SidebarLink>
                    <SidebarLink title="Brands" href="/admin/manage-tyre-brands">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2" />
                        </svg>
                    </SidebarLink>
                </div>

                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">INVOICING</p>
                    <SidebarLink title="Receipt" href="/admin/pdf-invoice">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
                        </svg>
                    </SidebarLink>
                </div>
                <div class="mb-4 px-4">
                    <p class="pl-4 text-sm font-semibold mb-1">MISC</p>
                    <SidebarLink title="Covered Areas" href="/admin/covered-areas">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                            <path d="M13 7l0 .01" />
                            <path d="M17 7l0 .01" />
                            <path d="M17 11l0 .01" />
                            <path d="M17 15l0 .01" />
                        </svg>
                    </SidebarLink>
                    <SidebarLink title="Covered Postcodes" href="/admin/covered-postcodes">
                        <svg class="h-5 w-5 stroke-current mr-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                            <path d="M13 7l0 .01" />
                            <path d="M17 7l0 .01" />
                            <path d="M17 11l0 .01" />
                            <path d="M17 15l0 .01" />
                        </svg>
                    </SidebarLink>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { Link } from "@inertiajs/vue3"
import SidebarLink from "./SidebarLink.vue"
import SidebarDropdown from "./SidebarDropdown.vue"
import SidebarDropdownLink from "./SidebarDropdownLink.vue"

const emit = defineEmits(['sidebar'])

const sideBarOpen = ref(true)

watch(() => sideBarOpen.value, (newVal) => {
    emit('sidebar', newVal)
})
</script>

<style scoped>

</style>
