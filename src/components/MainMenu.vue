<template>
    
    <div class="mainmenu">
        
        <div v-for="item1 in items">
    
            <div
                @click="selectFirstMenu(item1.id)"
                class="mainmenu__first"
            >

                <div class="mainmenu__firsttitle">

                    {{ item1.title }}

                </div>
        
            </div>          
            
            <div v-for="item2 in item1.items">
    
                <div
                    @click="selectSecondThirdMenu(item2.id)"
                    v-if="item1.show"
                    class="mainmenu__second"
                    :class="{
                        mainmenu__disabled: !item2.id,
                        mainmenu__active: item2.id === selectedId
                    }"
                >
                    
                    <span class="mainmenu__title">{{ item2.title }}</span>

                    <span v-if="showComments && item2.comments" class="mainmenu__comments">●</span>
                
                </div>
    
                <div v-for="item3 in item2.items">
    
                    <div
                        @click="selectSecondThirdMenu(item3.id)"
                        v-if="item1.show"
                        class="mainmenu__third"
                        :class="{
                            mainmenu__disabled: !item3.id,
                            mainmenu__active: item3.id === selectedId
                        }"
                    >

                    <span class="mainmenu__title">{{ item3.title }}</span>
                    
                    <span v-if="showComments && item3.comments" class="mainmenu__comments">●</span>

                    </div>
                
                </div>
            
            </div>
        
        </div>

    </div>

</template>

<script>

    import yaml from 'js-yaml';

    export default {
        data() {
            return {
                items: {},
                showComments: true,
                selectedId: null
            };
        },
        methods: {
            selectFirstMenu: function(id) {
                this.$events.$emit('menuSelected', id)
                this.selectedId = id
                this.items.map(item => {
                    item.show = false
                    return item
                })
                this.items.find(item => item.id === id).show = true
            },
            selectSecondThirdMenu: function(id) {
                this.$events.$emit('menuSelected', id)
                this.selectedId = id
            }
        },
        created: function () {
            this.$http.get('./data/menu.yaml').then((res) => {
                this.items = yaml.safeLoad(res.data).map((item) => {
                    item.show = false;
                    return item;
                })
            })
            this.$events.$on('toggleComments', state => {
                this.showComments = state
            })
        }
    }

</script>

<style>
    .mainmenu__first {
        align-items: center;
        color: $blue;
        cursor: pointer;
        display: flex;
        font: $font-heading-lg;
        margin-bottom: $margin-md;
        white-space: nowrap;
    }
    .mainmenu__disabled {
        opacity: 0.15 !important;
        cursor: auto !important;
    }
    .mainmenu__second {
        color: $blue;
        cursor: pointer;
        font: $font-heading-sm;
        margin-bottom: $margin-sm;
        margin-left: $margin-lg;
        color: $blue-light;
        white-space: nowrap;
    }
    .mainmenu__third {
        color: $blue-lighter;
        cursor: pointer;
        font: $font-heading-xs;
        margin-bottom: $margin-sm;
        margin-left: $margin-xl;
        white-space: nowrap;
    }
    .mainmenu__active .mainmenu__title {
        border-bottom: 2px solid $blue-lightest;
    }
    .mainmenu__comments {
        color: $yellow;
    }
</style>
