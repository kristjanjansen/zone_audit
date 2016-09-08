<template>
    
    <div class="comment" v-if="showComment">
        {{ comment }}
    </div>

</template>

<script>

    export default {
        data() {
            return {
                showComment: false
            };
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

    .comment {
        display: inline-block;
        background: $yellow;
        color: $yellow-dark;
        font: $font-comment-md;
        padding: $padding-xs;
    }
    
</style>