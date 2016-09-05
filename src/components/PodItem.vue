<template>
    
    <div class="row row-around" :style="{marginBottom: '1em'}">

        <div class="col-2">
       
            <slot name="badge"></slot>

        </div> 

        <div class="col-9">

            <slot name="content"></slot>

        </div>

    </div>

</template>