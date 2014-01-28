#jquery.shiori.js

小説投稿型サイトにあるしおり機能を自分のサイトにつけるスクリプトです。

* 読んでいるページにしおりをはさむことができます。
* 小説のトップページに、しおりをはさんだページへのリンクを設置することができます。

##しおりの使いかた
###しおりのはさみかた

1. 『しおりをはさむ』をクリックします。
2.  画面の右上にしおりをはさんだページを表示します。

###しおりページへの飛びかた

1. トップページ等に設置しているアナウンスエリアのリンクをクリックします。

###しおりの消しかた

1. 『しおりを消す』をクリックします。
2. 画面の右上に削除のメッセージを表示します。

##使用上の注意

* パソコンやスマホにしおりのデータを保存するので、パソコンやスマホ同士でデータを共有することができません。
* ブラウザごとに保存するので、同じパソコンやスマホでもブラウザ同士でデータを共有することができません。
* ブラウザでクッキーの削除や履歴のクリアを実施するとしおりは削除されます。

##jquery.shiori.jsの設置方法

1. jqueryとjquery.cookie.jsを読み込みます。jqueryは本家サイトから。jquery.cookie.jsはGitHubからダウンロードしてください。jqueryはGoogleライブラリなどからのリンクでも良いと思います。サンプルではGoogleライブラリリンクを利用します。

```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>しおりデモ</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
```

2. ダウンロードしたjquery.shiori.jsとshiori.cssを読み込みます。

```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>しおりデモ</title>
    <link rel="stylesheet" href="css/shiori.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/jquery.shiori.js"></script>
```

3. bodyにjquery.shiori.jsを適用させて、必要に応じてオプションを指定します。

```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>しおりデモ</title>
    <link rel="stylesheet" href="css/shiori.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/jquery.shiori.js"></script>
    <script type="text/javascript">
    $(function() {
        $("body").shiori({
            'PAGENAME' : 'h1',             //しおり名に使用するタグやid
            'FOLDER'   : '/novel/sample/'  //しおりを共有するフォルダ
    　　　　'ANNOUNCE' : '#announce',      //しおりページへのリンク先を表示するID
    　　　　'NOTICE'   : 'notice',         //しおりの追加・削除を表示するお知らせボックスのID
    　　　　'YEAR'     : 1                 //しおりを保存する年数
    	});
    });
    </script>
```

4. しおりページへのリンク先を表示するタグを小説のトップページなどに記載します。

```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>しおりデモ</title>
    <link rel="stylesheet" href="css/shiori.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/jquery.shiori.js"></script>
    <script type="text/javascript">
    $(function() {
        $("body").shiori({
            'PAGENAME' : 'h1',             //しおり名に使用するタグやid
            'FOLDER'   : '/novel/sample/'  //しおりを共有するフォルダ
    　　　　'ANNOUNCE' : '#announce',      //しおりページへのリンク先を表示するID
    　　　　'NOTICE'   : 'notice',        //しおりの追加・削除を表示するお知らせボックスのID
    　　　　'YEAR'     : 1                 //しおりを保存する年数
    	});
    });
    </script>
    </head>
    <body>
    　…
    <div id="announce"></div>
    　…
    </body>
    </html>
```

5. 小説本文の各ページにしおり追加のタグを記載します。以上で設定は完了です。なお、jquery.cookie.jsはローカル環境では動作しないので、Webサーバーにアップしてから検証してください。よい創作ライフを！

```html
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>しおりデモ</title>
    <link rel="stylesheet" href="css/shiori.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/jquery.shiori.js"></script>
    <script type="text/javascript">
    $(function() {
        $("body").shiori({
            'PAGENAME' : 'h1',             //しおり名に使用するタグやid
            'FOLDER'   : '/novel/sample/'  //しおりを共有するフォルダ
    　　　　'ANNOUNCE' : '#announce',      //しおりページへのリンク先を表示するID
    　　　　'NOTICE'   : 'notice',        //しおりの追加・削除を表示するお知らせボックスのID
    　　　　'YEAR'     : 1                 //しおりを保存する年数
    	});
    });
    </script>
    </head>
    <body>
    　…
    <p><a href="javascript:void(0)" id="shiori_create">しおりをはさむ</a></p>
    　…
    </body>
    </html>
```
