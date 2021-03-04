<template>
    <div>
        <!-- 자바스크립트에서 css 하이픈은 카멜케이스로 해야함 -->
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>
    </div>
</template>

<script>
    let interval= null;
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    }

    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    };

    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find(function (v) {
            return v[1] === imgCoord;
        })[0];
    };
    export default {
        data() {
            return {
                imgCoord: rspCoords.바위,
                result: '',
                score: 0,
            }
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
                }
            }
        },
        methods: {
            changeHand() {
                interval = setInterval(() => {
                    if (this.imgCoord === rspCoords.바위) {
                        this.imgCoord = rspCoords.가위;
                    } else if (this.imgCoord === rspCoords.가위) {
                        this.imgCoord = rspCoords.보;
                    } else if (this.imgCoord === rspCoords.보) {
                        this.imgCoord = rspCoords.바위;
                    }
                }, 100);
            },
            onClickButton(choice) {
                clearInterval(interval);
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                const diff = myScore - cpuScore;
                if (diff === 0) {
                    this.result = '비겼습니다.';
                } else if ([-1, 2].includes(diff)) {
                    this.result = '이겼습니다.'
                    this.score += 1;
                } else {
                    this.result = '졌습니다.'
                    this.score -= 1;
                }
                setTimeout(() => {
                    this.changeHand();
                }, 1000);
            }
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        // 진짜 처음에 컴포넌트가 보여지게 될 떄, 보여지긴 하지만 화면에 나타나기 전
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        // 화면에 나타난 후
        mounted() {
            console.log('mounted');
            this.changeHand();
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        // 화면에 데이터가 바껴서 화면을 다시 그릴 떄
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            clearInterval(interval); // 메모리 누수 방지
        },
        // 화면에 있다가 없어져 버렸을 떄
        destroyed() {
            console.log('destroyed');
        }
    };
</script>

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>