<template lang="pug">
    .wrap
        textarea
        a#download( href="#" download="test.txt" @click="download") download
</template>


<style lang="scss" scoped>
    @import '~simplemde/dist/simplemde.min.css';

</style>



<script>
import SimpleMDE from '../modules/simplemde.js'
import marked from 'marked'

let render = (plaintext) => {
    let text = plaintext;
    let vars = {};

    const regVarHead = /^\$[a-zA-Z0-9_]+\s\=\s/g;
    const regVarHeadM = /^\$[a-zA-Z0-9_]+\s\=\s[^;]+;$/gm;

    let rawVars = text.match(regVarHeadM);
    if( rawVars !== null ){
        rawVars.forEach( val => {
            let name = val.slice(1).split(" ")[0];
            let str = val.replace(regVarHead, "").slice(0, -1);
            vars[name] = str;
        })
    }
    text = text.replace(regVarHeadM, "");

    let raw = text.split("\n");

    let lines = raw.filter( line => !( line.match(/^\/\//)));


    const regVarIng = /\$\{[\sa-zA-Z0-0_+-/*"']+\}/g;
    const regVarIn  = /\$\{[\sa-zA-Z0-0_+-/*"']+\}/;

    const regStrg = /\"[\sa-zA-Z0-0_+-/*]*\"/g;

    lines = lines.map( line => {
        let targets = line.match(regVarIng);
        if(targets === null ) return line;

        do{
            targets.forEach( target => {
                let str = target.slice(2, -1);
                let mes = str.match(regStrg);
                str = str.replace(regStrg, "_string_")
                let tokens = str.split(" ");

        
                let result = "";
                let stringCount = 0;
                tokens.forEach( token => {
                    switch( token ){
                        case "" : return; break;
                        case "_string_":
                            result += mes[stringCount].slice(1,-1);
                            stringCount++;
                            return;
                            break;
                    }

                    if( vars[token] === undefined) return;

                    result += vars[token];
                });

                line = line.replace(regVarIn, result);
            })
            targets = line.match(regVarIng);
        }while( targets !== null);
        return line;
    })

    let result = lines.join("\n");
    return result;
}

export default {
    data(){
        return {
            simplemde : null
        }
    },
    mounted(){
        let options = {
            autofocus : true,
            autosave : {
                enabled : true,
                uniqueId : "MyUniqueID",
                delay: 1000,
            },
            element : this.$el.children[0],
            lineWrapping : false,
            parsingConfig : {
                allowAtxHeaderWithoutSpace : false,
                strikethrough : false,
                underscoresBreakWords : true,
            },
            placeholder : "Type here ...",
            previewRender : function(plainText){
                return marked(render(plainText));
                },
            renderingConfig : {
                codeSyntaxHighlighting : true,
            },
            shortcuts : {
                drawTable : "Cmd-Alt-T"
            },
            showIcons : ["code", "table"],
            spellChecker : false,
            status : ["autosave", "lines", "words", "cursor", {
                className : "keystrokes",
                defaultValue : function(el) {
                    this.keystrokes = 0;
                    el.innerHTML = "0 Keystrokes";
                },
                onUpdate : function(el) {
                    el.innerHTML = ++this.keystrokes + " Keystrokes";
                }
            }],
            styleSelectedText : false,
            tabSize : 4,
            // toolbar : ["bold", "italic", "heading", "|" , "quote"],
            toolbarTips : true,
        }
        let simplemde = new SimpleMDE(options);

        this.simplemde = simplemde;
    },
    methods : {
        download(){
            var blob = new Blob([ render(this.simplemde.value()) ], { "type" : "text/plain" });

            if (window.navigator.msSaveBlob) { 
                window.navigator.msSaveBlob(blob, "test.txt"); 

                // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
                window.navigator.msSaveOrOpenBlob(blob, "test.txt"); 
            } else {
                document.getElementById("download").href = window.URL.createObjectURL(blob);
            }
        }
    }

}
</script>
