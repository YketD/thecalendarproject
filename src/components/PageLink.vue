<template>
    <div class="hello">
        <div class="overlay"></div>
        <img class="link-image" :src="imageTitle">
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
            transition: all .2s ease-in-out;
        }

        .link-image:hover{
            -webkit-transform: scale(1.03);
            -moz-transform: scale(1.03);
            -ms-transform: scale(1.03);
            -o-transform: scale(1.03);
            transform: scale(1.03);
        }

        .overlay {
            left:0;
            top:0;
            width: 100%;
            height: 100%;
            background: #000000;
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
