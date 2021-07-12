const path = require('path');

module.exports = {
  mode: 'development',
  // 엔트리 포인트
  entry: {
    main: './src/index.tsx',
  },
  // 빌드 결과물을 dist/main.js에 위치
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: 'source-map',
  resolve: {
    // 파일 확장자 처리
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: './',
    publicPath: '/dist',
    port: 3000,
  },
  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // loader: "ts-loader",
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};
