<template>
    <div class="home">
        <div class="header">
            <div class="menu">
                <div class="nav">
                    <ul>
                        <li><a>Quienes Somos</a></li>
                        <li><a>Reuniones</a></li>
                        <li><a>Contactos</a></li>
                    </ul>
                </div>
                <div class="social">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f " id="facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram " id="insta"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <Article/>
        <Boxes/>
        <Slider/>
        <Footer/>
    </div>
</template>

<script>
import Article from '@/components/Article.vue'
import Boxes from '@/components/Boxes.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'Home',
    data(){
        return{

        }
    },
    components:{
        Article,
        Boxes,
        Slider,
        Footer,
    }
    
}
</script>

<style lang="scss">
  @import '../scss/style';
</style>