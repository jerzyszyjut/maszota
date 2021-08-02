<template>
    <div class="marketing">
        <div class="header">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT</div>
        <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="sections">
            <div class="section" v-for="section in sections" :key="section">
                <div class="material-icons"> {{ section.icon }} </div>
                <div class="header"> {{ section.header }} </div>
                <div class="paragraph"> {{ section.paragraph }} </div> 
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
                {icon: 'star', header: 'LOREM IPSUM', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {icon: 'sell', header: 'LOREM IPSUM', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {icon: 'location_on', header: 'LOREM IPSUM', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},                
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
        width: 37%;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 30px;
    }
    .paragraph {
        display: flex;
        justify-content: center;
        width: 35%;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        margin-bottom: 70px;
    }
    .sections {
        display: flex;
        justify-content: space-evenly;
    }
    .section {
        display: flex;
        flex-direction: column;
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
        width: 85%;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 600px) {
        .marketing {
            padding: 10%;
        }
        .sections {
            flex-direction: column;
        }
        .header, .paragraph, .section, .section .header, .section .paragraph {
            width: 100%;
        }
        .section .paragraph {
            padding-bottom: 60px;
        }
    }
</style>
