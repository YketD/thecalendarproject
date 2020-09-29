<template>
    <div class="home-container">
        <div class="fixed grid-75-25">
            <div class="products">
                <product-card
                        class="product-card"
                        label="2021"
                        v-on:click.native="orderProduct('frame-product-4256651706434')"
                        :image-title="'/images/products/cover-2020.png'"></product-card>
                <product-card
                        class="product-card"
                        v-on:click.native="orderProduct('frame-product-4256713769026')"
                        :image-title="'/images/products/product-2019.jpg'"></product-card>
                <product-card
                        class="product-card"
                        padding="true"
                        v-on:click.native="orderProduct('frame-product-4256651706434')"
                        :image-title="'/images/products/print-with-calendar.png'"></product-card>
                <div></div>
                <product-card
                        class="product-card"
                        label="2019"
                        v-on:click.native="orderProduct('frame-product-4256713769026')"
                        :image-title="'/images/products/product-2019.jpg'"></product-card>
            </div>
        </div>
        <background-component />

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
                console.log()
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
    #product-component-1571344510124, #product-component-1571344433543 {
        display: none;
    }

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
            padding: 10vw;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 5vw;
        }

        .button-container-box {
            padding: 5px;
            background: #ffffff;
            border: 8px solid #aa443c;
        }

        .fixed {
            position: fixed;
            width: 100vw;
            height: 100vh;
            display: flex;
            top: 0;
        }

        .logo {
            width: 30vw;
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

    .products {
        width: 100%;
        overflow: scroll;
    }
</style>
