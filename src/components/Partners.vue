<template>
    <div class="partners">
        <div class="header">{{ $t('partners.header') }}</div>
        <div class="logos">
            <img class="logo" src="../assets/partners_logos/bruh.png">
            <img class="logo" src="../assets/partners_logos/bruh.png">
            <img class="logo" src="../assets/partners_logos/bruh.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Partners',
}
</script>

<style scoped>
    .partners {
        box-sizing: border-box;
        width: 100%;
        background-color: white;
        color: black;
        padding: 100px;
    }
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    .logos {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .logo {
        height: 150px;
    }
    @media screen and (max-width: 600px) {
        .partners {
            padding: 10%;
        }
        .logos {
            flex-direction: column;
        }
        .logo {
            margin-bottom: 50px;
        }
    }
</style>
