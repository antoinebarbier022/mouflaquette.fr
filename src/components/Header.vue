<template>
    <header>
        <router-link :to="{name: 'home'}"><h1>Mouflaquettes</h1></router-link>
        <div class="menu">
                <router-link :to="{name: 'notre-groupe'}" class="link">Notre groupe</router-link>
                <a href="https://www.facebook.com" target="_blank" title="facebook" class="link icon facebook"></a>
                <a href="https://www.twitter.com" target="_blank" title="twitter" class="link icon twitter"></a>
                <a href="https://www.instagram.com" target="_blank" title="instagram" class="link icon instagram"></a>
            
        </div>
    </header>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>

header{
    width:100%;
    height:60px;
    display: flex;
    justify-content: space-between;
    color:white;
    text-align: left;
}

.menu, .link{
    padding:0;
    margin:0;
    display: flex;
        align-items: center;
    height:60px; /* même hauteur que le header */ 

}

.menu .link{
    flex-direction: row-reverse;
    margin-left:40px;
    cursor:pointer;
    font-size: 18px;
}

h1{
    display:flex;
    align-items: center;

    font-size:42px;
    font-weight: 100;
    
    padding:0;
    margin:0;
    cursor:pointer;
}

.icon{
    width:40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: auto 25px;
    background-position: center;
}

.facebook{
    background-image: url('~@/assets/reseaux-sociaux/facebook@3x.png');
}
.twitter{
    background-image: url('~@/assets/reseaux-sociaux/twitter@3x.png');
}
.instagram{
    background-image: url('~@/assets/reseaux-sociaux/instagram@3x.png');
}

.icon:hover, .link:hover{
    opacity: 70%;
}


    @media (max-width: 740px) {
        .menu{
            display:none;
        }
        header{
            justify-content: center;
        }
    }
</style>