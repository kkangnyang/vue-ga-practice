// node 환경에서는  require을 사용
// vue 환경에서는 import를 사용

const VueLoaderPlugin = require('vue-loader/lib/plugin');
// node에서 제공하는 코딩하기 편한 모듈
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', // 개발할 떄 eval하면 build 속도가 빠르다.
    resolve: {
        extensions: ['.js', '.vue'], // 확장자를 처리
    },
    // 많은 스크립트 중에 대표가 되는 스크립트
    entry: {
        app: path.join(__dirname, 'main.js'), // app은 하나로 합쳐질 파일 이름
    },
    // webpack의 핵심.
    // script 를 어떻게 합칠지,처리할지 rules에서 정함
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader' // loader 말고 use로 해도됨.
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ] 
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],           
    output: {
        filename: '[name].js', // app.js로 써도 되고 [name]으로 entry 안의 파일명을 갖고와도 됨.
        path: path.join(__dirname, 'dist'), //현재경로
        publicPath: '/dist', // webpack-run-server option
    },
}

