<template>
    <div class="products">
        <div class="year-label twenty-one">
        </div>
        <!--        <div class="year-label">-->
        <!--            <img src="/images/assets/" />-->
        <!--            <h1>2021</h1>-->
        <!--        </div>-->

        <product-card
                class="product-card"
                label="The Amsterdam"
                bottom-label="calender"
                discount-sticker="/images/assets/pre-sale.png"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-4701905027138')"
                :image-title="'/images/products/amsterdam-2021-final.jpeg'" />

        <product-card
                class="product-card"
                label="The Berlin"
                discount-sticker="/images/assets/pre-sale.png"
                bottom-label="calender"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-4701904633922')"
                :image-title="'/images/products/berlin-2021-final.jpeg'" />

        <div class="column-fill"></div>

        <product-card
                :less-padding="true"
                class="product-card"
                has-image="true"
                discount-sticker="/images/assets/limited-edition-of-50.png"
                bottom-label-two="Limited photo print + free calendar Amsterdam"
                price="€145,-"
                bottom-text=""
                v-on:click.native="orderProduct('frame-product-4701905518658')"
                :image-title="'/images/products/ams-print-uncensored.png'" />

        <product-card
                :less-padding="true"
                class="product-card"
                bottom-label=""
                has-image="true"
                bottom-label-two="Limited photo print + free calendar Berlin"
                price="€145,-"
                discount-sticker="/images/assets/limited-edition-of-50.png"
                bottom-text="Limited Edition of 50"
                bottom-text-two="Size print 36 x 24 cm"
                bottom-text-three="Gicleeprint op Epson luster 300 grms"
                v-on:click.native="orderProduct('frame-product-4701905322050')"
                :image-title="'/images/products/Naamloos-1-Hersteld.png'" />

        <!--        <div class="year-label">-->
        <!--            <img src="/images/assets/2020.png" />-->
        <!--        </div>-->
        <div class="year-label twenty">
        </div>

        <product-card
                class="product-card"
                label="2020 Kalender"
                discount-sticker="/images/assets/only-10.png"
                price="€55,-"
                v-on:click.native="orderProduct('frame-product-4256651706434')"
                :image-title="'/images/assets/final-2020.jpg'" />
        <div></div>

        <!--        <div class="year-label-2019">-->
        <!--        </div>-->
        <div class="year-label">
        </div>


        <product-card
                class="product-card"
                label="2019 Kalender"
                v-on:click.native="orderProduct('frame-product-4256713769026')"
                :image-title="'/images/products/2019-sold-out.jpg'"
        />
    </div>

</template>

<script>
    import ProductCard from './ProductCard.vue';

    export default {
        name: "ProductGrid",
        components: {
            ProductCard,
        },
        methods: {
            orderProduct(fname) {
                let iframe = document.getElementsByName(fname)[0];
                let button = iframe.contentWindow.document.getElementsByTagName('button')[0];
                button.click();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .year-label {
        margin-top        : 4px;
        background-image  : url("/images/assets/2019-label-1.png");
        background-repeat : no-repeat;
        background-size   : 100%;
        width: 150%;
        text-align        : left;
        display           : flex;
        justify-content   : left;
        height            : 130px;
        border-radius     : 16px;


        @media (max-width : 500px) {
            display         : flex;
            justify-content : left;
            padding         : 0;
            margin          : 0;
            margin-top      : 12px;
            margin-left     : -12px;
            box-shadow      : none;
            max-width       : 180px;
            height: 80px;
        }

        h1 {
            font-weight : 400;
            font-size   : 52px;
            color       : #000000;

            @media (max-width : 500px) {
                margin-top : 12px;
            }
        }

        img {
            height        : 55px;
            width         : 45px;
            padding-right : 12px;
            margin-top    : 8px;
            height        : 45px;

            @media (max-width : 500px) {
                max-width  : 45px;
                margin-top : 20px;
                height     : 45px;
            }
        }

        &-2020 {
            background-repeat : no-repeat;
            background-size   : 300px 150px;
            height            : 150px;
            width             : 300px;
            padding           : 50px 25px 0;
            text-align        : left;
            margin            : 0;
        }


        @media (max-width : 1230px) {
            grid-column-start : 1;
            grid-column-end   : 3;
            margin-left       : 10px;
        }

        @media (max-width : 780px) {
            grid-column-end : 2;
            margin-left     : 0;

            img {
                width : 120px;
            }
        }
        @media (max-width : 500px) {
            margin-left : -12px;
        }
    }

    .twenty-one {
        background-image : url("/images/assets/2021-label.png");
    }

    .twenty {
        background-image : url("/images/assets/2020-label.png");

    }

    .column-fill {
        grid-column-end   : 1;
        grid-column-start : 2;

        @media (max-width : 1230px) {
            grid-column-end : 3;
        }

        @media (max-width : 780px) {
            grid-column-end   : 1;
            grid-column-start : 2;
        }
    }

    .products {
        display               : grid;
        grid-template-columns : 1fr 4fr 4fr;
        width                 : 100%;
        max-width             : 100vw;
        overflow              : hidden;
        padding               : 40px 72px 40px 12px;
        margin-bottom         : 24px;
        grid-gap              : 60px;
        grid-row-gap          : 40px;

        @media (max-width : 1630px) {
            padding  : 40px 12px;
            grid-gap : 30px;
        }

        @media (max-width : 1230px) {
            grid-template-columns : 1fr 1fr;
            padding               : 40px 24px;
        }

        @media (max-width : 780px) {
            grid-template-columns : 1fr;
            grid-gap              : 12vw;
            padding               : 0px;
            overflow              : hidden;
            max-width             : 95%;
            margin-left           : 5px;
        }
    }
</style>
