# Github Pagesについて

[Github Pages](https://pages.github.com/)はGithubリポジトリをWebサイトとして公開できるGithubの機能です。  
Githubのアカウントがあれば誰でも使えます。

## GitHub PagesでWebサイトを公開するには

!!! abstract "概要"
    GitHubにリポジトリを作成し、GitHub Pagesの設定をオンにします。  

1. **Githubリポジトリ作成**  
    githubにpublicなリポジトリを作成します。
    ```
    nop892371/test-page
    ```
    ※privateリポジトリをGitHub Pagesで公開できるのは有料会員のみのようです。
2. **作業ワークフォルダをローカルに作成**  
    `git clone`でリポジトリtest-pageの作業ワークフォルダをローカルに作成します。
3. **ファイルをリモートにpush**  
    何かファイルを作成し`git push`します。  
    リポジトリに何か1つファイルを置かないとGithub Pagesを公開できません。  
    ここではリポジトリ直下にindex.mdを置いてみます。
    ```
    # トップページ

    トップページです。
    ```
4. **リポジトリ設定の変更**  
    リポジトリのsettingタブをクリックし設定画面を開きます。
    1. **ソース設定**  
        GitHub PagesのセクションでSourceを設定します。  
        以下では`master branch`を設定しています。
        ![](2019-04-18-01-08-06.png)
        これでmasterブランチのルートフォルダがwebサイトのルートフォルダになります。
    2. **テーマ設定**  
        上図で`Change theme`をクリックしテーマを選択します。
5. **サイトの確認**  
    以上でGitHub Pagesのサイトが作成されました。  
    指定のURLが表示されれば成功です。

## mkdocsで作成したサイトを公開するには

<!--
[mkdocs](https://www.mkdocs.org/)は静的サイト作成ツールです。  
[Markdown](https://daringfireball.net/projects/markdown/)形式でドキュメントを記述するとサイトを構築してくれるもので、複数人での情報共有などに向いています。
-->
mkdocsで作成したサイトをGithub Pagesに公開する手順を示します。

1. **mkdocsでサイトを作成する**  
    mkdocsでサイトを作成します。
    ```
    mkdocs new test-page
    cd test-page
    code .
    <※vscodeにてdocsフォルダ以下にドキュメントを作成>
    mkdocs build
    ```
    buildでsiteフォルダが作成されます。
2. **git push**  
    git pushでサイトをアップする
3. **アクセスしてみる**  
    https://nop892371.github.io/test-page/site
