<template>
    <div class="products">

        <div class="year-label">
            <img src="/images/assets/2021.png" />
        </div>

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
                bottom-label-two="Signed print + calendar Amsterdam"
                price="€135,-"
                bottom-text=""
                v-on:click.native="orderProduct('frame-product-4701905322050')"
                :image-title="'/images/products/ams-2021-print.png'" />

        <product-card
                :less-padding="true"
                class="product-card"

                bottom-label=""
                has-image="true"
                bottom-label-two="Signed print + calendar Berlin"
                price="€135,-"
                bottom-text="Limited Edition of 50"
                bottom-text-two="Size print 36 x 24 cm "
                bottom-text-three="Gicleeprint op Epson luster 300 grms"
                v-on:click.native="orderProduct('frame-product-4256651706434')"
                :image-title="'/images/products/calendar-print.png'" />

        <div class="year-label">
            <img src="/images/assets/2020.png" />
        </div>

        <product-card
                class="product-card"
                label="2020 Kalender"
                discount-sticker="/images/assets/only-10.png"
                price="€75,-"
                v-on:click.native="orderProduct('frame-product-4256713769026')"
                :image-title="'/images/products/2020-available.jpg'" />

        <div></div>

        <div class="year-label-2019">
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
        background-image  : url("/images/assets/Label.png");
        background-repeat : no-repeat;
        background-size   : 300px 150px;
        height            : 150px;
        width             : 300px;
        padding           : 50px 25px 0;
        text-align        : left;
        margin            : 0;

        &-2019 {
            background-image  : url("/images/assets/2019-label.png");
            background-repeat : no-repeat;
            background-size   : 300px 150px;
            height            : 150px;
            width             : 300px;
            padding           : 50px 25px 0;
            text-align        : left;
            margin            : 0;
        }

        img {
            width : 150px;
        }

        @media (max-width : 932px) {
            grid-column-end : 3;
            background-size : 250px 125px;
            height          : 125px;
            margin-top      : 20px;
            margin-left     : 20px;
        }

        @media (max-width : 1230px) {
            grid-column-start : 1;
            grid-column-end   : 3;
        }

        @media (max-width : 780px) {
            grid-column-end : 2;
        }
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
        padding               : 40px 72px;
        margin-bottom         : 24px;
        grid-gap              : 60px;
        grid-row-gap          : 0px;

        @media (max-width : 1630px) {
            padding  : 40px 0px;
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
        }
    }
</style>
