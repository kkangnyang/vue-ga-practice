//ES2015에 들어있는 모듈시스템이라는 최신 문법
import Vue from 'vue';
import LottoGenerator from './LottoGenerator';

// vue instance, main component를 연결해줘야 함
new Vue(LottoGenerator).$mount('#root');