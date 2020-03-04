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
    display: flex;
    justify-content: space-between;
    
    color:white;
    text-align: left;
    background:#6cf;
}

.menu ul, .menu li{
    padding:0;
    margin:0;
    display: flex;

}

.menu li{
    flex-direction: row-reverse;
    padding-left:20px;
}

h1{
    padding:0;
    margin:0;
}
</style>