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
        text-decoration: none;
        border-bottom: 1px solid #ccc;
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
        border: none;
    }
    .markdown em a {
        border-radius: 1em;
        border: 1px solid #aaa;
        font: $font-text-xs;
        padding: 0.1rem 0.5rem;
        text-decoration: none;
    }
    .markdown h1 em a {
        font: $font-text-lg;
        padding: 0.5rem 1rem;
        text-transform: none;
    }
    .markdown del a {
        background: red;
        border-radius: 4px;
        color: white;
        font: $font-text-xs;
        padding: 0.2rem 0.5rem;
        text-decoration: none;
        border: none;
    }
    .markdown h1 {
        font: $font-heading-lg;
        text-transform: uppercase;
        color: #444;
    }
    .markdown h2 {
        font: $font-heading-sm;
        text-transform: uppercase;
        color: #aaa;
        margin: 0.5em 0 0.5em 0;
    }
    .markdown hr {
        border: 0;
        border-top: 1px solid #ccc;
        height: 0;
        margin: 1em 0;
    }
    .markdown table {
        width: 100%;
    }
    .markdown td:last {
        text-align: right;
    }

</style>