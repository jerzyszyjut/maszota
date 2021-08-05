<template>
    <div class="navbar">
        <div class="navbar-content">
            <Logo :type="type"/>
            <div class="links">
                <div class="link" v-for="link in links" :key="link.text">
                    <router-link :to="link.address">{{ $t(`navbar.${link.text}`) }}</router-link>
                </div>
            </div>
        </div>
        <div class="responsive-navbar-content">
            <div class="navbar-header">
                <Logo :type="type"/>
                <span class="material-icons" @click="changeNavigationVisibility()">menu</span>
            </div>
            <div class="links" :class="isNavigationShown?'active':''">
                <div class="link" v-for="link in links" :key="link.text">
                    <router-link :to="link.address">{{ $t(`navbar.${link.text}`) }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: 'Navbar',
    components: {
        Logo,
    },
    props: {
        type: {
            default: 'navbar-logo',
            Number
        }
    },
    data () {
        return {
            links: [
                {text: 'home', address: '/'},
                {text: 'services', address: '/en/services'},
                {text: 'about_us', address: '/#'},
                {text: 'contact', address: '/#'},
            ],
            isNavigationShown: false, 
        }
    },
    methods: {
        changeNavigationVisibility() {
            this.isNavigationShown = !this.isNavigationShown;
        }
    }
}
</script>

<style scoped>
.material-icons {
    font-size: 40px;
}

.navbar {
    background-color: white;
}
.navbar .navbar-content {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
}
.navbar .navbar-content .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-left: 50px;
}
.navbar .navbar-content .links .link {
    padding: 0px 10px 0px 10px;
}
.links .link a {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
}
.links .link a:hover {
    color: rgb(91, 65, 160);
    transition: 0.3s ease-in-out;
}

.navbar .responsive-navbar-content {
    display: none;
}
@media screen and (max-width: 600px) {
    .navbar .responsive-navbar-content {
        display: block;
    }
    .navbar .navbar-content {
        display: none;
    }
}

.navbar .responsive-navbar-content {
    padding: 20px;
}
.navbar .responsive-navbar-content .navbar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.navbar .responsive-navbar-content .navbar-header .logo {
    height: 50px;
    width: 250px;
}
.navbar .responsive-navbar-content .links{
    opacity: 0;
    height: 0px;
    font-size: 30px;
}

.navbar .responsive-navbar-content .links.active{
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    opacity: 1;
    margin-top: 30px;
    font-size: 30px;
}
</style>
