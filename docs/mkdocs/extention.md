# 拡張機能

## Pymdown Extensions

[Pymdown Extensions](http://facelessuser.github.io/pymdown-extensions/)はMarkdown拡張機能のコレクションです。  
以下のコマンドでインストールします。

```powershell
pip install pymdown-extensions
```

mkdocs.ymlに以下を記述します。

```yml
markdown_extensions:
  - pymdownx.arithmatex
  - pymdownx.betterem:
      smart_enable: all
  - pymdownx.caret
  - pymdownx.critic
  - pymdownx.details
  - pymdownx.emoji:
      emoji_generator: !!python/name:pymdownx.emoji.to_svg
  - pymdownx.inlinehilite
  - pymdownx.magiclink
  - pymdownx.mark
  - pymdownx.smartsymbols
  - pymdownx.superfences
  - pymdownx.tasklist:
      custom_checkbox: true
  - pymdownx.tilde
```


|name|desc|
|-|-|
|[Arithmatex](#arithmatex)|mathjaxによる数式の表示|
|[BetterEm](#betterem)|太字と斜体の簡単な指定|
|[Caret](#caret)|挿入と上付き文字|
|critic|
|details|
|emoji:|
|inlinehilite|
|magiclink|
|mark|
|smartsymbols|
|[SuperFence](#superfence)|ブロック要素の下にコードブロックをネストする|
|tasklist:|
|tilde|

### Arithmatex

数式の表示をおこなう機能です。  
mkdocs.ymlに以下を追記し[Mathjax](https://www.mathjax.org/)を導入します。

```yml
extra_javascript: 
  - https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML
```

マークダウン文書内に数式を以下のように記述します。

```
$p(x|y) = \frac{p(y|x)p(x)}{p(y)}$, \(p(x|y) = \frac{p(y|x)p(x)}{p(y)}\).
```

数式が表示されます。

$p(x|y) = \frac{p(y|x)p(x)}{p(y)}$, \(p(x|y) = \frac{p(y|x)p(x)}{p(y)}\).

??? note "ブロックを使う場合"
    ブロックを使う場合、ブロックは`$$`, `\[`, `\begin{}`で始まり`$$`, `\]`, `\end{}`で終わる必要があります。  
    ブロックは空行を含まないようにし、前後に空行をいれます。

    ```
    $$
    E(\mathbf{v}, \mathbf{h}) = -\sum_{i,j}w_{ij}v_i h_j - \sum_i b_i v_i - \sum_j c_j h_j
    $$

    \[3 < 4\]

    \begin{align}
        p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
        p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
    \end{align}
    ```

    $$
    E(\mathbf{v}, \mathbf{h}) = -\sum_{i,j}w_{ij}v_i h_j - \sum_i b_i v_i - \sum_j c_j h_j
    $$

    \[3 < 4\]

    \begin{align}
        p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
        p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
    \end{align}

### BetterEm

太字や斜体をより簡単にする機能です。

```
***I'm italic and bold* I am just bold.**

***I'm bold and italic!** I am just italic.*
```

***I'm italic and bold* I am just bold.**

***I'm bold and italic!** I am just italic.*

### Caret

挿入と上付き文字の機能です。

二重のべき乗記号で挿入文にし、一重のべき乗記号で上付き文字になります。

```
^^挿入された文^^

H^2^O
```

^^挿入された文^^

H^2^O

### Critic


Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
 that I am removing--}text.  And here is even more {++text that I 
 am ++}adding.{~~

~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

~~}Spaces were removed and a paragraph was added.

And here is a comment on {==some
 text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

General block handling.

{--

* test remove
* test remove
* test remove
    * test remove
* test remove

--}

{++

* test add
* test add
* test add
    * test add
* test add

++}

### SuperFence

ブロック要素の下にコードブロックをネストする機能です。（標準ではできません）  
コードをタブでグループ化することもできます。

!!! note "ネスト"
    ネストされたpythonコードの例です。
    ```python
    import os

    print('hoge')
    ```

## Font Awesome 

FontAwesomeを使用できるようになります。  
以下のコマンドでインストールします。

```powershell
pip install fontawesome_markdown
```

mkdocs.ymlに以下を記述します。

```python
markdown_extensions:
    - fontawesome_markdown

extra_css:
    - "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
```