<template>

    <div :style="{
        display: 'flex',
        alignItems: 'center'
    }">

        <div :style="{
            fontWeight: 'bold',
            marginRight: '7px',
            color: 'rgb(130,130,130)',
            opacity: String(1 - offset + 0.2)
        }">
          EI
        </div>

        <div
            :style="{
                background: 'rgba(103,148,54,' + offset + ')',
                position: 'relative',
                width: width + 'px',
                height: (size + 2) + 'px',
                borderRadius: (size / 2 + 2) + 'px',
                border: '1px solid #888',
            }"
            @click="toggle"
        >
        
            <div
                :style="{
                background: 'white',
                position: 'absolute',
                top: '0px',
                left: (offset * (width - size - 2)) + 'px',
                width: size + 'px',
                height: size + 'px',
                borderRadius: (size / 2 + 2) + 'px',
                border: '1px solid #888'
            }"
          >
          </div>

        </div>

        <div :style="{
            fontWeight: 'bold',
            marginLeft: '7px',
            color: 'rgb(103,148,54)',
            opacity: String(offset + 0.2)
        }">
            JAH
        </div>

    </div>

</template>

<script>

    import dynamics from 'dynamics.js'

    export default {
        data: function() {
            return {
                offset: 0,
                width: 40,
                size: 20
            } 
        },
        methods: {
            toggle: function() {
                dynamics.animate(this, { offset: 1 - this.offset}, {
                    type: dynamics.easeInOut,
                    duration: 200,
                    friction: 100
                });
            }
        }
    }

</script>