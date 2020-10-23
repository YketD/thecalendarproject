<template>
    <div>
        <div class="headline-container">
            <h1 id="headline">THE NUDE CALENDER PROJECT</h1>
            <div class="image-container">
                <img src="/images/assets/kalender-logo.png" />
            </div>
        </div>

        <span class="sub-text">Shot by Lara Verheijden</span>
        <br />
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style lang="scss" scoped>
    svg {
        max-width: 20px;
        margin-top: 4px;
    }
    .headline-container {
        width          : 100%;
        height         : 80px;
        display        : flex;
        flex-direction : row;

        @media (max-width : 1230px) {
            height : auto;
        }

        img {
            width : 41px;
        }

        #headline {
            font-size   : 4em;
            margin      : 12px;
            padding     : 0;
            text-align  : left;
            color       : #aa443c;
            font-weight : 400;

            @media (max-width : 500px) {
                font-size   : 3em;
                margin-left : 6px;
            }
        }

        .image-container {
            margin-top : 10px;

            @media (max-width : 500px) {
                margin-top   : 16px;
                margin-right : 16px;
            }
        }
    }

    .sub-text {
        font-size   : 18px;
        color       : #aa443c;
        text-align  : left;
        margin-left : 22px;

        &.ideal {
            margin-left: 4px;
            margin-top:-8px;
            font-size: 14px;
        }

        @media (max-width : 1020px) {
            margin-left : 10px;
        }

        @media (max-width : 500px) {
            font-size : 14px;
        }
    }
</style>
