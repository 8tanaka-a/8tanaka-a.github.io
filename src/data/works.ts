export interface Work {
  slug: string;
  number: string;
  title: string;
  period: string;
  role: string;
  tech: string;
  body: string;
  dotPattern: string;
}

export const works: Work[] = [
  {
    slug: '01',
    number: '01',
    title: 'クレジット管理システム',
    period: '2026.01 - 進行中 / BtoB',
    role: '仕様書作成 / 実装 / CI/CD 設計',
    tech: 'TypeScript / Next.js / NestJS / PostgreSQL / Docker / GitHub Actions',
    body: `仕様書作成・計画・実装を、1人で担当しています。
Claude Code を取り入れて、設計書からの実装やレビュー自動化など、
カスタムスキルもいくつか作りました。

1人で書いてるとはいえ、AIと議論しながら進めているので
意外と「第三者視点」が効きます。

フロントのコンポーネントを書きながら、バックエンドのAPIをAIに組んでもらう。
そんな並列作業も試しました。頭は疲れますが、速度は明らかに変わります。

AI駆動開発はまだ試行錯誤の途中ですが、1人でもスピードが出る手応えがありました。
次は仕様の段階から、もっと上手く組み合わせていきたいです。`,
    dotPattern: 'ai',
  },
  {
    slug: '02',
    number: '02',
    title: '勤怠管理システム',
    period: '2025.04 - 2025.10 / BtoB',
    role: '技術選定 / バックエンド実装 / 開発リード',
    tech: 'TypeScript / React / NestJS / Docker / PostgreSQL / GitHub Actions',
    body: `社内に標準化された開発プロセスがない状態からのスタートだったので、
技術選定、開発環境の構築、運用ルールの整備まで、
まず土台を整えるところから始めました。

API設計もコンポーネント設計も、
後から入ってくる人が参画しやすい形を意識して体系化しています。

仕様書や技術ドキュメントはKiroを使って作成。
処理フローの明確化や要件整理で、
ドキュメントの質とスピードが両立できる感覚がありました。

実装しながらメンバーのタスク管理やレビューも担当したので、
目の前の実装と全体の進捗を行き来しながら、
チーム全体が迷わず動ける状態を作るように意識しました。`,
    dotPattern: 'code',
  },
  {
    slug: '03',
    number: '03',
    title: 'イベントメディアサイト',
    period: '2025.01 - 2025.04',
    role: '技術選定 / 開発環境構築 / 技術支援 / 開発リード',
    tech: 'TypeScript / Next.js / microCMS / GitHub Actions',
    body: `初めて、完全なリードとして入った案件です。
開発は基本せず、経験の浅いメンバーを引く役割でした。

技術選定やCI/CDの構築、microCMSとの連携設計など
基盤まわりを整えたあとは、いかにメンバーが気持ちよく開発できるかに
ずっと向き合っていた気がします。

外から来る揺らぎを、自分のところで一度吸収することを意識しました。

メンバーからのフィードバックをもらい、評判が高かったことが
この案件で一番の手応えでした。
リードとして何を大事にしたいか、自分の中で形になった気がします。`,
    dotPattern: 'flag',
  },
  {
    slug: '04',
    number: '04',
    title: 'イベント情報サイト',
    period: '2024.12 - 2025.09',
    role: '技術選定 / 中間API・フロントエンド実装 / CI/CD構築',
    tech: 'TypeScript / Next.js / Node.js / Serverless Framework / microCMS / GitHub Actions',
    body: `基本はSSG、一部はリアルタイム性が必要だったのでCSRとし
中間APIはServerless Frameworkで構築しました。

この案件で、初めて自分でCI/CDを組みました。
GitHub Actionsに興味があって、
やる機会を探していた時期でもあります。

デプロイの自動化、PR作成時のテスト実行、ビルド確認。
ymlを読みながら1つずつ組んでいきました。

「手でやってる作業は、自動化できる」という感覚を
ここで少し掴みました。
以降の案件で、CI/CDを組むハードルは低くなった気がします。`,
    dotPattern: 'code',
  },
];
