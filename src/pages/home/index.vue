<template>
    <div id="container">
        <Header/>
        <Main/> 
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Homeindex',
    components: {
        Header,
        Main,
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
            width:90%;
        }
    }
</style>