<template>
    
    <div :style="{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}">
        
        <div>
            
            {{ title }}

        </div>

         <component is="Toggle"></component>
        
    </div>

</template>

<script>
    
    import Toggle from '../components/Toggle.vue'

    export default {
        components: {
            Toggle
        },
        props: {
            title: { default: ''}
        }
    }

</script>