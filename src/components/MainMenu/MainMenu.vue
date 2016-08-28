<template>
    
    <div class="MainMenu">
        
        <div v-for="item1 in items">
    
            <div
                @click="selectFirstMenu(item1.id)"
                class="MainMenu__first"
            >

                <div class="MainMenu__firstIcon">

                    ◌

                </div>

                <div class="MainMenu__firstTitle">

                    {{ item1.title }}

                </div>
        
            </div>          
            
            <div v-for="item2 in item1.items">
    
                <div
                    @click="selectSecondThirdMenu(item2.id)"
                    v-if="item1.show"
                    class="MainMenu__second"
                    :class="{MainMenu__disabled: !item2.id}"
                >
                    
                    {{ item2.title }}
                
                </div>
    
                <div v-for="item3 in item2.items">
    
                    <div
                        @click="selectSecondThirdMenu(item3.id)"
                        v-if="item1.show"
                        class="MainMenu__third"
                        :class="{MainMenu__disabled: !item3.id}"
                    >

                    {{ item3.title }}
                    
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
            return { items: {} };
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
            }
        },
        created: function () {
            this.$http.get('./data/menu.yaml').then((res) => {
                this.items = yaml.safeLoad(res.data).map((item) => {
                    item.show = false;
                    return item;
                })
            })
        }
    }

</script>

<style>
    .MainMenu__first {
        color: $blue;
        font: $font-heading-lg;
        margin-bottom: $margin-md;
        display: flex;
        align-items: center;
        white-space: nowrap;
        cursor: pointer;
    }
    .MainMenu__disabled {
        opacity: 0.15 !important;
        cursor: auto !important;
    }
    .MainMenu__firstIcon {
        margin-right: $margin-sm;
    }
    .MainMenu__second {
        color: $blue;
        font: $font-heading-sm;
        margin-left: $margin-lg;
        margin-bottom: $margin-sm;
        opacity: $opacity-lg;
        cursor: pointer;
    }
    .MainMenu__third {
        color: $blue;
        font: $font-heading-xs;
        margin-left: $margin-xl;
        margin-bottom: $margin-sm;
        opacity: $opacity-md;
        cursor: pointer;
    }
</style>
