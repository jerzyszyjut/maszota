<template>
    <div class="footer">
        <div class="upper">
            <div class="section" v-for="section in upperSections" :key="section.icon"> 
                <div class="header"> 
                    <div class="material-icons"> {{ section.icon }} &nbsp; </div>
                    {{ $t(`footer.upperSection.header.${section.header}`) }}
                </div>
                <div class="content"> {{ $t(`footer.upperSection.content.${section.content}`) }} </div>
            </div>
        </div>
        <div class="lower">
            <div class="section low" v-for="section in lowerSections" :key="section.icon"> 
                <div class="header"> {{ $t(`footer.lowerSection.header.${section.header}`) }} </div>
                <div class="content"> {{ $t(`footer.lowerSection.content.${section.content}`) }} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            upperSections: [
                {header:'call', icon: 'local_phone', content:'call'},
                {header:'email', icon: 'mail_outline', content:'email'},
                {header:'opening_hours', icon: 'schedule', content:'opening_hours'},
            ],
            lowerSections: [
                {header:'first', content:'first'},
                {header:'second', content:'second'},
                {header:'third', content:'third'},
            ]
        }
    }
}
</script>

<style scoped>
    .footer {
        box-sizing: border-box;
        width: 100%;
        background-color: #2F2E2E;
        color: white;
        padding-top: 30px;
        padding-bottom: 50px;
    }
    .upper {
        display: flex;
        justify-content: center;
    }
    .lower {
        display: flex;
        justify-content: center;
    }
    .section {
        width: 20%;
        padding-left: 50px;
        padding-right: 50px;
    }
    .section.low {
        padding-top: 25px;
    }
    .section:nth-child(2) {
        border-left: solid 2px;
        border-right: solid 2px;
    }
    .header {
        display: flex;
        align-items: center;
        font-size: 20px;
        text-transform: uppercase;
    }
    .lower .header {
        margin-bottom: 15px;
    }
    .content {
        font-size: 14px;
    }
    @media screen and (max-width: 600px) {
        .upper {
            flex-direction: column;
        }
        .lower {
            flex-direction: column;
        }
        .section {
            width: 75%;
            margin-bottom: 15px;
        }
        .section.low {
            margin-bottom: 0px;
        }
        .section:nth-child(2) {
            border-left: solid 0px;
            border-right: solid 0px;
        }
    }
</style>