<template>
    <div class="product-card">
        <div class="header">
            <h1 class="red top">{{label}} {{bottomLabel}}</h1>
            <h1 class="red bottom">{{bottomLabelTwo}}</h1>
        </div>

        <div class="product-image-container" :class="{lesspadding: lessPadding }">
            <img class="product-image" :src="imageTitle">
        </div>

        <img class="label-img" v-if="hasImage" src="/images/assets/label-limited-to.png">

        <div class="price-label-container">
            <h3 class="price-label" :class="{'no-margin': hasImage}">{{price}}</h3>
            <h4 class="sub-price-label">TAX included<br/>
                                        FREE shipping in the Netherlands<br/>
                                        €5,00 shipping in europe</h4>
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
        margin          : 20px 60px;
        transition      : all .2s ease-in-out;
        cursor          : pointer;
        position        : relative;
        background      : white;
        border          : 16px solid #aa443c;
        text-align      : center;
        border-radius   : 2px;
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        box-shadow      : 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        @media (min-width : 932px) {
            &:hover {
                transform  : scale(1.05);
                box-shadow : 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
        }

        @media (max-width : 1630px) {
            margin : 20px 20px 100px;
        }

        @media (max-width : 1230px) {
            margin : 20px 20px 40px;
        }

        @media (max-width : 932px) {
            padding : 8px 22px;
            margin  : 0;
        }

        .header {
            margin-top    : 14px;
            margin-bottom : 10px;
            font-size     : .75vw;
        }

        .product-image-container {
            padding : 0 82px;

            .product-image {
                width      : auto;
                max-width  : 100%;
                box-sizing : border-box;
                max-height : 600px;
            }

            &.lesspadding {
                padding : 0 24px;
            }

            @media (max-width : 1230px) {
                padding : 0 42px;
            }
            @media (max-width : 932px) {
                padding : 0 24px;
            }
        }

        .price-sticker {
            position  : absolute;
            bottom    : 25%;
            left      : -125px;
            max-width : 350px;
        }

        .label-img {
            max-width     : 225px;
            transform     : translateY(-40px);
            border-radius : 5px;
            background    : linear-gradient(145deg, #bebebe, #e2e2e2);
            box-shadow    : 5px 5px 10px #b5b5b5;

            @media (max-width : 932px) {
                max-width : 175px;
            }
        }

        .price-label-container {
            position       : relative;
            display        : flex;
            flex-direction : row;

            .sub-price-label {
                margin    : 10px 0px 34px;
                font-size : 10px;
            }

            .price-label {
                margin      : 12px 16px 34px;
                font-size   : 1.5vw;
                font-family : "HelveticaNeue-75";

                @media (max-width : 932px) {
                    margin-top : 22px;
                    font-size  : 42px;
                }
            }
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
