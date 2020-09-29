<template>
    <div class="background">
        <div class="image-pattern">
            <img v-for="(image, index) in numbers1" alt="customerImage" :class="'image-' + index" class="image"
                 :src="'/images/BulkResizePhotos/' + image + '.jpg'" />
        </div>
        <div class="image-pattern">
            <img v-for="(image, index) in numbers2" alt="customerImage" :class="'image-' + index" class="image"
                 :src="'/images/BulkResizePhotos/' + image + '.jpg'" />
        </div>
        <div class="image-pattern">
            <img v-for="(image, index) in numbers3" alt="customerImage" :class="'image-' + index" class="image"
                 :src="'/images/BulkResizePhotos/' + image + '.jpg'" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "background-component",
        data() {
            return {
                numbers1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                numbers2: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                numbers3: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46]
            }
        }
    }
</script>

<style scoped>

    @media screen and (max-width: 968px) {
        .background {
            opacity: .3;
            position: absolute;
            overflow: hidden;
            top: 0;
        }

        .image {
            -webkit-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -ms-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5) translateY(-200px);

        }
    }

    .background {
        width: 100vw;
        /*height: 1000vw;*/
        z-index: -1;
        overflow-x: hidden;
    }

    .image-pattern {
        width: 100vw;
        position: relative;
        height: 300vh;
    }

    .image {
        opacity: .5;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    .image-0 {
        width: 25vw;
        position: absolute;
        left: 5vw;
        top: -2vh;
    }

    .image-1 {
        width: 18vw;
        position: absolute;
        left: 43vw;
        top: 4vh;
    }

    .image-2 {
        width: 15vw;
        position: absolute;
        left: 72vw;
        top: 16vh;
    }

    .image-3 {
        width: 22vw;
        position: absolute;
        left: 76vw;
        top: 65vh;
    }

    .image-4 {
        width: 27vw;
        position: absolute;
        left: 76vw;
        top: 114vh;
    }

    .image-5 {
        width: 24vw;
        position: absolute;
        left: 3vw;
        top: 68vh;
    }

    .image-6 {
        width: 24vw;
        position: absolute;
        left: 34vw;
        top: 54vh;
    }

    .image-7 {
        width: 24vw;
        position: absolute;
        left: 45vw;
        top: 109vh;
    }

    .image-8 {
        width: 20vw;
        position: absolute;
        left: 85vw;
        top: 170vh;
    }

    .image-9 {
        width: 24vw;
        position: absolute;
        left: 32vw;
        top: 230vh;
    }

    .image-10 {
        width: 17vw;
        position: absolute;
        left: 9vw;
        top: 146vh;
    }

    .image-11 {
        width: 24vw;
        position: absolute;
        left: 34vw;
        top: 164vh;
    }

    .image-12 {
        width: 24vw;
        position: absolute;
        left: 65vw;
        top: 240vh;
    }

    .image-13 {
        width: 24vw;
        position: absolute;
        left: -4vw;
        top: 190vh;
    }

    .image-14 {
        width: 16vw;
        position: absolute;
        left: 60vw;
        top: 189vh;
    }
</style>
