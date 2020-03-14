# Python メモ

## 仮想環境の作り方

### 基本

```dos
c:\work> python -m venv env-ex
c:\work> cd env-ex
c:\work\env-ex> .\Scripts\activate
(env-ex) pip install some_lib
(env-ex) deactivate
```

### 文書

| 項目       | 値                        |
| ---------- | ------------------------- |
| 仮想環境   | `c:\work\env-docs`        |
| 文書ルート | `c:\work\env-docs\sample` |

```dos
c:\work> python -m venv env-docs
c:\work> cd env-docs
c:\work\env-docs> .\Scripts\activate
(env-docs) env-docs> pip install mkdocs
(env-docs) env-docs> pip install mkdocs-material
(env-docs) env-docs> pip install fontawesome_markdown
(env-docs) env-docs> mkdocs new sample 
(env-docs) env-docs> cd sample 
(env-docs) sample> curl https://raw.githubusercontent.com/nop892371/test-page/master/mkdocs.yml -OutFile mkdocs.yml
```