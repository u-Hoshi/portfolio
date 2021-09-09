# ポートフォリオ/ブログ

ポートフォリオサイト
url：https://portfolio-u-hoshi.vercel.app/

ブログ
url：https://portfolio-u-hoshi.vercel.app/blog

※レスポンシブ対応

## パフォーマンス

トップ
<img width="1440" alt="スクリーンショット 2021-09-09 22 28 51" src="https://user-images.githubusercontent.com/56116874/132706762-16de7ab6-7e9e-4b21-a6b5-501d871fbc90.png">

ブログ
<img width="1440" alt="スクリーンショット 2021-09-09 23 39 13" src="https://user-images.githubusercontent.com/56116874/132706822-012345e0-8814-4d05-ac5d-b870230ebae3.png">

## 使用技術

- React
- Next
- TypeScript
- Tailwind CSS
- microCMS
- husky
- eslint
- prettier
- stylelint
- lighthouse CI

今回はルーティングや画像最適化という点から Next.js を採用しました。
また大規模で開発することも想定して、TypeScript/es・stylelint を導入しました。

lighthouseCI を用いることで毎回パフォーマンスを確認する事ができます。これによって、どの作業でパフォーマンスが落ちたかを容易に特定する事ができます。

(現在は lighthouseCI のみ Build に時間がかかり大幅にパフォーマンスのスコアが低く出てしまっている点は原因調査中です。)
