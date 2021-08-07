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
                    header: 'Topaz Detailing',
                    text: 'Praca na podstawie projektu. Wykonywanie napisów, figur i kształtów na elementach. Natryskiwanie powłoki ochronnej. Nanoszenie farb, które można zerwać. Malowanie części karbonowych.',
                },
                {
                    year: '2018',
                    header: 'Rainbow Bodyshop',
                    text: 'Planowanie i nadzór nad pracami lakierniczymi. Przygotowanie i malowanie. Praca według standardów Mercedes-Benz lakierami Spies Hecker. Kursy i szkolenia w centrum szkoleniowym Mercedes-Benz.',
                },
                {
                    year: '2016',
                    header: 'Hayden Coachwork Ltd',
                    text: 'Naprawa elementów samochodowych. Przygotowanie, malowanie i polerowanie. Sprawdzanie jakości prac pracowników. Praca na produktach Sikkens i Octoral.',
                },
                {
                    year: '2014',
                    header: 'Fastline Body&Paint Sunninghill UK',
                    text: 'Sprawdzanie poszczególnych etapów pracy. Malowanie prestiżowych samochodów według najwyższych standardów. Eliminowanie i korekta błędów innych pracowników. Stosowanie farb BMW, Glasurit i DuPont.',
                },
                {
                    year: '2010',
                    header: 'Impact Bodyshop Uxbridge UK',
                    text: 'Planowanie i organizacja etapów pracy. Malowanie i sprawdzanie końcowych efektów. Stosowanie baz wodorozcieńczalnych, materiałów P.P.G. oraz farb DuPont.',
                },
                {
                    year: '2008',
                    header: 'Auto Tech Ltd Slough',
                    text: 'Sprawdzanie, przygotowanie i naprawa paneli samochodów. Malowanie i polerowanie. Stosowanie farb Nexa.',
                },
                {
                    year: '2006',
                    header: 'Autotechnics Holyport UK',
                    text: 'Sprawdzanie i przygotowywanie samochodów do malowania. Malowanie i polerowanie. Stosowanie Excell, Nexa i farb z grupy BMW.',
                },
                {
                    year: '2001',
                    header: 'Zespół Szkół Mechaniczno-Informatycznych w Lęborku',
                    text: 'Ukończenie szkoły i uzyskanie kwalifikacjii i umiejętności blacharza samochodowego.',
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
