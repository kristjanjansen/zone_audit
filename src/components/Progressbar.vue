<template>
    
    <div class="Progress">
        <div class="Progress__step" :style="{width: width + '%'}"></div>
    </div>

</template>

<script>

    import anime from 'animejs'

    export default {
        data() {
            return { width: 0 };
        },
        created: function () {
            anime({
                targets: this,
                width: [1, 100],
                duration: 2000,
                easing: 'linear'
            })
        }
    }

</script>

<style>
    .Progress {
        background: $gray;
    }
    .Progress__step {
        background: $blue;
        height: 10px;
    }
</style>