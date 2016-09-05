<template>
    
    <div class="pod">
        
        <div class="pod__top" @click="open = ! open">

        </div>

        <div class="pod__bottom" v-show="open">

            <div class="row">

                <div class="col-4">
                
                    <component is="Renderer" :components="content.domain">
                
                </div>

                <div class="col-4">

                    <component is="Renderer" :components="content.server">

                </div>

                <div class="col-4">

                    <component is="Renderer" :components="content.other">

                </div>

            </div>

        </div>
                        
    </div>

</template>

<script>

    import yaml from 'js-yaml';

    import Renderer from '../components/Renderer.vue'

    export default {
        components: {
            Renderer
        },
        data() {
            return {
                open: true,
                content: {}
            };
        },
        created() {
            this.$http.get('./data/pod3.yaml').then(res => {
                this.content = yaml.safeLoad(res.data)
            })
        }
    }

</script>

<style>
    .pod {
        width: 100%;
        border: 1px solid #555;
        border-radius: 3px;
        font: $font-text-sm;
        line-height: $line-height-md;
    }
    .pod__top {
        height: 4em;
        padding: 1em;
    }
    .pod__bottom {
        border-top: 1px solid #555;
        padding: 1em;
    }
</style>