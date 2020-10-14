<template>
    <div class="home-container">
        <div class="fixed">
            <h1 id="headline">THE NUDE CALENDER PROJECT</h1>
            <span class="sub-text">Shot by Lara Verheijden</span>
            <div class="products">
                <div class="label"><img src="/images/assets/2021.png" /></div>
                <product-card
                        class="product-card"
                        label="BERLIN"
                        price="€35,-"
                        v-on:click.native="orderProduct('frame-product-1602178881523')"
                        :image-title="'/images/products/berlin-2021-final.jpeg'" />
                <product-card
                        class="product-card"
                        label="AMSTERDAM"
                        bottom-label=" "
                        price="€35,-"
                        v-on:click.native="orderProduct('frame-product-1602178731128')"
                        :image-title="'/images/products/amsterdam-2021-final.jpeg'" />
                <product-card
                        class="product-card"
                        label="COMBI"
                        bottom-label="Signed print + Calendar"
                        price="€35,-"
                        bottom-text=""
                        v-on:click.native="orderProduct('frame-product-4256651706434')"
                        :image-title="'/images/products/ams-berlin-2021.jpg'" />
                <product-card
                        class="product-card"
                        label="Berlin COMBI"
                        bottom-label="Signed print + Calendar"
                        price="€35,-"
                        bottom-text=""
                        v-on:click.native="orderProduct('frame-product-1602178988244')"
                        :image-title="'/images/products/ams-berlin-2021.jpg'" />
                <div class="label"><img src="/images/assets/2020.png" /></div>
                <product-card
                        class="product-card"
                        label="2019"
                        v-on:click.native="orderProduct('frame-product-4256713769026')"
                        :image-title="'/images/products/product-2019.jpg'" />
            </div>
        </div>
        <background-component />

<!--        &lt;!&ndash; ber 2021 &ndash;&gt;-->
<!--        <div id='product-component-1602178881523'></div>-->

<!--        &lt;!&ndash; ams 2021 &ndash;&gt;-->
<!--        <div id='product-component-1602178731128'></div>-->

<!--        &lt;!&ndash; signed ams 2021 / print &ndash;&gt;-->

<!--        &lt;!&ndash; signed ber 2021 / print &ndash;&gt;-->
<!--        <div id='product-component-1602178988244'></div>-->

        <!-- 2020 -->
        <div id='product-component-1571344510124'></div>

        <!-- 2019 -->
        <div id='product-component-1571344433543'></div>


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
        },
        methods: {
            orderProduct(fname) {
                let iframe = document.getElementsByName(fname)[0];
                console.log(iframe.contentWindow.document)

                let button = iframe.contentWindow.document.getElementsByTagName('button')[0]
                button.click();
            }
        }
    };

    //2020
    (function() {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }

        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'de-amsterdamse-naaktkalender.myshopify.com',
                storefrontAccessToken: '654e8e16671673a9936fe0afffe19306',
            });
            ShopifyBuy.UI.onReady(client).then(function(ui) {
                ui.createComponent('product', {
                    id: '4256713769026',
                    node: document.getElementById('product-component-1571344433543'),
                    moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                }
                            },
                            "buttonDestination": "modal",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false,
                                "options": false
                            },
                            "text": {
                                "button": "View product"
                            }
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                }
                            },
                            "text": {
                                "button": "Add to cart"
                            }
                        },
                        "cart": {
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            }
                        }
                    },
                });
            });
        }
    })();


    (function() {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }

        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'de-amsterdamse-naaktkalender.myshopify.com',
                storefrontAccessToken: '654e8e16671673a9936fe0afffe19306',
            });
            ShopifyBuy.UI.onReady(client).then(function(ui) {
                ui.createComponent('product', {
                    id: '4256651706434',
                    node: document.getElementById('product-component-1571344510124'),
                    moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                }
                            },
                            "buttonDestination": "modal",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false,
                                "options": false
                            },
                            "text": {
                                "button": "View product"
                            }
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                }
                            },
                            "text": {
                                "button": "Add to cart"
                            }
                        },
                        "cart": {
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            }
                        }
                    },
                });
            });
        }
    })();
</script>

<style>
    * {
        box-sizing: border-box;
    }

    #headline {
        font-size: 4em;
        margin: 12px;
        padding: 0;
        text-align: left;
        color: #aa443c;
        font-weight: 900;
    }

    .label {
        grid-column-start: 1;
        grid-column-end:   4;
        background-image: url("/images/assets/Label.png");
        background-repeat: no-repeat;
        height: 200px;
        width: 350px;
        padding: 60px 40px;
        text-align: left;
    }

    .label img {
        width: 150px;
    }
    .row-one {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    #product-component-1571344510124, #product-component-1571344433543 {
        display: none;
    }

    @media screen and (min-width: 968px) {
        .home-container {
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
            display: grid;
            grid-template-areas:
                    'div'
                    'b b b';
            grid-gap: 2vw;
            width: 80%;
            overflow: scroll;
            padding: 82px;
        }

        .button-container-box {
            padding: 5px;
            background: #ffffff;
            border: 8px solid #aa443c;
        }

        /*.fixed {*/
        /*    position: fixed;*/
        /*    width: 100vw;*/
        /*    height: 100vh;*/
        /*    display: flex;*/
        /*    top: 0;*/
        /*}*/
        .logo {
            width: 30vw;
        }
    }

    @media (max-width: 1380px) {
        .products {
            width: 100%;
        }
    }

    @media screen and (max-width: 968px) {
        .home-container {
            width: 100vw;
            position: relative;
            overflow: hidden;
        }

        .logo {
            position: relative;
            width: 90vw;
            padding: 24px;
            padding-left: 10vw;
        }
    }

    .fixed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

    .sub-text {
        font-size: 32px;
        color: #aa443c;
        text-align: left;
        margin-left: 40rem;
    }
</style>
