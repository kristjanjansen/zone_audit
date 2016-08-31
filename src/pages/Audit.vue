<template>

    <div>
    
        <component is="Logo" subtitle="Sisuaudit" toggles="true"></component>
        
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

    import Logo from '../components/Logo.vue'
    import MainMenu from '../components/MainMenu.vue'
    import MainContent from '../components/MainContent.vue'

    export default {
        components: {
            Logo,
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