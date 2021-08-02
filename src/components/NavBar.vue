<template>
    <div class="navbar">
        <div class="navbar-content">
            <Logo :type="type"/>
            <div class="links">
                <div class="link" v-for="link in links" :key="link.text">
                    <router-link :to="link.address">{{ link.text }}</router-link>
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
                {text: 'HOME', address: '/#'},
                {text: 'SERVICES', address: '/#'},
                {text: 'ABOUT US', address: '/#'},
                {text: 'CONTACT', address: '/#'},
            ]
        }
    },
}
</script>

<style scoped>
.navbar {
    background-color: rgb(253, 253, 253);
}
.navbar-content {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-left: 50px;
}
.links .link {
    padding: 0px 10px 0px 10px;
}
.links .link a{
    text-decoration: none;
    color: black;
}
.links .link a:hover{
    color: rgb(235, 79, 171);
}
</style>
