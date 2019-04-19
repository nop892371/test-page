# Github Pages

Github Pagesはgithub上にサイトを公開できる機能です。

## 導入手順

!!! abstract "概要"
    GitHubにリポジトリを作成し、GitHub Pagesの設定をオンにするだけでリポジトリがWebサイトになります。  
    詳細な手順は以下です。

1. **リポジトリ作成**  
    githubにpublicなリポジトリを作成します。
    ```
    nop892371/test-page
    ```
    privateリポジトリをGitHub Pagesで公開できるのは有料会員のみのようです。
2. **git clone**  
    `git clone`でリポジトリtest-pageをローカルにコピーします。
3. **ファイルpush**  
    何かファイルを作成しpushします。  
    リポジトリに何か1つファイルを置かないとGithub Pagesを公開できません。  
    ここではリポジトリ直下にindex.mdを置いてみましょう。
4. **リポジトリ設定**  
    リポジトリのsettingを開きます。
    1. **ソース設定**  
        GitHub PagesのセクションでSourceを設定します。  
        以下では`master branch`を設定しています。
        ![](2019-04-18-01-08-06.png)
        これでmasterブランチのルートフォルダがwebサイトのルートフォルダになります。
    2. **テーマ設定**  
        上図で`Change theme`をクリックしテーマを選択します。
5. **確認**  
    以上でGitHub Pagesのサイトが作成されました。  
    指定のURLをブラウザで表示されれば成功です。