<template>
    <div class="footer">
        <div class="upper">
            <div class="section" v-for="section in upperSections" :key="section"> 
                <div class="header"> 
                    <div class="material-icons"> {{ section.icon }} &nbsp; </div>
                    {{ section.header }}
                </div>
                <div class="content"> {{ section.content }} </div>
            </div>
        </div>
        <div class="lower">
            <div class="section low" v-for="section in lowerSections" :key="section"> 
                <div class="header"> {{ section.header }} </div>
                <div class="content"> {{ section.content }} </div>
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
                {header:'CALL US', icon: 'local_phone', content:'Tel: 123-456-7890 | Fax: 123-456-7890'},
                {header:'EMAIL US', icon: 'mail_outline', content:'info@mysite.com'},
                {header:'OPENING HOURS', icon: 'schedule', content:'Mon - Fri: 7am - 10pm'},
            ],
            lowerSections: [
                {header:'LOREM IPSUM DOLOR SIT AMET', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {header:'LOREM IPSUM DOLOR SIT AMET', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {header:'LOREM IPSUM DOLOR SIT AMET', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            ]
        }
    }
}
</script>

<style scoped>
    .footer {
        position: fixed;
        bottom: 0%;
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
        width: 15%;
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
    }
    .lower .header {
        margin-bottom: 15px;
    }
    .content {
        font-size: 14px;
    }
</style>