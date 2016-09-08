<template>

    <div>
    
        <component is="Header" active="/components" toggler="true"></component>
        
        <div class="margin-top">

            <component is="Pod1" datafile="pod1.yaml"></component>

        </div>

        <div class="margin-top">

            <component is="Pod2" datafile="pod2.yaml"></component>

        </div>
      
    </div>

</template>

<script>

    import Header from '../components/Header.vue'
    import Pod1 from '../components/Pod1.vue'
    import Pod2 from '../components/Pod2.vue'

    export default {
        components: {
            Header,
            Pod1,
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

    
    .container {
      margin: 0 auto;
      max-width: $largedesktop-width;
      width: 90%;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      display: block ?if $mobile;
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
      width: 100% ?if $mobile;
      min-width: 0;
      flex-grow: 1;
      flex-shrink: 0;
    }

    .col-1 {
      width: calc(100% * 1 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-2 {
      width: calc(100% * 2 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-3 {
      width: calc(100% * 3 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-4 {
      width: calc(100% * 4 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-5 {
      width: calc(100% * 5 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-6 {
      width: calc(100% * 6 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-7 {
      width: calc(100% * 7 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-8 {
      width: calc(100% * 8 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-9 {
      width: calc(100% * 9 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-10 {
      width: calc(100% * 10 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .col-11 {
      width: calc(100% * 11 / 12);
      width: 100% ?if $mobile;
      flex-shrink: 0;
    }

    .margin-top {
        margin-top: $margin-md;
    }

    .margin-bottom {
        margin-bottom: $margin-md;
    }

    .margin-left {
        margin-left: $margin-md;
    }

    .margin-right {
        margin-right: $margin-md;
    }

</style>