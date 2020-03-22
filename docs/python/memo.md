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

    [mk_exist_doc.ps1](mk_exist_doc.ps1)

    ```powershell
    --8<-- "docs/python/mk_exist_doc.ps1"
    ```
