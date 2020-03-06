<template>
    <div id="container">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Homeindex',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    #container{
        width:1080px;
        height:100%;
        margin:auto;
        padding-top:20px;
        
    }

    @media (max-width: 1280px) {
        #container{
            width:80%;
        }
    }
</style>