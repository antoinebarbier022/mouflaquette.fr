<template>
    <header>
        <router-link :to="{name: 'home'}"><h1>Mouflaquettes</h1></router-link>
        <div class="menu">
                <router-link :to="{name: 'notre-groupe'}" class="link">Notre groupe</router-link>
                <router-link :to="{name: 'notre-groupe'}" class="icon icon-notre-groupe"></router-link>
                <a href="https://www.facebook.com/Mouflaquettes/" target="_blank" title="Facebook" class="link icon facebook"></a>
                <a href="https://twitter.com/mouflaquettes" target="_blank" title="Twitter" class="link icon twitter"></a>
                <a href="https://www.instagram.com/Mouflaquettes/" target="_blank" title="Instagram" class="link icon instagram"></a>
            
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
    font-weight: 700;
    font-size: 18px;
}

h1{
    display:flex;
    align-items: center;
    font-weight: 50;
    font-weight: bold;
    font-size:42px;
    
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

.icon-notre-groupe{
    position: relative;
        right:0;
    background-image: url('~@/assets/reseaux-sociaux/notre-groupe@3x.png');
    background-size: auto 40px;
    padding:5px;
    border-radius: 100%;
}
.icon-notre-groupe{
        display:none;
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
    opacity: 80%;
}


    @media (max-width: 850px) {
        .icon-notre-groupe{
        display:flex;
        align-self: flex-end;
    }
        .menu .facebook, .instagram, .twitter, .link{
            display:none;
        }
    }
</style>