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
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
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
    width: 30%;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
    text-justify: auto;
}
.bottom {
    width: 40%;
}
.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 0 100px 0;
    background-color: #f3f3f3;
}
.company-basics {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 100px 0 100px 0;
    background-color: #f3f3f3;
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
