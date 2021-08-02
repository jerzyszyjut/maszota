<template>
    <div class="footer">
        <div class="upper">
            <div class="upper-section" v-for="section in upperSections" :key="section"> 
                <div class="text1"> {{ section.text1 }} </div>
                <div class="text2"> {{ section.text2 }} </div>
            </div>
        </div>
        <div class="lower">
            <div class="lower-section" v-for="section in lowerSections" :key="section"> 
                <div class="text1"> {{ section.text1 }} </div>
                <span class="material-icons">
                    local_phone
                </span>
                <div class="text2"> {{ section.text2 }} </div>
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
                {text1:'CALL US', text2:'Tel: 123-456-7890 | Fax: 123-456-7890'},
                {text1:'EMAIL US', text2:'info@mysite.com'},
                {text1:'OPENING HOURS', text2:'Mon - Fri: 7am - 10pm'},
            ],
            lowerSections: [
                {text1:'LOREM IPSUM DOLOR SIT AMET', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {text1:'LOREM IPSUM DOLOR SIT AMET', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {text1:'LOREM IPSUM DOLOR SIT AMET', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            ]
        }
    }
}
</script>

<style scoped>
    .footer {
        position: fixed;
        bottom: 0%;
    }
    .upper {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #2F2E2E;
    }
    .lower {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #2F2E2E;
    }
    .upper-section {
        width: 15%;
        padding: 30px 50px 0px 50px;
    }
    .lower-section {
        width: 15%;
        padding: 25px 50px 50px 50px;
    }
    .text1 {
        color: white;
        font-size: 20px;
    }
    .lower .text1 {
        margin-bottom: 15px;
    }
    .text2 {
        color: white;
        font-size: 14px;
    }
</style>