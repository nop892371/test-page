# サイト名
$site_name = "dss-doc"
# ワークフォルダの場所
$work_path = "."
# 仮想環境名
$env_name = "env-docs"
# ひな型URL
$tmpl_url = "https://github.com/nop892371/test-page.git"

# 仮想環境を作成  
$env_path = Join-Path $work_path $env_name
ni $env_path -type directory
python -m venv $env_path
cd $env_path
.\Scripts\activate
# ひな型の文書をダウンロード
git clone $tmpl_url $site_name
cd $site_name
pip install -r requirements.txt
# 疎通確認
"Start Mkdocs-Server."
Start-Process mkdocs serve; sleep 3; start http://localhost:8000
"Start VSCode."
# 文書を編集
code .