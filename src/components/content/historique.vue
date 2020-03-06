<template>
    <div class="bloc-historique">
        <h4 class="title-historique">{{date}} - {{title}}</h4>
        <p>{{text}}</p>
    </div>
    
</template>

<script>
export default {
    name:"historique",
    props:{
        date: String,
        title: String,
        text: String
    }
}
</script>
<style scoped>

</style>