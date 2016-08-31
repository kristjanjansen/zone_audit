<template>

    <div class="logo">
        
        <div class="logo__title">Zone.ee</div>

        <div class="logo__subtitle">sisuaudit</div> 

        <div
            class="logo__comment"
            v-if="displayComments"
            @click="toggleComments"
        >
        Peida kommentaarid
        </div>

        <div
            class="logo__comment"
            v-else="displayComments"
            @click="toggleComments"
        >
        Näita kommentaare
        </div>

    </div>

</template>

<script>
    
    export default {
        data() {
            return { displayComments: true }
        },
        methods: {
            toggleComments() {
                this.displayComments = !this.displayComments
                this.$events.$emit('toggleComments', this.displayComments)
            }
        }
    }

</script>

<style>
    .logo {
        display: flex;
        align-items: center;
    }
    .logo__title {
        color: $red;
        font: $font-logo-title;
        text-transform: uppercase;
        margin-right: $margin-xs;
    }
    .logo__subtitle {
        color: $cool;
        font: $font-logo-subtitle;
        text-transform: uppercase;
        margin-right: $margin-sm;
    }
    .logo__comment  {
        background: $yellow;
        color: $yellow-dark;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
        cursor: pointer;
    }
</style>