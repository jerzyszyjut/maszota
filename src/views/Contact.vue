<template>
    <div class="contact">
        <div class="contact-details">
            <div class="header">
                <p>{{ $t('contact.header') }}</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.8733531070754!2d17.75860756213939!3d54.596445950441876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fddd17538b8085%3A0x48a8603e00283f52!2sMASZOTA%20PROFESSIONAL%20CAR%20SPRAYING!5e1!3m2!1spl!2spl!4v1632572880540!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
}
</script>
