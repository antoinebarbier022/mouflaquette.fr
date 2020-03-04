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
    height:80px;
    color:white;
    text-align: left;
}

.menu ul, .menu li{
    padding:0;
    margin:0;
    
}

h1{
    padding:0;
    margin:0;
}
</style>