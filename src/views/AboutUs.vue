<template>
    <div class="about-us">
        <div class="team">
            <div class="header">{{ $t('aboutUs.team.header') }}</div>
            <div class="paragraph">{{ $t('aboutUs.team.firstParagraph') }}</div>
            <div class="paragraph">{{ $t('aboutUs.team.secondParagraph') }}</div>
        </div>
        <div class="company-basics">
            <div class="header">{{ $t('aboutUs.companyBasics.header') }}</div>
            <div class="bottom paragraph" v-for="i in 5" :key="i">
                {{ $t(`aboutUs.companyBasics.paragraphs[${i-1}]`) }}
            </div>
        </div>
        <div class="gallery">
            <Gallery/>
        </div>
    </div>
</template>

<script>
import Gallery from '../components/Gallery.vue';

export default {
    name: 'AboutUs',
    metaInfo: {
    title: 'O nas',
    meta: [{
        vmid: 'description',
        name: 'description',
        content: 'O nas - Maszota',
        },
        {
        vmid: 'google',
        name: 'google',
        content: 'nositelinkssearchbox',
        },
        {
        vmid: 'googlebot',
        name: 'googlebot',
        content: 'all',
        },
        {
        vmid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Maszota - O nas',
        },
        {
        vmid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
        },
        {
        vmid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://imgur.com/CXLc57n.png',
        },
        ]
    },
    components: {
        Gallery,
    },
    data() {
        return {
            years: [
                {
                    year: '2020',
                    color: '#5B41A0',
                },
                {
                    year: '2018',
                    color: '#693FA0',
                },
                {
                    year: '2016',
                    color: '#783CA0',
                },
                {
                    year: '2014',
                    color: '#9738A0',
                },
                {
                    year: '2010',
                    color: '#A6359F',
                },
                {
                    year: '2008',
                    color: '#B5329F',
                },
                {
                    year: '2006',
                    color: '#C32E9E',
                },
                {
                    year: '2001',
                    color: '#D22C9E',
                },
            ]
        }
    }
}
</script>

<style scoped>
.about-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 0 30px 0;
    background-color: #f3f3f3;
}
.company-basics {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 0 100px 0;
    background-color: #f3f3f3;
}
.gallery {
    width: 100%;
    padding: 30px 30px 100px 30px;
    background-color: #f3f3f3;
}
.header {
    width: 60%;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
}
.paragraph {
    display: flex;
    justify-content: center;
    width: 40%;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
    text-justify: auto;
}
.bottom {
    width: 40%;
}
@media screen and (max-width: 600px) {
    .header {
        width: 90%;
    }
    .paragraph {
        width: 90%;
    }
}
</style>
