<template>
    
    <div :style="{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}">
        
        <div>
            
            {{ feature }}

        </div>

        
        <div>

            <a href="">{{ button }}</a>

        </div>

        <div :style="{ fontWeight: 'bold', color: 'green', textTransform: 'uppercase'}">

            {{ status }}

        </div>
        
    </div>

</template>

<script>
    
    export default {
        props: {
            feature: { default: ''},
            status: { default: ''},
            button: { default: ''}
        }
    }

</script>