<template>
    <div class="footer">
        <div class="section" v-for="section in sections" :key="section"> 
            <div class="text1"> {{ section.text1 }} </div>
            <div class="text2"> {{ section.text2 }} </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            sections: [
                {text1:'Lorem ipsum dolor sit amet', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {text1:'Lorem ipsum dolor sit amet', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
                {text1:'Lorem ipsum dolor sit amet', text2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            ]
        }
    }
}
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #2F2E2E;
    }
    .section {
        width: 15%;
        padding: 50px;
    }
    .text1 {
        margin-bottom: 15px;
    }
</style>