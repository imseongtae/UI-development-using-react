const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    contentBase: path.join(__dirname, 'dist'),
    // publicPath: "/",
    overlay: true,
    // stats: "errors-only",
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 경로를 지정
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      hash: true, // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다
    }),
  ],
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
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: [
          // style-loader를 앞에 추가한다. 배열로 설정하면 뒤에서부터 앞의 순서로 로더가 동작
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : 'style-loader', // 개발 환경
          'css-loader',
        ],
      },
    ],
  },
};
