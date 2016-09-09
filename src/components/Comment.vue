<template>

    <div class="comment" v-if="showComment">
    
        <div class="comment__content">
            {{ comment }}
        </div>

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

    .comment__content {
        display: inline;
        background: $yellow;
        color: $yellow-dark;
        font: $font-comment-md;
    }
    
</style>