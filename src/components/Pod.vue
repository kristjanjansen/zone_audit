<template>
    
    <div class="pod">
        
        <div class="pod__top" @click="open = ! open">

            <div class="row">

                <div class="col-1">
                        <component
                            is="Icon"
                            icon="check"
                            color="white"
                            background="#888"
                        >
                        </component>

                </div>

                <div class="col-4">

                        <component
                            slot="content"
                            is="Renderer"
                            :components="content.domain_top"
                        >
                        </component>

                </div>

            </div>

        </div>

        <div class="pod__bottom" v-show="open">

            <div class="row">

                <div class="col-4">
                
                    <component is="PodItem">

                        <component
                            is="Badge"
                            slot="badge"
                            backicon="globe"
                            fronticon="check"
                        >
                        </component>
                        <component
                            slot="content"
                            is="Renderer"
                            :components="content.domain_bottom"
                        >
                        </component>

                    </component>

                </div>

                <div class="col-4">

                    <component is="PodItem">

                        <component
                            is="Badge"
                            slot="badge"
                            backicon="server"
                            fronticon="check"
                        >
                        </component>
                        <component
                            slot="content"
                            is="Renderer"
                            :components="content.server_bottom"
                        >
                        </component>

                    </component>

                    <component is="PodItem">

                        <component
                            is="Badge"
                            slot="badge"
                            backicon="envelope"
                            fronticon="check"
                        >
                        </component>
                        <component
                            slot="content"
                            is="Renderer"
                            :components="content.email_bottom"
                        >
                        </component>

                    </component>

                </div>

                <div class="col-4">

                    <component is="PodItem">

                        <component
                            is="Badge"
                            slot="badge"
                            backicon="cube"
                            fronticon="check"
                        >
                        </component>
                        <component
                            slot="content"
                            is="Renderer"
                            :components="content.other_bottom"
                        >
                        </component>

                    </component>

                </div> <!-- col -->

            </div> <!-- row -->

        </div>
                        
    </div>

</template>

<script>

    import yaml from 'js-yaml';

    import Badge from './Badge.vue'
    import Icon from './Icon.vue'
    import PodItem from './PodItem.vue'
    import Renderer from './Renderer.vue'

    export default {
        components: {
            Badge,
            Icon,
            PodItem,
            Renderer,
        },
        data() {
            return {
                open: true,
                content: {}
            };
        },
        created() {
            this.$http.get('./data/pod.yaml').then(res => {
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
    .pod h1 {
        font: $font-heading-lg;
        text-transform: uppercase;
        color: #444;
    }
    .pod h2 {
        font: $font-heading-sm;
        text-transform: uppercase;
        color: #aaa;
        margin: 0.5em 0 0.5em 0;
    }
    .pod hr {
        border: 0;
        border-top: 1px solid #ccc;
        height: 0;
        margin: 1em 0;
    }
    .pod table {
        width: 100%;
    }
    .pod td:last {
        text-align: right;
    }
</style>