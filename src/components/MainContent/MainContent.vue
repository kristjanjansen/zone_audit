<template>
    
    <div class="MainContent">
    
        <div class="MainContent__title">

            {{ activeContent.title }}

        </div>

        <div class="MainContent__body" v-html="activeContent.body"></div>

    </div>

</template>

<script>

    import yaml from 'js-yaml';
    import marked from 'marked';

    marked.setOptions({
        breaks: true
    })

    export default {
        data() {
            return {
                content: [],
                activeContent: {} 
            };
        },
        created: function () {
            this.$http.get('./data/content.yaml').then((res) => {
                this.content = yaml.safeLoad(res.data).map(item => {
                    item.body = marked(item.body)
                    return item
                })
                this.activeContent = this.content.find(item => item.id == 'dashboard')
            })
            this.$events.$on('menuSelected', id => {
                this.activeContent = this.content.find(item => item.id == id)
            })
        }
    }

</script>

<style>
    .MainContent__title {
        color: $blue;
        font: $font-heading-xl;
        margin-bottom: $margin-md;
    }
    .MainContent__body {
        color: $cool;
        font: $font-text-md;
        line-height: $line-height-lg;
        font-weight: 400;
    }
    .MainContent__body p {
        margin-bottom: $margin-md;
    }
    .MainContent__body strong {
        font-weight: 500;
    }
    .MainContent__body h1 {
        font: $font-heading-lg;
        font-weight: normal;
    }
    .MainContent__body h2,
    .MainContent__body h3,
    .MainContent__body h4 {
        font: $font-heading-md;
        font-weight: normal;
    }
    .MainContent__body hr {
        border: 0;
        border-top: 1px solid $cool;
        height: 0;
    }
    .MainContent__body a {
        color: $cool;
    }
    .MainContent__body blockquote {
        margin: 0;
        padding-left: $padding-md;
        border-left: 4px solid $gray;
        opacity: $opacity-md;
    }
    .MainContent__body table {
        width: 100%;
        border: 1px solid $cool;
        border-collapse: collapse;
        margin: $margin-md 0;
    }
    .MainContent__body th,
    .MainContent__body tr {
        border-bottom: 1px solid $cool;
        text-align: left;
        vertical-align: top;
    }
    .MainContent__body th {
        font: $font-text-md;
    }
    .MainContent__body th,
    .MainContent__body td {
        padding: $padding-xs;
        border-right: 1px solid $cool;
    }
    .MainContent__body pre {
        font: $font-code-md;
        line-height: $line-height-lg;
        background: #fafafa;
        border: 1px solid #f4f4f4;
        padding: $padding-md;
        border-radius: 2px;
    }
    .MainContent__body code {
        font: $font-code-md;
        line-height: $line-height-lg;
        background: #fafafa;
        border: 1px solid #f4f4f4;
        border-radius: 2px;
        padding: 0 3px;
    }
    .MainContent__body pre code {
        background: none;
        border: 0;
        border-radius: 0;
        margin: 0;
    }
    .MainContent__body strong a {
        display: inline-block;
        padding: $padding-xs $padding-sm;
        background: $cool;
        color: $gray;
        font: $font-text-md;
        border-radius: 3px;
        text-decoration: none;
    }
    .MainContent__body del {
        background: yellow;
        text-decoration: none;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
        opacity: $opacity-lg;
    }

</style>