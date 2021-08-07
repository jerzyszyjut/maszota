<template>
    <div class="about-us">
        <div class="team">
            <h2>Profesjonalny i kreatywny zespół</h2>
            <p>Wykorzystujemy nasz potencjał w drodze do doskonałości. Z zaangażowaniem dbamy o najwyższą jakość naszych usług</p>
            <p>Nasza firma bazuje na efektywnej obsłudze klienta oraz najwyższym poziomie jakości napraw. Gwarancją jest nasza praca, którą wykonujemy już 20 lat</p>
        </div>
        <div class="history">
            <h2>Historia rozwoju zawodowego i doświadczenia</h2>
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
                        {{ year.header }}
                    </h2>
                    <div>
                        {{ year.text }}
                    </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="company-basics">
            <h2>Podstawy działania firmy</h2>
            <p>Technologia, materiały i narzędzia odgrywają kluczową rolę w procesie naprawczym. Dlatego też szczególną uwagę skupiamy na ich doborze, aby uzyskać perfekcyjny efekt końcowy</p>
            <p>Nasze życiowe i osobiste wartości kształtują format budowania naszej marki, autorytetu i prestiżu</p>
            <p>Wiedza, doświadczenie i cieżka praca sprawiają, że jesteśmy stabilnym i niezawodnym partnerem oferującym usługi napraw blacharskich i lakierniczych z elementami detailingu na rynku motoryzacyjnym</p>
            <p>Nasza lakiernia jest kompletna. Przemyślany został każdy jej element tak, aby w pełni wykorzystać potencjał ludzki i techniczny.</p>
            <p>Dążymy do doskonałości. Rozwijamy się i kreujemy własny system działania. Zapewniamy najwyższą jakość i profesjonalizm. Nasze prace są wykonywane z precyzją i dbałością, a efekty są oryginalne i wyjątkowe</p>
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
