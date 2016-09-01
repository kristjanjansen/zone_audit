<template>

    <svg style="width: 1.5em; height: 1.5em">
          <use :xlink:href="'./svg/svg.svg#' + icon"/>
    </svg>

</template>

<script>

    export default {
        props: {
            icon: {required: true}
        }
    }

</script>

<style>

</style>