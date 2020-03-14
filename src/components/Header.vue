<template>
    <header>
        <router-link :to="{name: 'home'}"><h1>MOuflaquettes</h1></router-link>
        <div class="menu">
                <router-link :to="{name: 'notre-groupe'}" title="Notre groupe" class="link link-text">Notre groupe</router-link>
                <router-link :to="{name: 'notre-groupe'}" title="Notre groupe" class="icon icon-notre-groupe"></router-link>
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
    
    .link-text {
        transition: 1s ease-in-out;
    }

    .link-text:after {
        content: '';
        position: relative;
        top: 50px;
        width: 0;
        height:4px; 
        background:#F1C40F;
        transition: width .3s;
    }


    .link-text{
        position: relative;
    }

    .link-text:after{
    content: '';
    position: absolute;
    width: 0; height: 3px;
    display: block;
    margin-top: -3px;
    right: 0;
    background: #fff;
    transition: width .2s ease;
    -webkit-transition: width .2s ease;
    }
    .link-text:hover:after{
        width: 100%;
        left: 0;
        background: #fff;
    }

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
    font-family: "Over There";
    display:flex;
    align-items: center;
    font-weight: 50;
    font-weight: bold;
    font-size:28px;
    padding-top:10px;

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
    opacity: 0.8;
}

    @media (max-width: 1080px) {
        .icon-notre-groupe{
        display:flex;
        align-self: flex-end;
    }
        .facebook, .instagram, .twitter, .icon-notre-groupe{
            display:none;
        }
    }

    @media (max-width: 850px) {
        .icon-notre-groupe{
        display:flex;
        align-self: flex-end;
        }
    .link-text{
            display:none;
        }

        h1{
            font-size: 24px;
        }

    }
    @media (max-width: 550px) {
        h1{
            font-size: 22px;
            justify-content: center;
            padding-bottom:10px;
        }
        header{
            flex-direction: column;
        }
        .icon-notre-groupe{
            margin:auto;
            display:none;
        }
    }
    @media (max-width: 400px) {
        h1{
            font-size: 20px;
        }
    }
    @media (max-width: 300px) {
        h1{
            font-size: 14px;
        }
    }
</style>