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
    .link-image {
        width: 18vw;
    }
</style>
