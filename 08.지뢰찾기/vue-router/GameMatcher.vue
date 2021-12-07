<template>
    <div v-if="currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
        <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
import NumberBaseball from '../../03.숫자야구/NumberBaseball.vue';
import ResponseCheck from '../../04.반응속도체크/ResponseCheck.vue';
import LottoGenerator from '../../06.로또/LottoGenerator.vue';

export default {
  components: { NumberBaseball, LottoGenerator, ResponseCheck },
    mounted() {
        console.log(this.$router); // vue 전체 라우트에 대한 설정
        console.log(this.$route); // 현재 라우트에 대한 설정
    },
    coumputed: {
        currentGame() {
            return this.$route.params.name;
        }
    }
}
</script>