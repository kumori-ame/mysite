const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // production環境でのみ basePath を設定
  basePath: isProd ? '/mysite' : '',
  // 開発環境ではアセットプレフィックスを無効にする
  assetPrefix: isProd ? '/mysite' : '',
  
  // GitHub Pagesへのデプロイに必要な設定
  output: 'export',
};

module.exports = nextConfig;