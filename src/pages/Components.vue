<template>

    <div>
    
        <component is="Logo" subtitle="Komponendid"></component>
        
        <div class="main">

            <component is="Pod"></component>

        </div>

    </div>

</template>

<script>

    import Logo from '../components/Logo.vue'
    import Pod from '../components/Pod.vue'

    export default {
        components: {
            Logo,
            Pod
        }
    }

</script>

<style>
    body {
        padding: 2em;
        margin: 0;
    }
    .main {
        padding-top: 2em;
    }
</style>