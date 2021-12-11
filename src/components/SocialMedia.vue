<template>
    <div class="social-media">
        <i @click='redirect("https://www.facebook.com/maszota.prof.car.spraying/")' class="fab fa-facebook fa-2x"></i>
        <i @click='redirect("https://www.youtube.com/channel/UCZrEktJWgY2PCwduGOjVZOw")' class="fab fa-youtube fa-2x"></i>
        <i @click='redirect("https://www.instagram.com/maszota_prof_car_spraying/")' class="fab fa-instagram fa-2x"></i>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
    methods: {
        redirect(url) {
            window.open(url, "_blank");
        }
    },
}
</script>

<style scoped>
i {
    margin-right: 10px;
    cursor: pointer;
}
</style>
