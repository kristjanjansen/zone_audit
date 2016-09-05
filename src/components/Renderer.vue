<script>

    import Markdown from './Markdown.vue'
    import FeatureToggle from './FeatureToggle.vue'
    import FeatureStatus from './FeatureStatus.vue'
    import BarGraph from './BarGraph.vue'

    export default {
        components: {
            Markdown,
            FeatureToggle,
            FeatureStatus,
            BarGraph
        },
        props: {
            components: { default: () => []}
        },
        render: function(h) {
            return h('div', this.components.map(function(component) {
                return h(component.component, {
                    style: { marginBottom: '2em' },
                    props: component.props
                })
            }))
        } 
    }

</script>