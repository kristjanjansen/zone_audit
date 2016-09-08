<script>

    import BarGraph from './BarGraph.vue'
    import Comment from './Comment.vue'
    import FeatureStatus from './FeatureStatus.vue'
    import FeatureToggle from './FeatureToggle.vue'
    import Markdown from './Markdown.vue'
    import Icon from './Icon.vue'

    export default {
        components: {
            BarGraph,
            Comment,
            FeatureStatus,
            FeatureToggle,
            Markdown,
            Icon
        },
        props: {
            components: { default: () => []},
            margin: { default: false }
        },
        render: function(h) {
            var margin = !! this.margin
            return h('div', this.components.map(function(component) {
                return h(component.component, {
                    style: { marginBottom: margin ? '2em' : false },
                    props: component.props
                })
            }))
        } 
    }

</script>