## 概要

Backlog を利用して PM をしている尊敬すべき人たちのために、
少しでも楽になるような機能を Backlog へ追加するための Google Chrome Extension。
欲しいと感じた機能を今後も随時追加していく予定。

## 機能一覧

### 課題キーと課題名、課題URLをクリップボードにコピーする機能

Backlog 標準ではボード画面からは同時にコピーは出来ないが、
この機能を使うことによりボード画面から1クリックで
課題キーと課題名、課題URLをクリップボードにコピーすることができる。

![image](https://i.gyazo.com/ef2e7da96a722ddd187485c2a6bf1069.gif)

コピーされる内容のイメージは以下の通り。

```
ACTOUT-1 【ACTOUT】テスト課題
https://actout.backlog.com/view/ACTOUT-1
```

Slack などのチャットツールで課題の進捗や状況確認をするときに、
作業担当者にタスク名とタスクURLを楽に伝えることが出来る。
クラスメソッド株式会社様の以下の記事に触発されて開発した。

URL: [Backlogで「リンク付きの課題キーと件名」を取得するボタンを追加するChrome拡張機能を作ってみた](https://dev.classmethod.jp/articles/backlog-copy-link-chrome-extension/)

## 利用方法

まず、本リポジトリを git clone するか zip でダウンロードする。
その後、Chromeの拡張機能ページを開き、デベロッパーモードをONにして
「パッケージ化されていない拡張機能を読み込む」ボタンから
ダウンロード or クローンした本リポジトリのディレクトリを選択することで
拡張機能をインストールし、そのまま利用することができる。

![image](https://i.gyazo.com/1d02a8071c6b39bc269eaa16d37054ab.png)
