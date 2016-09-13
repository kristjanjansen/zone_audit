<template>
    
    <div class="maincontent">
    
        <div class="maincontent__title">

            {{ activeContent.title }}

        </div>

        <div
            class="maincontent__body"
            :class="{
                maincontent__show: showComments,
                maincontent__hide: !showComments
            }"
            v-html="activeContent.body"
        ></div>

    </div>

</template>

<script>

    import yaml from 'js-yaml';
    import marked from 'marked';
    import jump from 'jump.js'

    marked.setOptions({
        breaks: true
    })

    export default {
        data() {
            return {
                content: [],
                activeContent: {},
                showComments: null
            };
        },
        created: function () {
            this.$http.get('./data/content.yaml').then((res) => {
                this.content = yaml.safeLoad(res.data).map(item => {
                    item.body = marked(item.body)
                    return item
                })
                this.activeContent = this.content.find(item => item.id == 'dashboard')
                this.$events.$emit('showComments', false)
            })
            this.$events.$on('menuSelected', id => {
                this.activeContent = this.content.find(item => item.id == id)
                jump('body', {
                    duration: 200,
                })
            })
            this.$events.$on('showComments', state => {
                this.showComments = state
            })
        }
    }

</script>

<style>
    .maincontent__title {
        color: $blue;
        font: $font-heading-xl;
        margin-bottom: $margin-md;
    }
    .maincontent__body {
        color: $cool;
        font: $font-text-md;
        line-height: $line-height-lg;
        font-weight: 400;
    }
    .maincontent__body p {
        margin-bottom: $margin-md;
    }
    .maincontent__body strong {
        font-weight: 500;
    }
    .maincontent__body h1 {
        font: $font-heading-lg;
        font-weight: normal;
    }
    .maincontent__body h2,
    .maincontent__body h3,
    .maincontent__body h4 {
        font: $font-heading-md;
        font-weight: normal;
        line-height: $line-height-lg;
    }
    .maincontent__body hr {
        border: 0;
        border-top: 1px solid $cool;
        height: 0;
    }
    .maincontent__body a {
        color: $cool;
    }
    .maincontent__body blockquote {
        color: $gray-light;
        font: $font-text-sm;
        line-height: $line-height-md;
        margin: 0;
    }
    .maincontent__body table {
        width: 100%;
        border: 1px solid $cool;
        border-collapse: collapse;
        margin: $margin-md 0;
    }
    .maincontent__body th,
    .maincontent__body tr {
        border-bottom: 1px solid $cool;
        text-align: left;
        vertical-align: top;
    }
    .maincontent__body th {
        font: $font-text-md;
    }
    .maincontent__body th,
    .maincontent__body td {
        padding: $padding-xs;
        border-right: 1px solid $cool;
    }
    .maincontent__body pre {
        font: $font-code-md;
        line-height: $line-height-lg;
        background: #fafafa;
        border: 1px solid #f4f4f4;
        padding: $padding-sm;
        border-radius: 2px;
    }
    .maincontent__body code {
        font: $font-code-md;
        line-height: $line-height-lg;
        background: #fafafa;
        border: 1px solid #f4f4f4;
        border-radius: 2px;
        padding: 0 3px;
    }
    .maincontent__body pre code {
        background: none;
        border: 0;
        border-radius: 0;
        margin: 0;
    }
    .maincontent__body strong a {
        display: inline-block;
        padding: $padding-xs $padding-sm;
        background: $cool;
        color: $gray;
        font: $font-text-md;
        border-radius: 3px;
        text-decoration: none;
        white-space: nowrap;
    }
    .maincontent__body h1 strong a {
        font: $font-heading-lg;
    }
    .maincontent__body h2 strong a,
    .maincontent__body h3 strong a {
        font: $font-heading-md;
    }
    .maincontent__body del {
        background: $yellow;
        color: $yellow-dark;
        text-decoration: none;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
    }
    .maincontent__body em {
        background: $green-light;
        color: $green;
        font-style: normal;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
    }
    .maincontent__show del,
    .maincontent__show em {
        display: inline;
    }
    .maincontent__hide del,
    .maincontent__hide em {
        display: none;
    }

</style>