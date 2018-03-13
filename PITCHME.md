# [Markdown](https://ja.wikipedia.org/wiki/Markdown) を拡張してみた😀
 2018/03/13 Twitter : [@MYAOX3](https://twitter.com/MYAOX3/) Github : [Yutaro](https://github.com/yutaro) 

---

## [Markdown](https://ja.wikipedia.org/wiki/Markdown)とは...
+ 文書を記述するための軽量マークアップ言語  
+ 多くの場合は [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language) に変換して使う  
	+ テキストエディタとかに付いててメモするのとかに超便利！
	
```
# Title
+ 箇条書き
+ 箇条書き
	+ ネストした箇条書き
--- しきり
```

多少構造的に記述できるのでメモ帳とかよりは綺麗にできてWordよりは操作が煩わしくない

---
### この[Markdown](https://ja.wikipedia.org/wiki/Markdown) を自分向けにカスタマイズしたい...
+ とりあえずテンプレとか使えるようにしたい
	+ リンクとか毎回貼るのめんどくさい...
	+ 長い文言とか間違えることが多い上にコピペする位置って結構変わる

---

### 実装を考える...
+ [simpleMDE](https://simplemde.com/) という元からあるWeb上で使えるエディタを改造  
+ テンプレを使いたいだけならマクロ的な感じで実装するのが良さそう...
	+ [simpleMDE](https://simplemde.com/) では [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language) に [Marked.js](https://github.com/markedjs/marked) を利用している..
	+ この前にマクロを挟めば良さそう！
	+ テンプレあり[Markdown](https://ja.wikipedia.org/wiki/Markdown) => [Markdown](https://ja.wikipedia.org/wiki/Markdown) => [html](https://ja.wikipedia.org/wiki/HyperText_Markup_Language)

---
### 仕様
```
$name = yutaro
```
みたいな形で定義
```
# 僕の名前は$ { name }です.
```
みたいな形で使いたい

---
## できたものはこんな感じ
 
---

# 結論 : 個人的には幸せ!🍣

---

### 作ってみて
#### Good
+ テンプレを埋め込めるのは書いてる最中はかなり便利！
+ 絵文字とか、頻繁に使うリンクなどをいれておける
	+ 個人用にプロファイルできれば毎回入力する必要もなし

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
+ そもそも[Markdown](https://ja.wikipedia.org/wiki/Markdown)ってシンプルだからいいんじゃないのか？
+ みんな[Markdown](https://ja.wikipedia.org/wiki/Markdown)を拡張したがる理由ってなんなんだろ...🤔
	+ 現状コミュニティが最高のMarkdownを模索している段階
	+ カスタマイズ

---

### 参照
+ [markdownとは](http://www.markdown.jp/what-is-markdown/)
+ [markdown拡張記法の現状](https://gfx.hatenablog.com/entry/2017/06/11/130217)
+ [markdown night 2017](https://connpass.com/event/63383/)
