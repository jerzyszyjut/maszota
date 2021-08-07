<template>
    <div class="about-us">
        <div class="team">
            <h2>{{ $t('aboutUs.team.header') }}</h2>
            <p>{{ $t('aboutUs.team.firstParagraph') }}</p>
            <p>{{ $t('aboutUs.team.secondParagraph') }}</p>
        </div>
        <div class="history">
            <h2>{{ $t('aboutUs.history.header') }}</h2>
            <v-timeline>
                <v-timeline-item
                    v-for="(year, i) in years"
                    :key="i"
                    small
                >
                    <template v-slot:opposite>
                    <span
                        class="headline font-weight-bold"
                        v-text="year.year"
                    ></span>
                    </template>
                    <div class="py-4">
                    <h2 class="headline font-weight-light mb-4">
                        {{ $t(`aboutUs.history.years.${year.year}.header`) }}
                    </h2>
                    <div>
                        {{ $t(`aboutUs.history.years.${year.year}.text`) }}
                    </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="company-basics">
            <h2>{{ $t('aboutUs.companyBasics.header') }}</h2>
            <p v-for="i in 5" :key="i">
                {{ $t(`aboutUs.companyBasics.paragraphs[${i-1}]`) }}
            </p>
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
                },
                {
                    year: '2018',
                },
                {
                    year: '2016',
                },
                {
                    year: '2014',
                },
                {
                    year: '2010',
                },
                {
                    year: '2008',
                },
                {
                    year: '2006',
                },
                {
                    year: '2001',
                },
            ]
        }
    }
}
</script>

<style scoped>
.v-timeline {
    padding: 50px;
}
</style>
