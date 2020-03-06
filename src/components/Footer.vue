<template>
    <footer>
        <p>Nous contacter : <a href="mailto:mouflaquettes@gmail.com" target="_bank" title="mouflaquettes@gmail.com">mouflaquettes@gmail.com</a></p>
        <p>© All right reserved - created by <a href="www.antoinebarbier.fr" target="_bank" title="antoinearbier.fr">Antoine Barbier</a></p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

footer{
    width:100%;
    height: 80px;
    display:flex;
        justify-content: center;
        flex-direction: column;
    color:white;

}

p{
    padding:5px;
}

a{
    color:white;
    text-decoration: none;
}

a:hover{
    border-bottom: 1px solid white;
}

</style>