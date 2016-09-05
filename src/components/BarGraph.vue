<template>
    
    <div>
        
        <div :style="{
            display: 'flex',
            justifyContent: 'space-between',
        }">
           
            <div>
                {{ title }}
            </div>
            

            <div :style="{marginBottom: '0.5em', display: 'flex'}">

                <div :style="{
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
            color: { default: '#ccc'},
            value: { default: 0},
            max: { default: 0},
            title: { default: ''},
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