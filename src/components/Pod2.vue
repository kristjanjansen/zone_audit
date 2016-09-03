<template>
    
    <div class="pod">
        
        <div class="pod__top" @click="open = ! open">

            <div class="row">

                <div class="col-4">
                
                </div>

                <div class="col-8">
            
                Hello

                </div>

            </div>

        </div>

        <div class="pod__bottom" v-show="open">

            <div class="row">

                <div class="col-4">

                    <badge
                        backicon="server"
                        fronticon="warning"
                        color="orange"
                    ></badge> 
                    
                </div>

                <div class="col-8">
            
                Hello

                </div>

            </div>

        </div>
                        
    </div>

</template>

<script>

    import Icon from '../components/Icon.vue'
    import Badge from '../components/Badge.vue'

    export default {
        components: {
            Icon,
            Badge
        },
        data() {
            return { open: false };
        },
        created() {
        }
    }

</script>

<style>
    .pod {
        width: 100%;
        border: 1px solid #555;
        border-radius: 2px;
        font: $font-text-sm;
    }
    .pod__top {
        height: 4em;
        padding: 1em;
    }
    .pod__bottom {
        height: 10em;
        border-top: 1px solid #555;
        padding: 1em;
    }

</style>