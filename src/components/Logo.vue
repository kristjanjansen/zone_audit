<template>

    <div class="logo">
        
        <div class="logo__title">Zone.ee</div>

        <div class="logo__subtitle">{{ subtitle }}</div> 
            
            <div
                @click="toggleComments"
                class="logo__comment"
                v-if="displayComments && toggles"
            >
            Peida kommentaarid ja
            </div>

            <div
                @click="toggleComments"
                class="logo__pattern"
                v-if="displayComments && toggles"
            >
            patternid
            </div>

            <div
                @click="toggleComments"
                class="logo__comment"
                v-if="!displayComments && toggles"
            >
            Näita kommentaare ja
            </div>

            <div
                @click="toggleComments"
                class="logo__pattern"
                v-if="!displayComments && toggles"
            >
            patterneid
            </div>

        </div>

    </div>

</template>

<script>
    
    export default {
        data() {
            return { displayComments: true }
        },
        props: {
            toggles: {default: false},
            subtitle: {default: ''}
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
    .logo__pattern  {
        background: $green-light;
        color: $green;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
        cursor: pointer;
    }
</style>