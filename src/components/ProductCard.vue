<template>
    <div class="hello">
        <h1 class="label" v-if="label">{{label}}</h1>
        <div class="product-container">
            <img  class="buy-now" src="../../public/images/buttons/buy-now.png">
            <img :class="{ 'large' : padding}" class="product-image" :src="imageTitle">
            <div class="text"><h1>Limited edition <br /> Signed print + Calendar</h1></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            imageTitle: String,
            label: {
                type: String,
                required: false,
            },
            padding: false
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .label {
        position: absolute;
        top: 0;
        left: 0;
    }
    @media screen and (min-width: 968px) {
        .product-image {
            transition: all .2s ease-in-out;
            cursor: pointer;
        }

        .product-image:hover {
            transform: scale(1.04);
        }
    }

    .product-container {
        background: white;
        border: 7px solid #aa443c;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .product-image {
        width: auto;
        padding: 48px;
        max-width: 100%;
        box-sizing: border-box;
    }

    .buy-now {
        top: -60px;
        position: absolute;
        width: 256px;
    }
    .hello {
        position: relative;
    }
    .large {
        width: 100%;
        padding: 48px 0;
    }
</style>
