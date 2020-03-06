<template>
    <footer>
        <p>Nous contacter : <a class="email" href="mailto:mouflaquettes@gmail.com" target="_blank" title="mouflaquettes@gmail.com">mouflaquettes@gmail.com</a></p>
        <p>Tous droits réservés © 2020 mouflaquettes.fr  /  Mouflaquettes.fr est réalisé par<a class="site-du-createur" href="https://www.antoinebarbier.fr" target="_blank" title="antoinearbier.fr">Antoine Barbier</a></p>
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
    height: 100px;
    display:flex;
        justify-content:flex-end;
        flex-direction: column;
    color:white;

}

p,a{
    padding:5px;
    color:rgba(255, 255, 255, 0.7);
}

a{
    color:white;
    text-decoration: none;
    font-weight: 500;
}



</style>