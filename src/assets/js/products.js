// 2020
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

// Ams 2021 - calender
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

//ams 2021 - calendar & print
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
                id: '4701905518658',
                node: document.getElementById('product-component-1603049171094'),
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
