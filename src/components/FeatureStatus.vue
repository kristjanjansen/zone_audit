<template>
    
    <div :style="{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}">
        
        <div>
            
            {{ title }}

        </div>

        
        <div>

            <a href="">{{ button }}</a>

        </div>

        <div>

            {{ value }}

        </div>

        <div :style="{ fontWeight: 'bold', color: 'green', textTransform: 'uppercase'}">

            {{ status }}

        </div>
        
    </div>

</template>

<script>
    
    export default {
        props: {
            title: { default: ''},
            value: { default: ''},
            status: { default: ''},
            button: { default: ''}
        }
    }

</script>