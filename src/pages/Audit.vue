<template>

    <div>
    
        <component is="Header" active="/" toggles="true"></component>
        
        <div class="main">

            <div class="main__menu">

                <component is="MainMenu"></component>

            </div>

            <div class="main__content">

                <component is="MainContent"></component>

            </div>

        </div>

    </div>

</template>

<script>

    import Header from '../components/Header.vue'
    import MainMenu from '../components/MainMenu.vue'
    import MainContent from '../components/MainContent.vue'

    export default {
        components: {
            Header,
            MainMenu,
            MainContent
        }
    }

</script>

<style>
    body {
        padding: 2em;
        margin: 0;
    }
    .main {
        display: flex;
        padding-top: 2em;
    }
    .main__menu {
        margin-right: 4em;
    }
</style>