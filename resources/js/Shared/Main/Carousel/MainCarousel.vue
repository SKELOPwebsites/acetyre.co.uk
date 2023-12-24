<template>
    <div class="relative h-full">
        <Carousel
            @next="next"
            @prev="prev"
            @mouseenter="pause"
            @mouseleave="unpause"
        >
            <CarouselSlide :index="0" :visibleSlide="visibleSlide" :direction="direction">
                <img
                    src="/images/showcase/mobile-tyre-fitting-short.jpg"
                    class="object-cover object-center w-full h-full motion-safe:animate-pulse"
                    alt="Ace Tyres Mobile Tyres Van"
                >
            </CarouselSlide>
            <CarouselSlide :index="1" :visibleSlide="visibleSlide" :direction="direction">
                <img
                    src="/images/showcase/commercial-tyres.webp"
                    class="object-cover object-center w-full h-full motion-safe:animate-pulse"
                    alt="Ace Tyres Mobile Tyres Van"
                >
            </CarouselSlide>
            <CarouselSlide :index="2" :visibleSlide="visibleSlide" :direction="direction">
                <img
                    src="/images/showcase/mobile-puncture-repair.webp"
                    class="object-cover object-center w-full h-full motion-safe:animate-pulse"
                    alt="Ace Tyres Mobile Tyres Van"
                >
            </CarouselSlide>
            <CarouselSlide :index="3" :visibleSlide="visibleSlide" :direction="direction">
                <img
                    src="/images/showcase/tyre-replacement.webp"
                    class="object-cover object-center w-full h-full motion-safe:animate-pulse"
                    alt="Ace Tyres Mobile Tyres Van"
                >
            </CarouselSlide>
            <CarouselSlide :index="4" :visibleSlide="visibleSlide" :direction="direction">
                <img
                    src="/images/showcase/mobile-tyre-fitting.webp"
                    class="object-cover object-center w-full h-full motion-safe:animate-pulse"
                    alt="Ace Tyres Mobile Tyres Van"
                >
            </CarouselSlide>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import Carousel from "/resources/js/Shared/Main/Carousel/Carousel.vue"
import CarouselSlide from "/resources/js/Shared/Main/Carousel/CarouselSlide.vue"

defineProps({
    location: {
        type: String,
        required: false,
        default: null,
    },
})

const isSliding = ref(false);
const visibleSlide = ref(0);
const direction = ref('left');
const slidesLen = 5;

const interval = 350;
const slideTimer = ref(interval);

const isPaused = ref(false)

watch(slideTimer, () => {
    if(slideTimer.value <= 0) {
        slideTimer.value = interval;
        next();
    }else if(!isPaused.value){
        setTimeout(() => {
            slideTimer.value--;
        }, 1);
    }
}, { immediate: true })

function next() {
    if(isSliding.value) return;

    if(visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
    }else {
        visibleSlide.value += 1
    }
    direction.value = 'left';
    setSliding();
}
function prev() {
    if(isSliding.value) return;

    if(visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
    }else {
        visibleSlide.value--
    }
    direction.value = 'right';
    setSliding();
}

function setSliding() {
    isSliding.value = true;
    setTimeout(() => {
        isSliding.value = false;
    }, 600)
}

function pause() {
    isPaused.value = true
}

function unpause() {
    isPaused.value = false
    slideTimer.value--;
}

</script>
