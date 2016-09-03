<template>
    
    <div class="pod">
         <div
            class="pod__content"
            :style="{
                backgroundImage: 'linear-gradient(to right, #f7f7f7 0%, #f7f7f7 ' + width + '%, #fff ' + width + '%, #fff 100%)'
            }
        ">
            
            <component class="pod__icon" is="Icon" icon="laptop"></component> 
            
            <div class="pod__title">minuserver.ee</div> 
            
            <div class="pod__subtitle" v-if="width < 100">{{ status }}</div>

        </div>
    </div>

</template>

<script>

    import dynamics from 'dynamics.js'
    import Icon from '../components/Icon.vue'

    export default {
        components: {
            Icon
        },
        data() {
            return { width: 0 };
        },
        computed: {
            status: function() {
                return [
                    'Installeerin serverit','Lisan Zone+ paketid','Lõpetan'
                ][Math.round(2 * this.width  / 100)]
            }
        },
        created() {
            dynamics.animate(this, {width: 100}, {
                type: dynamics.bezier,
                duration: 20000,
                points: [{"x":0,"y":0,"cp":[{"x":0.1,"y":0}]},{"x":0.133,"y":0.156,"cp":[{"x":0.033,"y":0.156},{"x":0.269,"y":0.2}]},{"x":0.335,"y":0.55,"cp":[{"x":0.235,"y":0.55},{"x":0.435,"y":0.55}]},{"x":0.477,"y":0.682,"cp":[{"x":0.377,"y":0.682},{"x":0.577,"y":0.682}]},{"x":0.592,"y":0.857,"cp":[{"x":0.492,"y":0.857},{"x":0.692,"y":0.857}]},{"x":0.939,"y":0.997,"cp":[{"x":0.821,"y":0.883},{"x":1.039,"y":0.997}]},{"x":1,"y":1,"cp":[{"x":0.9,"y":1}]}]
            })
        }
    }

</script>

<style>
    .pod {
        width: 100%;
        border: 1px solid #f7f7f7;
    }
    .pod__icon {
        margin-right: $margin-xs;
    }
    .pod__title {
        font: $font-heading-lg;
        margin-right: $margin-xs;
    }
    .pod__subtitle {
        font: $font-heading-lg;
        color: $green;
    }
    .pod__content {
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>