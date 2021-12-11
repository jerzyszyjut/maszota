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
            <div class="section">
                <div class="header">
                    {{ $t('footer.upperSection.header.social_media') }}
                </div>
                <div class="content">
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';

export default {
    name: 'Footer',
    components: {
        SocialMedia,
    },
    data() {
        return {
            upperSections: [
                {header:'call', icon: 'local_phone', content:'call'},
                {header:'email', icon: 'mail_outline', content:'email'},
            ],
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
        align-items: center;
        justify-content: center;
    }
    .lower {
        display: flex;
        align-items: center;
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
            width: 100%;
        }
        .lower {
            flex-direction: column;
            width: 100%;
        }
        .section {
            width: 90%;
            margin-bottom: 15px;
            padding-right: 10px;
            padding-left: 10px;
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