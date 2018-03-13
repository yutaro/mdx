### [Markdown](https://ja.wikipedia.org/wiki/Markdown) を拡張してみた😀
 2018/03/13 Twitter : [@MYAOX3](https://twitter.com/MYAOX3/) Github : [Yutaro](https://github.com/yutaro) 

---

## [Markdown](https://ja.wikipedia.org/wiki/Markdown)とは...
+ 文書を記述するための軽量マークアップ言語  
+ 多くの場合は [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language) に変換して使う  
	+ メモするのとかに超便利！
	
```
# Title
+ 箇条書き
+ 箇条書き
	+ ネストした箇条書き
--- しきり
```

メモ帳とかよりは綺麗にできて  
Wordよりは操作が煩わしくない  

---
##### この[Markdown](https://ja.wikipedia.org/wiki/Markdown) を自分向けにカスタマイズしたい...
+ テンプレとか使えるようにしたい
	+ リンクとか毎回貼るのめんどくさい...
	+ 絵文字とかキーワードから使いたい
	+ コピペする位置って結構変わる

---

### 実装を考える...
+ Web上で使えるエディタ [simpleMDE](https://simplemde.com/) を改造  
+ マクロ的な感じで実装するのが良さそう...
	+ [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language) に [Marked.js](https://github.com/markedjs/marked) を利用
	+ この前にマクロを挟めば良さそう！
	+ テンプレあり[Markdown](https://ja.wikipedia.org/wiki/Markdown) => [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language)

---
### 仕様
```
$name = yutaro;
$slide = 
# タイトル
+ 内容
+ 内容;
```
みたいな形で定義
```
# 僕の名前は${ name }です.
${ slide }
```
みたいな形で使いたい

---
## できたものはこんな感じ
 
---

### 結論 : 個人的には幸せ!🍣

---

### 作ってみて
#### Good
+ テンプレ埋め込みは書いてる最中はかなり便利！
	+ リンクや絵文字がすぐ入る
+ 個人用にプロファイルできれば毎回入力する必要もなし
+ 直感的に順番を入れ替えられる

+++
### 作ってみて
#### Bad
+ あんまりシンプルとは言えない
+ 後から見たときにわかりにくい
+ 出力されるものの構造と似た形で記述できる良さが失われている

---
### [Markdown](https://ja.wikipedia.org/wiki/Markdown) => slide
+ [Markdown](https://ja.wikipedia.org/wiki/Markdown)ファイルをレンダリング前にダウンロード
+ [gitpitch](https://gitpitch.com/) に投げてスライド化！

---

### [Markdown](https://ja.wikipedia.org/wiki/Markdown) 拡張氾濫しすぎ問題
+ [Markdown](https://ja.wikipedia.org/wiki/Markdown)ってシンプルさが利点？
+ [Markdown](https://ja.wikipedia.org/wiki/Markdown)を拡張したくなる理由...🤔
	+ 僕の考えた最強のMDが大量発生中
	+ 副作用の少ない[Markdown](https://ja.wikipedia.org/wiki/Markdown)拡張が模索されている

---

### 参照
+ [markdownとは](http://www.markdown.jp/what-is-markdown/)
+ [markdown拡張記法の現状](https://gfx.hatenablog.com/entry/2017/06/11/130217)
+ [markdown night 2017](https://connpass.com/event/63383/)

+ [yutaro/mdx](https://github.com/yutaro/mdx)

+ このリンクから試せる
+ [mdx](https://yutaro.github.io/mdx)