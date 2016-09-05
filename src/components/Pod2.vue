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

                <div class="col-4">

                    <div class="row row-around">

                        <div class="col-2">
                       
                            <badge
                                backicon="globe"
                                fronticon="check"
                                color="green"
                            ></badge> 
                       
                        </div> 

                        <div class="col-9" v-html="content.domain2"></div>

                    </div>

                </div>

                <div class="col-4">
            
                    <div class="row row-around">

                        <div class="col-2">

                            <badge
                                backicon="server"
                                fronticon="check"
                                color="green"
                            ></badge> 
                        
                        </div>

                        <div class="col-9">

                            <div v-html="content.server1"></div>

                            <component
                                is="Progressbar2"
                                label="Failide kettaruum"
                                color="#aaa"
                                value="80"
                                max="120"
                                unit="GB"
                            >
                            </component>

                            <component
                                is="Progressbar2"
                                label="Andmebaaside kettaruum"
                                color="#aaa"
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

                            <div v-html="content.server2"></div>

                        </div>

                    </div>

                    <!-- Email -->

                    <div class="row row-around">

                        <div class="col-2">

                            <badge
                                backicon="envelope"
                                fronticon="check"
                                color="green"
                            ></badge> 
                        
                        </div>

                        <div class="col-9">

                            <div v-html="content.email1"></div>

                            <component
                                is="Progressbar2"
                                label="E-maili kettaruum"
                                color="#ccc"
                                value="20"
                                max="80"
                                unit="GB"
                            >
                            </component>

                            <div v-html="content.email2"></div>

                            <component
                                is="FeatureToggle"
                                title="Väärposti suunamine"
                                button="Seadista"
                                status="Jah"
                            ></component>


                        </div>

                    </div>

                </div>

                <div class="col-1">

                    <badge
                        class="margin-left"
                        backicon="cube"
                        fronticon="check"
                        color="#888"
                    ></badge> 
                    
                </div>

                <div class="col-3">

                    <div v-html="content.soft1"></div>

                    <div class="row row-middle">
                        
                        <div class="col-8">
                            
                            Lets Encrypt installeeritud

                        </div>

                        <div class="col-4">
                        
                            <component is="Toggle"></component>
                        
                        </div>

                    </div>

                    <div v-html="content.soft2"></div>
                    
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
    import BarGraph from '../components/BarGraph.vue'
    import Toggle from '../components/Toggle.vue'
    import FeatureToggle from '../components/FeatureToggle.vue'

    export default {
        components: {
            Icon,
            Badge,
            BarGraph,
            Toggle,
            FeatureToggle
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
    .pod h1 {
        font: $font-text-lg;
        text-align: center;
        padding: 0.5em;
        margin: 1em auto;
        border: 1px dotted #ccc;
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
    .pod__top {
        height: 4em;
        padding: 1em;
    }
    .pod__bottom {
        border-top: 1px solid #555;
        padding: 1em;
    }

</style>