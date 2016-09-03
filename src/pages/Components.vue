<template>

    <div>
    
        <component is="Logo" subtitle="Komponendid"></component>
        
        <div class="main">

            <component is="Pod2"></component>

        </div>

    </div>

</template>

<script>

    import Logo from '../components/Logo.vue'
    import Pod2 from '../components/Pod2.vue'

    export default {
        components: {
            Logo,
            Pod2
        }
    }

</script>

<style>
    body {
        padding: 2em;
        margin: 0;
    }
    .main {
        padding-top: 2em;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
    }

    .row-middle {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
    }

    .row-stretch {
      align-items: stretch;
      display: flex;
      flex-wrap: wrap;
    }

    .row-left {
      justify-content: flex-start;
      display: flex;
      flex-wrap: wrap;
    }

    .row-center {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
    }

    .row-right {
      justify-content: flex-end;
      display: flex;
      flex-wrap: wrap;
    }

    .row-between {
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
    }

    .row-around {
      justify-content: space-around;
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      width: 0;
      min-width: 0;
      flex-grow: 1;
      flex-shrink: 0;
    }

    .col-1 {
      width: calc(100% * 1 / 12);
      flex-shrink: 0;
    }

    .col-2 {
      width: calc(100% * 2 / 12);
      flex-shrink: 0;
    }

    .col-3 {
      width: calc(100% * 3 / 12);
      flex-shrink: 0;
    }

    .col-4 {
      width: calc(100% * 4 / 12);
      flex-shrink: 0;
    }

    .col-5 {
      width: calc(100% * 5 / 12);
      flex-shrink: 0;
    }

    .col-6 {
      width: calc(100% * 6 / 12);
      flex-shrink: 0;
    }

    .col-7 {
      width: calc(100% * 7 / 12);
      flex-shrink: 0;
    }

    .col-8 {
      width: calc(100% * 8 / 12);
      flex-shrink: 0;
    }

    .col-9 {
      width: calc(100% * 9 / 12);
      flex-shrink: 0;
    }

    .col-10 {
      width: calc(100% * 10 / 12);
      flex-shrink: 0;
    }

    .col-11 {
      width: calc(100% * 11 / 12);
      flex-shrink: 0;
    }

    .margin-left {
        margin-left: $margin-md;
    }

    .margin-right {
        margin-right: $margin-md;
    }

</style>