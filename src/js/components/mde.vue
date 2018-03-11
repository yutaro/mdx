<template lang="pug">
    .markdown-editor
        textarea
</template>

<script>
import SimpleMDE from 'simplemde';
import marked from 'marked';

export default {
  name : 'markdown-editor',
  props: {
      value : String,
      previewClass : String,
      autoinit : {
          type : Boolean,
          defaul() {
              return true;
          },
      },
      highlight : {
          type : Boolean,
          default(){
              return false;
          },
      },
      sanitize : {
          type : Boolean,
          default() {
              return false;
          }
      },
      configs : {
          type : Object,
          default() {
              return {};
          }
      }
  },
  mounted(){
      if (this.autoinit) this.initialize();
  },
  activated(){
      const editor = this.simplemde;
      if (!editor) return;
      const isActive = editor.isSideBySideActive() || editor.isPreviewActive();
      if (isActive) editor.toggleFullScreen();
  },
  methods : {
      initialize() {
          const configs = {
              element : this.$el.firstElementChild,
              initialValue : this.value,
              renderingConfig : {},
          };

          Object.assign( configs, this.configs );

          if (this.highlight) {
              configs.renderingConfig.codeSyntaxHighlighting = true;
          }

          marked.setOptions({ sanitize : this.sanitize });
          this.simplemde = new SimpleMDE(configs);

          const className = this.previewClass || '';
          this.addPreviewClass(clasName);

          this.bindingEvents();
      },
      bindingEvents() {
          this.simplemde.codemirror.on('change', () => {
              this.$emit('input', this.simplemde.value());
          });
      },
      addPreviewClass( className ) {
          const wrapper = this.simplemde.codemirror.getWrapperElement();
          const preview = document.createElement('div');
          wrapper.nextSibling.className += `${className}`;
          preview.className = `editor-preview ${className}`;
          wrapper.appendChild(preview);
      },
  },
  destroyed() {
      this.simplemde = null;
  },
  watch: {
      value(val) {
          if ( val === this.simplemde.value()) return;
          this.simplemde.value(val);
      },
  },
};
</script>


<style lang="scss" scoped>
.markdown-editor .markedown-body {
    padding: 0.5em;
}

.markdown-editor .editor-preview-active, .markdown-editor .editor-preview-active-side {
    display : block;
}
</style>
