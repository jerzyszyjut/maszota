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
        width: {
            Number,
        },
        height: {
            Number,
        },
    },
}
</script>

<style scoped>
.logo {
    background-image: url('../assets/img/logo.svg');
    height: 100px;
    width: 100px;
    background-size: 100px 100px;
}
</style>
