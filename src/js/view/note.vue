<template lang="pug">
    div
        markdown-editor( v-model="content" ref="markdownEditor" :configs="configs" )
</template>

<style>
    @import '~simplemde/dist/simplemde.min.css';
</style>


<script>
import Vue from 'vue';
import markdownEditor from '../components/mde.vue';
export default {
    components : {
        markdownEditor
    },
    data(){
        return {
            content : '',
            configs : {
                status : false,
                spellChecker : false
            }
        }
    },
    computed : {
        simplemde (){
            return this.$refs.markdownEditor.simplemde
        }
    },
    mounted(){
        console.log(this.simplemde)
        this.simplemde.togglePreview()


    }
}
</script>
