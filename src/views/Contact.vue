<template>
    <div class="contact">
        <div class="contact-details">
            <div class="header">
                <h1>{{ $t('contact.header') }}</h1>
            </div>
            <div class="content">
                <div class="phone">
                    <h3>{{ $t('contact.content.tel') }}</h3>
                    <a href="tel:577509009">577 509 009</a>
                </div>
                <div class="email">
                    <h3>{{ $t('contact.content.email') }}</h3>
                    <a href="mailto:monikamaszota@yahoo.com">monikamaszota@yahoo.com</a>
                </div>
                <div class="address">
                    <h3>{{ $t('contact.content.address') }}</h3>
                    17, 84-351 Wilkowo Nowowiejskie
                </div>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2311.3930566260597!2d17.758524!3d54.59706800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48a8603e00283f52!2sMASZOTA%20PROFESSIONAL%20CAR%20SPRAYING!5e0!3m2!1spl!2spl!4v1632591171461!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>    
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style scoped>
.contact {
    margin: 100px 0px 0px 0px;
}
.header {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
}
.content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px;
}
.content div{
    width: auto;
    text-transform: uppercase;
    margin: 10px 20px 10px 20px;
}
.map {
    padding: 50px;
    display: flex;
    justify-content: center;
    background-color: #ececec;
}
@media screen and (max-width: 600px) {
    .content {
        padding-top: 20px;
        flex-direction: column;
    }
}
</style>
