<template>

    <div class="header">
        
        <div class="header__left">

            <div class="header__title">Zone.ee</div>

            <div
                v-for="(value, key) in routes"
                class="header__subtitle"
                :class="{'header__subtitle--active': active === key}"
            >
                <a :href="key">{{value}}</a>
            </div> 


        </div>

        <div class="header__right">
            
            <div
                @click="toggleComments"
                class="header__comment"
                v-if="displayComments && toggles"
            >
            Peida kommentaarid ja
            </div>

            <div
                @click="toggleComments"
                class="header__pattern"
                v-if="displayComments && toggles"
            >
            patternid
            </div>

            <div
                @click="toggleComments"
                class="header__comment"
                v-if="!displayComments && toggles"
            >
            Näita kommentaare ja
            </div>

            <div
                @click="toggleComments"
                class="header__pattern"
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
            return {
                displayComments: true,
                routes: {
                    '/': 'Audit',
                    '/components': 'Komponendid' 
                }
            }
        },
        props: {
            toggles: {default: false},
            active: {default: ''}
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
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__left {
        display: flex;
    }
    .header__right {
        display: flex;
    }
    .header__title {
        color: $red;
        font: $font-heading-lg;
        font-weight: 500;
        text-transform: uppercase;
        margin-right: $margin-sm;
    }
    .header__subtitle {
        font: $font-heading-lg;
        font-weight: 500;
        text-transform: uppercase;
        margin-right: $margin-sm;
    }
    .header__subtitle a {
        text-decoration: none;
        color: $gray;
    }
    .header__subtitle.header__subtitle--active a {
        color: $cool;
    }
    .header__comment  {
        background: $yellow;
        color: $yellow-dark;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
        cursor: pointer;
    }
    .header__pattern  {
        background: $green-light;
        color: $green;
        font: $font-comment-md;
        padding-right: $padding-xs;
        padding-left: $padding-xs;
        cursor: pointer;
    }
</style>