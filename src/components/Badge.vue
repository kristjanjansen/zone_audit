<template>
    
    <div class="badge" :style="{ width: size + 'em', height: size + 'em'}">
        
        <div class="badge__backicon">

        <icon
            :icon="backicon"
            :size="size"
            color="#ccc"
        ></icon> 

        </div>

        <div class="badge__fronticon">

        <icon
            :background="color"
            :icon="fronticon"
            :size="size * 0.5"
            color="white"
        ></icon> 

        </div>

    </div>

</template>

<script>

    import Icon from '../components/Icon.vue'

    export default {
        components: {
            Icon
        },
        props: {
            backicon: {default: ''},
            fronticon: {default: ''},
            size: {default: 4},
            color: {default: ''},
        }
    }

</script>

<style>
    .badge {
        position: relative;
    }
    .badge__backicon {
        position: absolute;
        top: 0;
        left: 0;
    }
    .badge__fronticon {
        position: absolute;
        bottom: 0;
        right: 0;
    }

</style>