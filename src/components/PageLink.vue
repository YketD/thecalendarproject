<template>
    <div class="hello">
        <img class="link-image" :src="imageTitle" >
    </div>
</template>

<script>
    export default {
        name: "PageLink",
        props: {
            imageTitle: String
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 968px) {
        .link-image {
            width: 18vw;
        }
    }
    @media screen and (max-width: 968px) {
        .hello {
            width: 92vw;
            padding: 12px 24px;
        }

        .link-image {
            width: 100%;
        }
    }


</style>
