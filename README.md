# 🌻 Shimada Portfolio

Webデザイナー / フロントエンドエンジニア 島田 夏織のポートフォリオサイトです。

## サイトURL

https://shimada-source.github.io/portfolio/

## コンセプト

**Design with "Why." — 全部に、理由がある。**

色にも、余白にも、ボタンの位置にも、必ず「なぜそうしたのか」がある。
「なんとなく」で作らない、理由のあるものづくりをテーマにしたポートフォリオです。

## ページ構成

| ページ | 内容 |
|--------|------|
| トップ | Hero・制作実績一覧・About簡易版・Contact |
| About | キャッチコピー・プロフィール・Values・Skills・Career |
| Work詳細 | 作品ごとの概要・プロセス・Gallery・こだわりポイント・振り返り |
| Contact | お問い合わせフォーム（Formspree） |

## 使用技術

| カテゴリ | 技術・ツール |
|---------|------------|
| マークアップ | HTML5 |
| スタイル | CSS3（BEM設計） |
| スクリプト | JavaScript（ES6+） |
| デザイン | Figma / Photoshop |
| バージョン管理 | Git / GitHub |
| ホスティング | GitHub Pages |
| フォーム | Formspree |

## デザインテーマ

ひまわりをモチーフにした暖かくやさしい配色です。

| 変数名 | カラーコード | 用途 |
|--------|------------|------|
| `--cream` | `#FFFDF7` | 背景 |
| `--warm-white` | `#FFF8E8` | セクション背景 |
| `--lemon` | `#F6D85E` | 装飾・アクセント |
| `--yellow` | `#E8B923` | メインカラー |
| `--brown` | `#5B4632` | テキスト |
| `--green` | `#7CB050` | Developmentタグ |

## ファイル構成

```
portfolio/
├── index.html
├── about.html
├── work-tea.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── common.css         … 共通スタイル
│   │   ├── index.css          … トップページ
│   │   ├── about.css          … About詳細ページ
│   │   ├── work-detail.css    … Work詳細ページ
│   │   └── contact.css        … お問い合わせページ
│   ├── js/
│   │   └── main.js            … スクロールアニメーション・ハンバーガーメニュー
│   └── images/
│       ├── favicon.svg
│       ├── ogp-image.png
│       ├── sunflower-deco.svg
│       ├── me.JPG
│       └── ...
└── README.md
```

## こだわったポイント

- **ひまわりテーマの世界観** — 配色・装飾・ファビコンまで統一
- **キャッチコピーとの一貫性** — Values・Skills・自己紹介すべてが「理由のあるものづくり」でつながる
- **スキルのドット表示** — パーセント表記ではなく、正直なレベル感で表現
- **レスポンシブ対応** — モバイルファーストで設計
- **アクセシビリティ** — セマンティックHTML・alt属性の適切な設定

## 制作者

| 項目 | 内容 |
|------|------|
| 名前 | 島田 夏織 |
| 職種 | Webデザイナー / フロントエンドエンジニア |
| GitHub | [@shimada-source](https://github.com/shimada-source) |
