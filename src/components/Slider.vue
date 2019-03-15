<template>
    <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="swiper-card">
                        <img src="../images/vueJS.png">
                        <h3 class="swiper-card1">Vue puede trabajar con cualquier fuente de datos</h3>
                    </div>
                </div>
                <div class="swiper-slide">
                   <div class="swiper-card">
                        <img src="../images/laravel-simple.png">
                        <h3>Laravel</h3>
                    </div>       
                </div>
                <div class="swiper-slide">
                    <div class="swiper-card">
                        <img src="../images/firebase.jpg">
                        <h3>Firebase</h3>
                    </div> 
                </div>
                <div class="swiper-slide">
                    <div class="swiper-card">
                        <img src="../images/django.png">
                        <h3>Django</h3>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-card">
                        <img src="../images/php.png">
                        <h3>php</h3>
                    </div>
                </div>
                </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    mounted(){
        new Swiper('.swiper-container', {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        
        });
    },
}
</script>

<style lang="scss">
    @import '../scss/style';
</style>