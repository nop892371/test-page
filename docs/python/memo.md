# Python メモ

## 仮想環境の作り方

### 基本

| 項目       | 値                        |
| ---------- | ------------------------- |
| 仮想環境   | `c:\work\env-ex`        |

```dos
> cd C:\work
> python -m venv env-ex
> cd env-ex
> .\Scripts\activate
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