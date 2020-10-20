<template>
    <div class="product-card">
        <h1 class="red top">{{label}} {{bottomLabel}}</h1>
        <h1 class="red bottom">{{bottomLabelTwo}}</h1>

        <div class="product-image-container" :class="{lesspadding: lessPadding }">
            <img class="product-image" :src="imageTitle">
        </div>

        <img class="label-img" v-if="hasImage" src="/images/assets/label-limited-to.png">

        <div class="price-label-container">
            <h3 class="price-label" :class="{'no-margin': hasImage}">{{price}}</h3>
        </div>

        <img class="price-sticker" v-if="discountSticker" :src="discountSticker" />

        <img class="buy-now" src="../../public/images/buttons/buy-now.png">
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
            lessPadding: {
                type: Boolean,
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
<style lang="scss" scoped>
    .product-card {
        margin: 50px;
        transition      : all .2s ease-in-out;
        cursor          : pointer;
        position        : relative;
        text-align      : center;
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        border-radius: 50px;
        /*<!--background: #D3D3D3;-->*/
        box-shadow:  20px 20px 60px #b3b3b3,
        -20px -20px 60px #f3f3f3;

        @media (min-width : 932px) {
            &:hover {
                transform: scale(1.01);
                           }
            &:active {
                transition      : all .2s ease-in-out;
                box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
                inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
            }
        }

        @media (max-width : 1230px) {
            margin : 20px 20px 20px;
        }

        @media (max-width : 932px) {
            padding : 8px 22px;
            margin  : 0;
        }

        .price-sticker {
            position  : absolute;
            bottom    : -40px;
            right     : -80px;
            max-width : 300px;
        }
    }

    .label-img {
        max-width : 225px;
        transform : translateY(-40px);
        border-radius: 5px;
        background: linear-gradient(145deg, #bebebe, #e2e2e2);
        box-shadow:  5px 5px 10px #b5b5b5}

    @media (max-width : 932px) {
        .label-img {
            max-width : 175px;
        }
    }

    .top {
        margin-top : 20px;
    }

    @media (max-width : 932px) {
        .top {
            margin-top : 14px;
        }
    }

    .bottom {
        margin-bottom : 22px;
    }

    h1 {
        padding : 0;
        margin  : 0;
    }

    h3 {
        font-size     : 24px;
        margin        : 0;
        margin-bottom : 32px;
    }

    .price-label {
        font-size     : 42px;
        margin        : 0px;
        margin-bottom : 42px;
    }


    .price-label-container {
        position : relative;
    }

    @media (max-width : 932px) {
        .price-label {
            margin-top : 22px;
            font-size  : 42px;
        }
    }

    .text {
        margin    : 0px;
        font-size : 28px;
    }

    .sub-text {
        margin    : 12px;
        font-size : 22px;
        color     : #2c3e50;
    }

    .red, .bottom {
        color : #000000;
    }

    @media (max-width : 932px) {
        .red {
            font-size : 22px;
        }
    }

    .product-container {

    }

    .product-image {
        width      : auto;
        max-width  : 100%;
        box-sizing : border-box;
        max-height : 600px;
    }

    .product-image-container {
        padding : 0 82px;
    }

    .lesspadding {
        padding : 0 24px;
    }

    @media (max-width : 1230px) {
        .product-image-container {
            padding : 0 42px;
        }
    }


    @media (max-width : 932px) {
        .product-image-container {
            padding : 0 24px;
        }
    }

    .buy-now {
        width    : 256px;
        position : absolute;
        bottom   : -75px;
    }

    .no-margin {
        margin    : 0;
        transform : translateY(-40px);
    }
</style>
