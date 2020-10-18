<template>
    <div class="home-container">
        <div class="fixed">
            <h1 id="headline">THE NUDE CALENDER PROJECT</h1>
            <span class="sub-text">Shot by Lara Verheijden</span>
            <div class="products">
                <div class="year-label">
                    <img src="/images/assets/2021.png" />
                </div>
                <product-card
                        class="product-card"
                        :class="{disabled: isEmpty('frame-product-4701904633922')}"
                        label="The Berlin"
                        discount-sticker="/images/assets/sticker-35.png"
                        bottom-label="calender"
                        price="€35,-"
                        v-on:click.native="orderProduct('frame-product-4701904633922')"
                        :image-title="'/images/products/berlin-2021-final.jpeg'" />
                <product-card
                        class="product-card"
                        label="The Amsterdam"
                        bottom-label="calender"
                        discount-sticker="/images/assets/sticker-35.png"
                        price="€35,-"
                        v-on:click.native="orderProduct('frame-product-4701905027138')"
                        :image-title="'/images/products/amsterdam-2021-final.jpeg'" />
                <div></div>
                <product-card
                        class="product-card"
                        label="COMBI"
                        bottom-label=""
                        has-image="true"
                        bottom-label-two="Signed print + calendar Berlin"
                        price="€135,-"
                        bottom-text="Limited Edition of 50"
                        bottom-text-two="Size print 36 x 24 cm "
                        bottom-text-three="Gicleeprint op Epson luster 300 grms"
                        v-on:click.native="orderProduct('frame-product-4256651706434')"
                        :image-title="'/images/products/calendar-print.png'" />
                <product-card
                        class="product-card"
                        label="COMBI"
                        has-image="true"
                        bottom-label="Signed print + calendar Amsterdam"
                        price="€135,-"
                        bottom-text=""
                        v-on:click.native="orderProduct('frame-product-4701905322050')"
                        :image-title="'/images/products/ams-2021-print.png'" />
                <div class="year-label">
                    <img src="/images/assets/2020.png" />
                </div>
                <product-card
                        class="product-card"
                        label="2020"
                        v-on:click.native="orderProduct('frame-product-4256713769026')"
                        :image-title="'/images/products/2020-available.jpg'" />
                <product-card
                        class="product-card"
                        label="2019"
                        v-on:click.native="orderProduct('frame-product-4256713769026')"
                        :image-title="'/images/products/2019-sold-out.jpg'" />
            </div>
        </div>
        <!--        <background-component />-->

        <!-- ber 2021 -->
        <div id='product-component-1602178881523'></div>

        <!-- ams 2021 -->
        <div id='product-component-1602178731128'></div>

        <!-- signed ber 2021 / print -->
        <div id='product-component-1602178988244'></div>

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
        computed: {
            isEmpty() {
                return function(fname) {
                    let iframe = document.getElementsByName(fname)[0];
                    console.log(iframe)
                    if (iframe) {
                        return iframe.contentWindow.document.getElementsByTagName('button')[0].disabled;
                    }
                    return false;
                }
            }
        },
        methods: {
            orderProduct(fname) {
                let iframe = document.getElementsByName(fname)[0];

                let button = iframe.contentWindow.document.getElementsByTagName('button')[0];

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

    //Ams 2021 - calender
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
                    id: '4701905027138',
                    node: document.getElementById('product-component-1602178731128'),
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
                            "buttonDestination": "checkout",
                            "text": {
                                "button": "Buy now"
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

    //Berlin 2021 - calendar
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
                    id: '4701904633922',
                    node: document.getElementById('product-component-1602178881523'),
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
                            "buttonDestination": "checkout",
                            "text": {
                                "button": "Buy now"
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

    // Berlin 2021 - Calendar & print
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
                    id: '4701905322050',
                    node: document.getElementById('product-component-1602178988244'),
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
                            "buttonDestination": "checkout",
                            "text": {
                                "button": "Buy now"
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
        /*transform: scale(0.99);*/
    }

    #headline {
        font-size: 4em;
        margin: 12px;
        padding: 0;
        text-align: left;
        color: #aa443c;
        font-weight: 900;
    }

    .year-label {
        background-image: url("/images/assets/Label.png");
        background-repeat: no-repeat;
        background-size: 250px 125px;
        height: 125px;
        width: 250px;
        padding: 40px 20px 0;
        text-align: left;
        margin: 0;
    }

    .year-label img {
        width: 125px;
    }

    @media (max-width: 932px) {
        .year-label {
            grid-column-end: 2;
            background-size: 250px 125px;
            height: 125px;
            margin-top: 20px;
            margin-left: 20px;
        }
    }

    #product-component-1571344510124,
    #product-component-1571344433543,
    #product-component-1602178881523,
    #product-component-1602178731128,
    #product-component-1602178988244 {
        display: none;
    }

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

    .products {
        background-color: lightgrey;
        display: grid;
        grid-template-columns: 1fr 4fr 4fr;
        width: 100%;
        overflow: scroll;
        padding: 40px 124px;
    }

    @media (max-width: 1630px) {
        .products {
            padding: 40px 64px;
        }
    }
    @media (max-width: 932px) {
        .products {
            grid-template-columns: 1fr;
            grid-gap: 12vw;
            padding: 0px;
            overflow: hidden;
        }
    }

    .fixed {
        position: absolute;
        background-color: #d3d3d3;
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

    .product-card {
        margin: 22px 80px;
    }
    @media (max-width: 1630px) {
        .product-card {
            margin:22px;
        }
    }

    @media (max-width: 932px) {
        .product-card {
            padding: 8px 22px;
            margin: 0;
        }
    }


    @media (max-width: 932px) {
        .sub-text {
            margin-left: 12px;
        }
    }
</style>
