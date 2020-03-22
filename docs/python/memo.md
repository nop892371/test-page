# Python メモ

## 仮想環境の作り方

### 基本

| 項目     | 値               |
| -------- | ---------------- |
| 仮想環境 | `c:\work\env-ex` |

```dos
> cd C:\work
> python -m venv env-ex
> cd env-ex
> .\Scripts\activate
```

### 削除

| 項目             | 値               |
| ---------------- | ---------------- |
| 削除する仮想環境 | `c:\work\env-ex` |

```dos
> cd C:\work
> python -m venv --clear env-ex
```

### 文書

| 項目       | 値                        |
| ---------- | ------------------------- |
| 仮想環境   | `c:\work\env-docs`        |
| 文書ルート | `c:\work\env-docs\sample` |

```dos
> cd C:\work
> python -m venv env-docs
> cd env-docs
> .\Scripts\activate
> pip install mkdocs
> pip install mkdocs-material
> pip install fontawesome_markdown
> pip install mkdocs-material
> mkdocs new sample 
> cd sample 
> curl https://raw.githubusercontent.com/nop892371/test-page/master/mkdocs.yml -OutFile mkdocs.yml
```

???+ note "既存ドキュメントの導入手順"

    | 項目       | 値                                           |
    | ---------- | -------------------------------------------- |
    | 仮想環境   | `c:\work\env-docs`                           |
    | 文書ルート | `c:\work\env-docs\test-page`                 |
    | git url    | `https://github.com/nop892371/test-page.git` |

    ```plantuml
    @startuml
    skinparam shadowing false
    skinparam ActivityBackgroundColor white
    skinparam ActivityBorderColor black
    skinparam ActivityBorderThickness 1
    skinparam ActivityArrowColor #3399cc
    skinparam ActivityFontName 'Meiryo UI'
    skinparam ActivityFontSize 14
    skinparam ActivityDiamondBackgroundColor white
    skinparam ActivityDiamondBorderColor black
    skinparam ActivityDiamondBorderThickness 1

    header 既存ドキュメントの導入手順
    
    :1. 仮想環境を作成;
    :2. 文書をダウンロード;
    :3. 疎通確認;
    :4. 文書を編集;
    @enduml
    ```

    1. 仮想環境を作成  
        ```powershell
        > cd C:\work
        > python -m venv env-docs
        > cd env-docs
        > .\Scripts\activate
        ```
    1. 文書をダウンロード
        ```powershell
        > git clone https://github.com/nop892371/test-page.git
        > cd test-page
        > pip install -r requirement.txt
        ```
    1. 疎通確認
        ```powershell
        > Start-Process mkdocs serve; sleep 3; start http://localhost:8000
        ```
    1. 文書を編集
        ```powershell
        > code test-page
        ```
        ※vscode導入済みとします。

## vscodeのvimでESC押下時に日本語入力を解除する方法

AutoHotKeyを使う方法。  
以下のスクリプトを作成し、"Vim_Mode.ahk"などの名前で保存して、起動時に実行するようにしておく。 [^ahk]

```text
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

$Esc::
  Send,{Esc}
  Sleep 1
  Send,{sc07B}
  Return
$^[::
  Send,{^[}
  Sleep 1
  Send,{sc07B}
  Return
```


[^ahk]: Windows10の場合、スタートアップディレクトリは`C:\Users\自分のユーザー名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`となる。