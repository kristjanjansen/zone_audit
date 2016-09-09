<template>

    <div class="comment" v-if="showComment">
    
        <div class="comment__content" v-html="renderedComment"></div>

    </div>

</template>

<script>

    import marked from 'marked';

    marked.setOptions({ breaks: true })

    export default {
        data() {
            return {
                showComment: false
            };
        },
        computed: {
            renderedComment: function() { return marked(this.comment) }
        },
        props: ['comment'],
        created: function () {
            this.$events.$on('showComments', state => {
                this.showComment = state
            })
        }
    }


</script>

<style>

    .comment__content p {
        display: inline;
        background: $yellow;
        color: $yellow-dark;
        font: $font-comment-md;
    }
    .comment__content a {
        color: $yellow-dark;
        text-underline-position: under;
    }
    .comment__content img {
        display: block;
        width: 100%;
        margin-top: 1rem;
    }
    
</style>