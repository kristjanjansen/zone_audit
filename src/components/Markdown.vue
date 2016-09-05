<template>

    <div v-html="renderedText"></div>

</template>

<script>

    import marked from 'marked';

    marked.setOptions({ breaks: true })

    export default {
        props: {
            text: {default: ''},
        },
        computed: {
            renderedText: function() { return marked(this.text) }
        }
    }

</script>