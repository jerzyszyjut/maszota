<template>
    <div class="logo" :class="type"></div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        type: {
            required: true,
            String,
        },
    },
}
</script>

<style scoped>
.navbar-logo {
    background-image: url('../assets/img/logo-navbar.png');
    height: 90px;
    width: 360px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
