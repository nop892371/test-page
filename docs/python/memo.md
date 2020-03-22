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

    ```powershell
    # 仮想環境を作成
    > cd C:\work
    > python -m venv env-docs
    > cd env-docs
    > .\Scripts\activate

    # 文書をダウンロード
    > git clone https://github.com/nop892371/test-page.git
    > pip install -r requirement.txt
    ```

    ```plantuml
    @startuml
    skinparam shadowing false
    skinparam ActivityBackgroundColor white
    skinparam ActivityBorderColor black
    skinparam ActivityBorderThickness 1
    skinparam ActivityArrowColor #3399cc
    skinparam ActivityFontName 'Meiryo UI'
    skinparam ActivityFontSize 20
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

