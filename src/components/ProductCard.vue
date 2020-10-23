<template>
    <div class="product-card">
        <div class="header">
            <h1 class="red top">{{label}} {{bottomLabel}}</h1>
            <h1 class="red bottom">{{bottomLabelTwo}}</h1>
        </div>

        <img class="label-img" v-if="hasImage" src="/images/assets/label-langerekt-2.png">

        <div class="product-image-container" :class="{lesspadding: lessPadding }">
            <img class="product-image" :src="imageTitle">
        </div>

        <div class="price-label-container" :class="{transform: hasImage}">
            <h3 class="price-label">{{price}}</h3>
            <h4 v-if="price" class="sub-price-label">VAT included<br />
                                                     FREE shipping in the Netherlands<br />
                                                     €5,00 shipping in Europe</h4>
        </div>

        <img class="price-sticker" :class="{stickerposition: lessPadding }" v-if="discountSticker"
             :src="discountSticker" />

        <img class="buy-now" src="../../public/images/buttons/but-now-new.png">
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
            font-weight   : 400;

            @media (max-width : 500px) {
                font-size : 12px;
            }

            h1 {
                font-weight : 400;
            }
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

                @media (max-width : 500px) {
                    padding : 0;
                }
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

            @media (max-width : 500px) {
                max-width : 200px;
                left      : -40px;
                bottom    : 30%;
            }
        }

        .stickerposition {
            position  : absolute;
            top       : 60px;
            right     : -120px;
            left      : unset;
            max-width : 250px;

            @media (max-width: 500px) {
                max-width: 175px;
                bottom: 80px;
                top: unset;
                right: -40px;
            }
        }

        .label-img {
            max-width : 350px;
            transform : translateY(-0px);

            @media (max-width : 932px) {
                max-width : 225px;
            }
        }

        .price-label-container {
            position        : relative;
            display         : flex;
            flex-direction  : row;
            justify-content : center;
            align-items     : center;
            margin          : 14px 0 32px;

            &.transform {
                transform     : translateY(-30px);
                margin-bottom : 10px;

                @media (max-width : 500px) {
                    margin : 32px 0 12px;
                }
            }

            .sub-price-label {
                font-size   : 10px;
                margin-left : 12px;

                @media (max-width : 500px) {
                    font-size : 8px;
                }
            }

            .price-label {
                font-size   : 32px;
                font-family : "HelveticaNeue-75";

                @media (max-width : 932px) {
                    font-size : 42px;
                }

                @media (max-width : 500px) {
                    font-size : 32px;
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
