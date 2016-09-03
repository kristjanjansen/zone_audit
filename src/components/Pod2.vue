<template>
    
    <div class="pod">
        
        <div class="pod__top" @click="open = ! open">

            <div class="row row-middle">

                <div class="col-1">
                    <component
                        is="Icon"
                        icon="warning"
                        background="red"
                        color="white"
                        size="3"
                    ></component>
                </div>

                <div
                    class="col-8"
                    v-html="content.domain1"
                >
                </div>

            </div>

        </div>

        <div class="pod__bottom" v-show="open">

            <div class="row">

                <div class="col-1">

                    <badge
                        backicon="world"
                        fronticon="check"
                        color="green"
                    ></badge> 
                    
                </div>

                <div
                    class="col-3"
                    v-html="content.domain2"
                >
                </div>

                <div class="col-1">

                    <badge
                        backicon="server"
                        fronticon="warning"
                        color="red"
                    ></badge> 
                    
                </div>

                <div class="col-3">
            
                    <div v-html="content.server1"></div>

                    <component
                        is="Progressbar2"
                        label="Kettaruumi kasutus"
                        color="#ccc"
                        value="80"
                        max="120"
                        unit="GB"
                    >
                    </component>

                    <component
                        is="Progressbar2"
                        label="Andmebaaside maht"
                        color="#ccc"
                        value="15"
                        max="40"
                        unit="GB"
                    >
                    </component>

                    <component
                        is="Progressbar2"
                        label="Inodede arv"
                        color="red"
                        value="100000"
                        max="100000"
                        icon="warning"
                    >
                    </component>

                </div>

                <div class="col-1">

                    <badge
                        class="margin-left"
                        backicon="lock"
                        fronticon="warning"
                        color="orange"
                    ></badge> 
                    
                </div>

                <div class="col-3">

                <div class="row row-middle">
                    <div class="col-8">
                        
                        Lets Encrypt installeeritud

                    </div>
                    <div class="col-4">
                        <component is="Toggle"></component>
                    </div>
                </div>
                    
                </div>

            </div>

        </div>
                        
    </div>

</template>

<script>

    import yaml from 'js-yaml';
    import marked from 'marked';
    import _ from 'lodash';

    import Icon from '../components/Icon.vue'
    import Badge from '../components/Badge.vue'
    import Progressbar2 from '../components/Progressbar2.vue'
    import Toggle from '../components/Toggle.vue'

    export default {
        components: {
            Icon,
            Badge,
            Progressbar2,
            Toggle
        },
        data() {
            return {
                open: true,
                content: {}
            };
        },
        created() {
            this.$http.get('./data/dashboard.yaml').then(res => {
                this.content = _
                    .chain(yaml.safeLoad(res.data))
                    .mapValues(value => marked(value))
                    .value()
            })
        }
    }

</script>

<style>
    .pod {
        width: 100%;
        border: 1px solid #555;
        border-radius: 2px;
        font: $font-text-sm;
        line-height: $line-height-md;
    }
    .pod h2 {
        font: $font-heading-sm;
        text-transform: uppercase;
        color: #aaa;
        margin: 0 0 0.5em 0;
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