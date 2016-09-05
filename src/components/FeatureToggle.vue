<template>
    
    <div :style="{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}">
        
        <div>
            
            {{ title }}

        </div>

        <div :style="{ fontWeight: 'bold', color: '#888', textTransform: 'uppercase'}">

            {{ status }}

        </div>
        
        <component is="Toggle" v-if="show"></component>


        <div :style="{ color: '#ddd', background: '#444', padding: '0.25em 0.5em', borderRadius: '3px'}">

            {{ button }}

        </div>
        
    </div>

</template>

<script>
    
    import Toggle from '../components/Toggle.vue'

    export default {
        components: {
            Toggle
        },
        data: function() {
            return {
                show: !! this.toggle
            } 
        },
        props: {
            title: { default: ''},
            status: { default: ''},
            toggle: { default: ''},
            button: { default: ''}
        }
    }

</script>

<style>
    .featuretoggle {
        padding: 1rem 0;
    }
</style>