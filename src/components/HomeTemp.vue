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
    };
</script>
