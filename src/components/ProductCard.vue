<template>
    <div class="hello">
        <div class="product-container">
            <h1 class="red top">{{label}} {{bottomLabel}}</h1>
            <h1 class="red bottom">{{bottomLabelTwo}}</h1>
            <img class="product-image" :src="imageTitle">
            <img class="label-img" v-if="hasImage" src="/images/assets/label-print.png">
            <div v-if="!hasImage"><h2 class="text">{{bottomText}}</h2></div>
            <div v-if="!hasImage"><h2 class="text">{{bottomTextTwo}}</h2></div>
            <div v-if="!hasImage"><h2 class="text">{{bottomTextThree}}</h2></div>
            <div class="price-label-container">
                <h3 class="price-label">{{price}}</h3>
                <img class="price-sticker" v-if="discountSticker" :src="discountSticker"/>
            </div>

            <img class="buy-now" src="../../public/images/buttons/buy-now.png">
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
            hasImage: {
                type: String,
                required: false,
            },
            bottomLabel: {
                type: String,
                required: false,
            },
            bottomLabelTwo: {
                type: String,
                required: false,
            },
            bottomText: {
                type: String,
                required: false,
            }, bottomTextTwo: {
                type: String,
                required: false,
            }, bottomTextThree: {
                type: String,
                required: false,
            },
            discountSticker: {
                type: String,
                required: false,
            },
            price: {
                type: String,
                required: false,
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .label-img {
        max-width: 300px;
        transform: translateY(-20px);
    }

    @media (max-width: 932px) {
        .label-img{
            max-width: 175px;
        }
    }

    .top {
        margin-top: 40px;
    }

    @media (max-width: 932px) {
        .top {
            margin-top: 14px;
        }
    }

    .bottom {
        margin-bottom: 22px;
    }

    h1 {
        padding: 0;
        margin: 0;
    }

    h3 {
        font-size: 32px;
        margin: 0;
        margin-bottom: 32px;
    }

    .price-label {
        font-size: 62px;
        margin: 0px;
        margin-bottom: 42px;
    }

    .price-sticker {
        position: absolute;
        top: -20px;
        right: -50px;
        max-width: 200px;
    }

    .price-label-container {
        position: relative;
    }

    @media (max-width: 932px) {
        .price-label {
            margin-top: 22px;
            font-size: 42px;
        }
    }

    .hello {
        transition: all .2s ease-in-out;
        cursor: pointer;
    }

    .text {
        margin: 0px;
        font-size: 28px;
    }

    .sub-text {
        margin: 12px;
        font-size: 22px;
        color: #2c3e50;
    }

    .red, .bottom {
        color: #000000;
    }
    @media (max-width: 932px) {
        .red {
            font-size: 22px;
        }
    }

    .product-container {
        background: white;
        border: 16px solid #aa443c;
        text-align: center;
        position: relative;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .product-image {
        width: auto;
        padding: 0 82px;
        max-width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 932px) {
        .product-image {
            padding: 0 54px;
        }
    }

    .buy-now {
        width: 256px;
        position: absolute;
        bottom: -75px;
    }

    .hello {
        position: relative;
        background: none;
    }
</style>
