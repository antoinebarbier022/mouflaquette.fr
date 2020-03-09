<template>
    <div class="template-text">
        <p id="title">{{title}}</p>
        <p>
            {{text}}
        </p>
    </div>
    
</template>

<script>
    export default {
        name:"template-texte-image",
        props:{
            title: String,
            text: String
        }
        
    }

</script>

<style scoped>
    .template-text{
        display:flex;
            flex-direction: row;
        width:100%;
        margin-top:20px;
        margin-bottom:50px;
        font-size:1.1rem;
    }

    #title{
        font-weight: bold;
    }

</style>