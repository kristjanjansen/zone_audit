<template>
    
    <div :style="{marginBottom: '1em'}">
        
        <div
            :style="{
                display: 'flex',
                justifyContent: 'space-between',
        }">
           
            <div :style="{opacity: '0.5'}">
                {{ label }}
            </div>
            

            <div :style="{marginBottom: '0.5em', display: 'flex'}">

                <div :style="{
                    fontWeight: 'bold',
                    color: '#ccc', 
                    marginRight: '0.5em'
                }">
                    {{ value }}{{ unit }} / {{ max }}{{ unit }}
                </div>

                <component
                    is="Icon"
                    v-if="icon"
                    :icon="icon"
                    :color="color"
                    :style="{
                        marginRight: '0.5em'
                    }
                "></component>

                <div :style="{
                    fontWeight: 'bold',
                    color: color, 
                }">
                {{ percentage }}%
                </div>

            </div>
            
        </div>

        <div :style="{ background: '#ddd', borderRadius: radius + 'em'}">
            <div
                :style="{
                    width: percentage + '%',
                    height: '1em',
                    background: color,
                    borderRadius: radius + 'em'
                }">
            </div>
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
            color: { default: ''},
            value: { default: 0},
            max: { default: 0},
            label: { default: ''},
            unit: { default: ''},
            icon: { default: ''}
        },
        computed: {
            percentage: function() {
                return Math.round(this.value / this.max * 100)
            }
        },
        data: function() {
            return {
                radius: 0.3
            }
        }
    }

</script>