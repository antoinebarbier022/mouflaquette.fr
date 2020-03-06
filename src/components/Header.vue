<template>
    <header>
        <h1>Mouflaquettes</h1>
        <div class="menu">
            <ul>
                <li class="lien_page" >Notre groupe</li>
                <li class="icon facebook"></li>
                <li class="icon twitter"></li>
                <li class="icon instagram"></li>
            </ul>
            
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

.menu ul, .menu li{
    padding:0;
    margin:0;
    display: flex;
    height:60px; /* même hauteur que le header */ 

}

.menu li{
    flex-direction: row-reverse;
    margin-left:40px;
    align-items: center;
}

h1{
    display:flex;
    align-items: center;

    font-size:42px;
    font-weight: 100;
    
    padding:0;
    margin:0;
}

.icon{
    width:40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: auto 25px;
    background-position: center;
}

.lien_page{
    font-size: 18px;
}

.facebook{
    background-image: url('~@/assets/facebook@3x.png');
}
.twitter{
    background-image: url('~@/assets/twitter@3x.png');
}
.instagram{
    background-image: url('~@/assets/instagram@3x.png');
}


    @media (max-width: 680px) {
        .menu{
            display:none;
        }
    }
</style>