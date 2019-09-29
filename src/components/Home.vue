<template>
    <div class="home-container">
        <div class="fixed">
            <img src="/images/buttons/logo.png" class="logo" />
            <div class="products">
                <a target="_blank" href="https://de-amsterdamse-naakt-kalender.myshopify.com/11567136864/checkouts/573e889b6f327b6071e85090e0a0566a">
                <product-card
                        id='product-component-1569665752504'
                        :image-title="'/images/products/product-2019.png'"></product-card>
                </a>
                <product-card
                        :image-title="'/images/products/product-2020.png'"></product-card>
            </div>
            <div class="buttons">
                <a href="/casting" class="button-container">
                    <page-link
                            :image-title="'/images/buttons/casting.png'"></page-link>
                </a>
                <a href="/subscribe" class="button-container">
                    <page-link
                            :image-title="'/images/buttons/subscribe.png'"></page-link>
                </a>
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
    import ProductCard from './ProductCard.vue'
    import PageLink from './PageLink.vue'
    import BackgroundComponent from "@/components/background-component";

    export default {
        name: 'Home',
        components: {
            BackgroundComponent,
            ProductCard,
            PageLink,
        }
    }


</script>

<style scoped>

    @media screen and (min-width: 968px) {

        .home-container {
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

    }

    @media screen and (max-width: 968px) {
        .home-container {
            width: 100vw;
        }
    }




</style>
