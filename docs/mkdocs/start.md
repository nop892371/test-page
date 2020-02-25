# mkdocsを始めるには

mkdocsはWebサイトを作成するツールです。  
Markdown形式のファイルをサイトに変換してくれます。

## mkdocsのインストール

!!! abstract "概要"
    python、mkdocs、プラグインの順にインストールします。

### 1. python をインストール

mkdocsはpythonで作成されたツールであり実行にはpythonのインストールが必要です。  
pythonのインストール手順は[こちら](#)を参照ください。

### 2. mkdocs をインストール

mkdocsをインストールします。  
プロンプトで以下を入力します。

```dos
pip install mkdocs
```

### 3. mkdocsのプラグインをインストール

#### materialテーマをインストール

mkdocsは見た目のスキンをいろいろ選べます。
ここではmaterialというテーマを採用します。  
プロンプトで以下を入力します。

```dos
pip install mkdocs-material
```

#### pygmentsをインストール

コードハイライトです。  
プロンプトで以下を入力します。

```dos
pip install pygments
```

## サイトの作成

サイト mysite を作成するにはプロンプトで以下を入力します。

```dos
mkdocs new mysite
```

以下のフォルダ構成ができます。

```
mysite/
 +- docs/
 +- mkdocs.yml
```

??? note "mysiteの内容"
    docsフォルダ下にmarkdownファイルを置いていきます。
    なかでサブフォルダを作っても構いません。

    mkdocs.ymlはサイト構成の設定ファイルです。

## 設定ファイル (mkdocs.yml)

```yaml
site_name: '個人ローカル'
site_description: '個人用情報整理サイト'

copyright: 'Copyright (C) 2019'

theme:
  name: 'material'
  language: 'ja'

markdown_extensions:
  - codehilite
  - admonition
  - toc:
      permalink: '#'
  - fontawesome_markdown

extra_css:
  - "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
```