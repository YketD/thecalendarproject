<template>
    <div class="home-container">
        <top-bar />

        <product-grid />
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";
    import ProductGrid from "@/components/ProductGrid";

    export default {
        name: 'Home',
        components: {
            ProductGrid,
            TopBar,
        },
        methods: {
            orderProduct(fname) {
                let iframe = document.getElementsByName(fname)[0];
                let button = iframe.contentWindow.document.getElementsByTagName('button')[0];
                button.click();
            }
        }
    };
</script>
