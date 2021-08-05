<template>
    <div class="services">
        <div class="header"> {{ $t(`services.header`) }} </div>
        <div class="paragraph"> {{ $t(`services.paragraph`) }} </div>
        <div class="sections">
            <div class="section" v-for="section in sections" :key="section">
                <div class="material-icons"> {{ section.icon }} </div>
                <div class="header"> {{ $t(`services.sections.header.${section.header}`) }} </div>
                <div class="paragraph"> {{ $t(`services.sections.content.${section.paragraph}`) }} </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            sections: [
                {icon: 'blur_on', header: 'painting', paragraph: 'painting'},
                {icon: 'handyman', header: 'repairs', paragraph: 'repairs'},           
                {icon: 'star', header: 'detailing', paragraph: 'detailing'},
                {icon: 'color_lens', header: 'colors', paragraph: 'colors'},
                {icon: 'auto_fix_high', header: 'mixing', paragraph: 'mixing'}, 
                {icon: 'texture', header: 'coating', paragraph: 'coating'}, 
                {icon: 'healing', header: 'corrections', paragraph: 'corrections'}, 
                {icon: 'tune', header: 'personalization', paragraph: 'personalization'},          
            ]
        }
    }
}
</script>

<style scoped>
    .services {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #f3f3f3;
        padding: 100px;
        padding-bottom: 0px;
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
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        margin-bottom: 100px;
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
        width: 45%;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 600px) {
        .services {
            padding: 10%;
        }
        .sections {
            flex-direction: column;
        }
        .header, .paragraph, .section, .section .header, .section .paragraph {
            width: 100%;
        }
        .section .paragraph {
            padding-bottom: 50px;
        }
        .section {
            margin-bottom: 0px;
        }
    }
</style>
