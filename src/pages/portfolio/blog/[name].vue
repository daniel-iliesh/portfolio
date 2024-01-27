<template>
    <div
        class="markdown"
        v-html="blogText"
    ></div>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { marked } from 'marked';
// -----------
const route = useRoute();
const blogname = route.params.name;
const blogText = ref('');

const url = `https://raw.githubusercontent.com/rocketchamp/portfolio/main/${blogname}.md`

onMounted(() => {
    fetch(url).then(response => {
        if (response?.status == 200) {
            response.text().then(text => {
                blogText.value = marked(text);
            });
        }
    })
});

</script>
