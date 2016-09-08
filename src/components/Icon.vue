<template>

    <div
        class="icon"
        :style="{
            width: background ? size + 'em' : '',
            height: background ? size + 'em' : '',
            backgroundColor: background ? background : '',
            borderRadius: rounded ? size / 2 + 'em' : '0'
        }"
    >

    <svg :style="{width: iconSize + 'em', height: iconSize + 'em', fill: color}">
          <use :xlink:href="'./svg/svg.svg#' + icon"/>
    </svg>

    </div>
    
</template>

<script>

    export default {
        computed: {
            iconSize: function() {
                return this.background ? this.size * 0.6 : this.size
            }
        },
        props: {
            icon: {required: true},
            size: {default: 1.75},
            color: {default: 'black'},
            background: {default: ''},
            rounded: {default: true}
        }
    }

</script>

<style>
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>