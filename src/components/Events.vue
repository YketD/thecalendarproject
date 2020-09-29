<template>
    <div class="home-container">
        <div class="fixed">
            <router-link to="/"> <img src="/images/buttons/logo.png" class="logo" /> </router-link>
            <div class="events-container">
                <img class="image-banner" src="../assets/emailbanner.jpg">
            </div>
            <div class="buttons">
                <div class="button-container">
                    <page-link
                            :image-title="'/images/buttons/agenda.png'"></page-link>
                </div>

                <a HREF="mailto:stadman.lara@gmail.com">
                    <div class="button-container">
                        <page-link
                                :image-title="'/images/buttons/contact.png'"></page-link>
                    </div>
                </a>
            </div>
        </div>
        <background-component></background-component>
    </div>
</template>

<script>
    import PageLink from "@/components/PageLink"
    import BackgroundComponent from '@/components/background-component'

    export default {
        name: "Events",
        components: {
            PageLink,
            BackgroundComponent
        }
    }
</script>

<style scoped>
    .events-container {
        text-align: left;
        color: #ba6123;
        overflow: scroll;
        background: rgba(255,255,255,.4);
        box-shadow: 0 0 5px 10px rgba(255,255,255,.4);
    }

    @media screen and (min-width: 968px) {

        .buttons {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 45vh;
            right: 8vw;
        }

        .logo {
            width: 30vw;
        }

        .fixed {
            position: fixed;
            width: 100vw;
            height: 100vh;
            display: flex;
            top: 0;
            z-index: 1;
        }

        .events-container {
            width: 45vw;
            padding: 10vh;
            font: 'HelveticaNeue';
            font-weight: bold;
            letter-spacing: -1px;
            line-height: 24px;
        }
    }

    .events-container {
        font: 'Helvetica Neue';
        font-weight: 900;

    }

    h1 {
        font-size: 128px;
        line-height: 128px;
        letter-spacing: -5px;
    }

    h2 {
        font-size: 64px;
        line-height: 64px;
        letter-spacing: -3px;
    }

    h3 {
        font-size: 32px;
        line-height: 32px;
    }

    .image-banner {
        width: 100%;
    }

    @media screen and (max-width: 968px) {
        .home-container {
            width: 100vw;
        }

        .logo {
            position: relative;
            width: 90vw;
            padding: 24px;
            padding-left: 10vw;
        }

        .events-container {
            padding: 24px;
        }

        h1 {
            margin-top: 0;
            font-size: 64px;
            letter-spacing: -1px;

        }

        h2 {
            margin-top: 64px;
            font-size: 40px;
            letter-spacing: -1px;


        }

        h3 {
            font-size: 24px;
        }


    }
</style>
