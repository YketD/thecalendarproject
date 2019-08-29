<template>
    <div id="app">
        <div class="fixed">
            <img src="/images/buttons/logo.png" class="logo" />
            <div class="products">
                <product-card
                        :image-title="'/images/products/product-2019.png'"></product-card>
                <product-card
                        :image-title="'/images/products/product-2020.png'"></product-card>
            </div>
            <div class="buttons">
                <div class="button-container">
                    <page-link
                            :image-title="'/images/buttons/casting.png'"></page-link>
                </div>
                <div class="button-container">
                    <page-link
                            :image-title="'/images/buttons/subscribe.png'"></page-link>
                </div>
                <div class="button-container">
                    <page-link
                            :image-title="'/images/buttons/contact.png'"></page-link>
                </div>
            </div>
        </div>
    <background-component></background-component>
    </div>
</template>

<script>
    import ProductCard from './components/ProductCard.vue'
    import PageLink from './components/PageLink.vue'
    import BackgroundComponent from "@/components/background-component";

    export default {
        name: 'app',
        components: {
            BackgroundComponent,
            ProductCard,
            PageLink
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 45vh;
        right: 8vw;
    }

    .button-container {
        margin-bottom: 2vh;
    }

    .products {
        /*margin-left: 5vw;*/
        position: fixed;
        top: 30vh;
        display: flex;
        flex-direction: row;
    }

    .fixed {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        top: 0;
    }



    .logo {
        position: fixed;
        top: 2vh;
        right: 5vw;
        width: 35vw;
    }
</style>
