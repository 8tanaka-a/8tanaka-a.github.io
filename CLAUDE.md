# Portfolio Site - one code

## Overview

フリーランスのフロントエンドエンジニア「one code」のポートフォリオサイト。

## Tech Stack

- **Framework**: Astro (SSG, 完全静的)
- **Hosting**: GitHub Pages
- **Articles**: Astro Content Collections (Markdown)
- **Animation**: GSAP (SVGドットのランダム点滅・記号表示演出)
- **Page Transitions**: Astro View Transitions
- **Styling**: vanilla CSS (Astro scoped)
- **Package Manager**: pnpm
- **TypeScript**: strict mode

## Fonts (self-hosted)

- **Geo**: ロゴ・装飾的見出し
- **Space Mono**: 英字見出し・コード的要素
- **Noto Sans JP**: 日本語本文・UI

## Project Structure

```
src/
├── assets/fonts/      # セルフホストフォント (woff)
├── assets/images/     # 画像
├── assets/svg/        # SVGファイル (ドットグリッド等)
├── components/        # Astroコンポーネント
├── content/notes/     # 記事 (Markdown)
├── layouts/           # BaseLayout (共通ヘッダー/メタ/View Transitions)
├── pages/             # ページ
└── styles/            # global.css, variables.css
```

## Design

- グリッドベースのレイアウト
- モノスペースフォント
- カラー: グレーベース + オレンジアクセント
- PCでは各ページがスクロールなしで閲覧できる1画面完結型
- 左下にSVGドットグリッド: ランダム点滅 → 特定の記号表示のアニメーション

## Pages

- **Top**: About / Works / Notes を一覧表示
- **About**: 自己紹介
- **Works**: 実績一覧
- **Notes**: 記事一覧 (mdで管理)

## Accessibility

- セマンティックHTML (`<nav>`, `<main>`, `<article>`, `<section>` など)
- `aria-label` / `aria-labelledby` を対話要素に付与
- キーボード操作対応 (フォーカス管理, Tab順序, Escでモーダル閉じる等)
- `:focus-visible` によるフォーカスの視認性確保
- 画像の `alt` 属性
- カラーコントラスト比 WCAG AA 以上

## Theme

- ライト / ダークモード対応 (`prefers-color-scheme`)
- `<meta name="theme-color">` でブラウザUIの色をテーマに合わせる
- CSS custom properties でカラートークンを管理

## Performance / SEO

- Lighthouse 全カテゴリで高スコアを目指す
- 適切な `<meta>` / OGP タグ
- フォント最適化 (`font-display: swap` など)

## Conventions

- **ESLint**: flat config (`eslint.config.js`) — `@eslint/js` + `typescript-eslint` + `eslint-plugin-astro`
- **Prettier**: セミコロンあり, シングルクォート, タブ幅2, `prettier-plugin-astro`
- **VSCode**: 保存時に Prettier フォーマット + ESLint 自動修正
- **husky + lint-staged**: コミット時にステージ済みファイルへ ESLint + Prettier 実行

## Components

- 1コンポーネント1役割 (Single Responsibility)
- 命名は PascalCase (`Header.astro`, `DotGrid.astro`)
- 親子間のスタイルは互いに干渉しない
  - 親は子の内部スタイルに手を出さない
  - 子は配置 (margin, position) を自分で持たない — 配置は親が制御する
- スタイルは各 `.astro` の scoped CSS で閉じる、共有変数は `variables.css` から参照
- Props は明示的に `interface Props` で型定義する
