<template>
    
    <div class="pod2">
        
        <div class="pod2__top" @click="open = ! open">

            <component
                slot="content"
                is="Renderer"
                :components="content.domain_top"
            >
            </component>

            <component is="Comment" :comment="content.domain_top_comment"></component>

        </div>

        <div class="pod2__bottom" v-show="open">

            <div class="row" v-for="row in content.domain_bottom">

                <div class="col-4" v-for="col in row.row">
                
                    <component is="PodItem">

                        <component
                            is="Badge"
                            slot="badge"
                            :backicon="col.backicon"
                            :fronticon="col.fronticon"
                            :color="col.color"
                        >
                        </component>
                        <component
                            slot="content"
                            is="Renderer"
                            margin="true"
                            :components="col.components"
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
    import Comment from './Comment.vue'

    export default {
        components: {
            Badge,
            Icon,
            PodItem,
            Renderer,
            Comment
        },
        props: ['datafile'],
        data() {
            return {
                open: false,
                content: []
            };
        },
        created() {
            this.$http.get('./data/' + this.datafile).then(res => {
                this.content = yaml.safeLoad(res.data)
            })
        }
    }

</script>

<style>
    .pod2 {
        width: 100%;
        border: 1px solid #bbb;
        border-radius: 3px;
        font: $font-text-sm;
        line-height: $line-height-md;
    }
    .pod2__top {
        padding: 1em;
    }
    .pod2__top > div {
        display: flex;
        align-items: center;
    }
    .pod2__top > div > * {
        margin-right: $margin-sm;
    }
    .pod2__bottom {
        border-top: 1px solid #bbb;
        ppadding: 1em;
    }
    .pod2__bottom > .row {
        border-bottom: 1px solid #bbb;
        margin-bottom: 1rem;
        padding: 1rem;
    }
    .pod2__bottom > .row:last-child {
        border: 0;
        margin: 0;
    }
</style>