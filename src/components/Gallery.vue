<template>
    <div>
        <stack
            :column-min-width="300"
            :gutter-width="15"
            :gutter-height="15"
            monitor-images-loaded
        >
            <stack-item
                    v-for="(image, i) in images"
                    :key="i"
                    style="transition: transform 300ms"
            >
            <img :src="image.link"/>
            </stack-item>
        </stack>
    </div>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid';

export default {
    name: 'Gallery',
    components: { Stack, StackItem },
    data() {
        return {
            images: [
                {link: 'https://imgur.com/5P3EzJS.jpg'},
                {link: 'https://imgur.com/3UbquAm.jpg'},
                {link: 'https://imgur.com/jr798Oe.jpg'},
                {link: 'https://imgur.com/BbuXaX3.jpg'},
                {link: 'https://imgur.com/XpIlnsi.jpg'},
                {link: 'https://imgur.com/GHG6CNc.jpg'},
                {link: 'https://imgur.com/YlCw3vz.jpg'},
                {link: 'https://imgur.com/lvWUbh3.jpg'},
                {link: 'https://imgur.com/Wrq02Rb.jpg'},
                {link: 'https://imgur.com/UzdUzrq.jpg'},
                {link: 'https://imgur.com/cVbBaPB.jpg'},
                {link: 'https://imgur.com/VMT2018.jpg'},
                {link: 'https://imgur.com/O9vieOd.jpg'},
                {link: 'https://imgur.com/iqm3CDd.jpg'},
                {link: 'https://imgur.com/AFzH6nA.jpg'},
                {link: 'https://imgur.com/P91wkBb.jpg'},
                {link: 'https://imgur.com/dFGYTZl.jpg'},
                {link: 'https://imgur.com/AHE5nki.jpg'},
                {link: 'https://imgur.com/YeHcjY0.jpg'},
                {link: 'https://imgur.com/hwV3mAA.jpg'},
                {link: 'https://imgur.com/vbbeDXp.jpg'},
                {link: 'https://imgur.com/JkELlG7.jpg'},
                {link: 'https://imgur.com/z86dBEj.jpg'},
            ]
        }
    }
}
</script>

<style scoped>
img { 
    width: 100%; 
    height: auto; 
    border-radius: 5px; 
}
</style>