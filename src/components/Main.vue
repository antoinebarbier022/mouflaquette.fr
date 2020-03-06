<template>
    <div id="home">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
    #home{
        width:100%;
        min-height: calc(100vh - 100px - 60px - 20px - 50px); /* - hauteur du footer et - hauteur du header - 
                                                                    20px(hauteur du padding-top du container) - hauteur du padding-top de ce bloc*/
        padding-top: 50px;
    }

</style>