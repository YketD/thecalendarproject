<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>

    @font-face {
        font-family: 'HelveticaNeue';
        src: url('/fonts/HelveticaNeueBold.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
    }

    .logo {
        position: fixed;
        top: 2vh;
        right: 5vw;
        width: 35vw;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        font-family: "Helvetica Neue";
        width: 100vw;
        height: 100vh;
    }
</style>
