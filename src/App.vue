<template>
    <div id="app">
        <router-view />
    </div>
</template>
<style>

    #product-component-1570299337847, #product-component-1571090255922 {
        display: none;
    }

    @font-face {
        font-family: 'HelveticaNeue-75';
        src: url('/fonts/NHaasGroteskDSStd-75Bd.svg#NHaasGroteskDSStd-75Bd') format('svg'),
        url('/fonts/NHaasGroteskDSStd-75Bd.ttf') format('truetype'),
        url('/fonts/NHaasGroteskDSStd-75Bd.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    .logo {
        position: fixed;
        top: 2vh;
        right: 5vw;
        width: 35vw;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        font-family: "HelveticaNeue-75";
        width: 100vw;
        height: 100vh;
    }
</style>
