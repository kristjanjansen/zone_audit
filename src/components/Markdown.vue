<template>

    <div class="markdown" v-html="renderedText"></div>

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

<style>
    .markdown p {
        margin: 0;
        margin-bottom: 1rem;
        color: #888;
        line-height: $line-height-lg;
    }
    .markdown p:last-child {
        margin: 0;
    }
    .markdown del {
        color: red;
        text-decoration: none;
    }
    .markdown a {
        color: #333;
    }
    .markdown strong {
        font-weight: 600;
        color: #333;
    }
    .markdown strong a {
        background: $cool;
        border-radius: 4px;
        color: white;
        font: $font-text-sm;
        padding: 0.05rem 0.3rem;
        text-decoration: none;
    }
    .markdown del a {
        background: red;
        border-radius: 4px;
        color: white;
        font: $font-text-sm;
        padding: 0.05rem 0.3rem;
        text-decoration: none;
    }

</style>