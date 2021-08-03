<template>
    <div class="marketing">
        <div class="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="sections">
            <div class="section" v-for="section in sections" :key="section">
                <div class="material-icons"> {{ section.icon }} </div>
                <div class="header"> {{ $t(`marketing.sections.header.${section.header}`) }} </div>
                <div class="paragraph"> {{ $t(`marketing.sections.content.${section.paragraph}`) }} </div> 
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
                {icon: 'star', header: 'quality', paragraph: 'quality'},
                {icon: 'sell', header: 'prices', paragraph: 'prices'},
                {icon: 'location_on', header: 'location', paragraph: 'location'},                
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
        background-color: #f3f3f3;
        padding: 100px;
    }
    .header {
        display: flex;
        justify-content: center;
        width: 50%;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 30px;
        text-transform: uppercase;
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
        width: 30%;
    }
    .section .material-icons {
        font-size: 60px;
        margin-bottom: 30px;
        color: #5B41A0;
    }
    .section .header {
        font-size: 18px;
        width: 37%;
    }
    .section .paragraph {
        font-size: 14px;
        width: 45%;
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
