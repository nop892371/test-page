# PlantUML連携

## 導入

Mkdocsで文書内にPlantUMLで作成したUMLを貼りたい場合、プラグインを導入します。

```
pip install plantuml-markdown
```

mkdocs.ymlに以下を記述します。

```yaml
markdown_extensions:
  - plantuml_markdown:
      server: http://www.plantuml.com/plantuml
```

```plantuml
--8<-- "docs/mkdocs/files.puml"
```

index.md

````text
```
-8<-- "docs/some_page/chart.puml"
```
````