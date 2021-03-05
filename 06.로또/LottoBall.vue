<template>
    <div class="ball" :style="styleObject">{{number}}</div>
</template>

<script>
export default {
    name: 'LottoBall',
    // props로 들어온 애를 바꾸는 것은 금지. readonly. 값을 쓸수만 있고 바꿀수 없음
    props: {
        number: Number,
    },
    // 기존값을 통해서 새로운 값을 만들어낼때는 보통 computed를 사용한다.
    computed: {
        styleObject() {
            let background;
            if (this.number < 10) {
                background = 'red';
            } else if (this.number <= 20) {
                background = 'orange';
            } else if (this.number <= 30) {
                background = 'yellow';
            } else if (this.number <= 40) {
                background = 'blue';
            } else {
                background = 'green';
            }
            return {
                background,
            };
        }
        
    },
    methods: {
    }
}
</script>

<style scoped>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>