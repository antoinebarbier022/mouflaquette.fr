<template>
    <header>
        <h1>Mouflaquettes</h1>
        <div class="menu">
            <ul>
                <li>Notre groupe</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
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
    padding-left:20px;
    align-items: center;
}

h1{
    display:flex;
    align-items: center;

    padding:0;
    margin:0;
}

    @media (max-width: 680px) {
        .menu{
            display:none;
        }
    }
</style>