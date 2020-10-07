<template>
    <div class="hello">
        <h1 class="label red" v-if="label">{{label}}</h1>
        <div class="product-container">
            <h1 class="red">{{label}}</h1>
            <img class="product-image" :src="imageTitle">
            <div class="text"><h2>Limited edition <br /> Signed print + Calendar</h2></div>
            <img class="buy-now" src="../../public/images/buttons/buy-now.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            imageTitle: String,
            label: {
                type: String,
                required: false,
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin-bottom: 0;
    }

    .label {
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (min-width: 968px) {
        .hello {
            transition: all .2s ease-in-out;
            cursor: pointer;
        }

        .hello:hover {
            transform: scale(1.04);
        }
    }

    .red {
        color: #aa443c;
    }

    .product-container {
        background: white;
        border: 7px solid #aa443c;
        position: relative;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .product-image {
        width: auto;
        padding:  0 32px  ;
        max-width: 100%;
        box-sizing: border-box;
    }

    .buy-now {
        width: 256px;
    }

    .hello {
        position: relative;
    }
</style>
