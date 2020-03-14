<template>
    <footer>
        <div class="menu">
                <router-link :to="{name: 'notre-groupe'}" title="Notre groupe" class="icon icon-notre-groupe"></router-link>
                <a href="https://www.facebook.com/Mouflaquettes/" target="_blank" title="Facebook" class="link icon facebook"></a>
                <a href="https://twitter.com/mouflaquettes" target="_blank" title="Twitter" class="link icon twitter"></a>
                <a href="https://www.instagram.com/Mouflaquettes/" target="_blank" title="Instagram" class="link icon instagram"></a>
        </div>
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
    height: 130px;
    padding-bottom:20px;
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
.menu{
    display:none;

    margin:auto;
    max-width:400px;
    min-width:300px;
    padding-bottom: 10px;
        justify-content: space-around;
        
}

.link{
    display: flex;
        align-items: center;
    height:60px; /* même hauteur que le header */ 

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
    opacity: 0.8;
}

    @media (max-width: 1080px) {
        footer{
            height: 150px;
        }
        .menu{
            display:flex;
        }

        .facebook, .instagram, .twitter{
            display:flex;
        }
    }

    @media (max-width: 550px) {
        footer{
            height: 200px;
            }
        .icon-notre-groupe{
            display:flex;
        }
    }
    @media (max-width: 350px) {
        footer{
            height: 250px;
            }
        .menu{
            min-width: 100px;
        }
    }



</style>