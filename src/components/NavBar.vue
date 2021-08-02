<template>
    <div>
        <Logo :type="type"/>
    </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: 'Navbar',
    props: {
        type: {
            default: 'navbar',
            Number
        }
    },
    components: {
        Logo,
    }
}
</script>

<style scoped>

</style>
