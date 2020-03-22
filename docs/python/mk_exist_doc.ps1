# 仮想環境を作成  
cd C:\work
python -m venv env-docs
cd env-docs
.\Scripts\activate
# 文書をダウンロード
git clone https://github.com/nop892371/test-page.git
cd test-page
pip install -r requirement.txt
# 疎通確認
Start-Process mkdocs serve; sleep 3; start http://localhost:8000
# 文書を編集
code test-page