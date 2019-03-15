<template>
    <div class="boxes"> 
        <div class="box col">
            <div class="side front">
                <h1>Directivas</h1>
                <i class="fas fa-location-arrow cards"></i>
            </div>
            <div class="side back">
                <p>Una directiva es un atributo de un elemento HTML  que luego  va a interpretar el framework vue.</p>
                <p>Algunos ejemplos de directivas:</p>
                <ul>
                    <li>v-bind</li>
                    <li>v-model</li>
                    <li>v-if</li>
                    <li>v-else</li>
                </ul>
            </div>
        </div>
        <div class="box-1 col">
            <div class="side front">
                <h1>Vue-CLI</h1>
                <i class="fas  fa-folder-open cards"></i>
            </div>
            <div class="side back">
                <p class="back-1">La Interfaz de linea de comandos Vue, ayuda a facilitar el rapido desarrollo de las aplicaciones Vue</p>
            </div>
        </div>
        <div class="center">
            <h3>Herramientas</h3>
            <a href="#" class="btn btn-work">leer más</a>
        </div>
        <div class="boxright col">
            <div class="side front">
                <h1>Vue-Router</h1>
                <i class="fas fa-search cards"></i>
            </div>
            <div class="side back">
                <p class="back-1">Es el paquete oficial de vuejs  que nos ayuda a crear aplicaciones  de una sola pagina ,con el fin de trabaja con rutas en nuestro proyecto</p>
            </div>
        </div>
        <div class="boxright-1 col">
            <div class="side   front">
                <h1>Vuex</h1>
                <i class="far fa-file-code cards"></i>
            </div>
            <div class="side back">
                <p>Es un patron de diseño para controlar  el estado de las aplicaciones.</p>
                <p>Vuex simplifica la forma en que  los componentes se comunican entre ellos</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../scss/style';
</style>