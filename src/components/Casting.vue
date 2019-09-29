<template>
    <div>
        <img src="/images/buttons/logo.png" class="logo" />

        <div class="body">
            <img class="casting-asset-big" src="/images/assets/casting-asset.jpg">
            <div class="row">
                <img class="header-image" src="/images/buttons/casting-title.png">
                <h1></h1>
                <form class="row">
                    <p>
                        <label for="name">naam/name</label>
                        <br>
                        <span>
                            <input id="name" type="text" />
                        </span>
                    </p>
                    <p>
                        <label for="email">emailadres</label>
                        <br>
                        <span>
                            <input id="email" type="text" />
                        </span>
                    </p>
                    <p>
                        <label for="age">leeftijd/age</label>
                        <br>
                        <span>
                            <input id="age" type="text" />
                        </span>
                    </p>
                    <p>
                        <label for="length">lengte/height</label>
                        <br>
                        <span>
                            <input id="length" type="text" />
                        </span>
                    </p>
                    <p>
                        <label for="social">instagram/facebook</label>
                        <br>
                        <span>
                            <input id="social" type="text" />
                        </span>
                    </p>
                </form>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Casting"
    }
</script>

<style scoped>


    .casting-asset-big {
        max-height: 80vh;
        border: 5px solid #aa443d;
    }

    p{
        margin: 1rem 0;
    }

    span {
        width: 100%;
    }
    label {
        line-height: 2.4rem;
        font-size: 24px;
        font-weight: 600;
    }

    input {

        background: #ffffff;
        border: solid 1px #cccccc;
        box-sizing: border-box;
        outline: none;
        padding: 0.36rem 0.66rem;
        -webkit-appearance: none;
        outline-offset: 0;
        border-radius: 0;
        width: 60%;

        font-weight: 400;
        line-height: 1.8;
        text-rendering: optimizeLegibility
    }

    form {
        width: 40vw;
    }

    .body {
        display: flex;
        margin: 10vh 5vw;
    }

    .row {
        display: flex;
        flex-direction: column;
    }

    .header-image {
        width: 12vw;
    }
</style>
