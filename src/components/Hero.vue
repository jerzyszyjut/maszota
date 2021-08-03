<template>
    <div class="hero">
        <div class="background-image">
            <div class="header"> {{ $t(`hero.header`) }} </div>
            <div class="paragraph"> {{ $t(`hero.paragraph`) }} </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .background-image {
        background-image: url("../assets/img/example1.jpg");
        width: 100%;
        height: 600px;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .header {
        color: white;
        font-size: 80px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
    }
    .paragraph {
        color: white;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
    }
</style>
