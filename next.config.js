/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pagesにデプロイするために必要な設定
  output: 'export',
  
  // あなたのリポジトリ名に合わせて設定してください
  // 例: https://<your-username>.github.io/<your-repository-name>/
  basePath: '/<your-repository-name>',

  // 画像の最適化を無効にする
  // GitHub PagesではNext.jsのImageコンポーネントの最適化機能が使えないため
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;