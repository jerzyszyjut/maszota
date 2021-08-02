<template>
    <div class="marketing">
        <div class="header">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT</div>
        <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="sections">
            <div class="section" v-for="section in sections" :key="section">
                <div class="material-icons">
                    {{ section.icon }}
                </div>
                <div class="header"> {{ section.text1 }} </div>
                <div class="paragraph"> {{ section.text2 }} </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Marketing',
    data() {
        return {
            sections: [
                {icon: 'star', text1: 'LOREM IPSUM', text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {icon: 'sell', text1: 'LOREM IPSUM', text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {icon: 'location_on', text1: 'LOREM IPSUM', text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},                
            ]
        }
    }
}
</script>

<style scoped>
    .marketing {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #E2E4E5;
        padding: 100px;
    }
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 37%;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 30px;
    }
    .paragraph {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35%;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        margin-bottom: 70px;
    }
    .sections {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
    }
    .section .material-icons {
        font-size: 60px;
        margin-bottom: 30px;
        color: #5B41A0;
    }
    .section .header {
        font-size: 18px;
        width: 50%;
    }
    .section .paragraph {
        font-size: 14px;
        width: 90%;
        margin-bottom: 0px;
    }
</style>
