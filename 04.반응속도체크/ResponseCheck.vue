<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen()">{{message}}</div>
        <template v-show="result.length">
            <div>평균 시간: {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </template>
        <!-- v-show : 태그가 있고 display:none으로 안보이게 처리 -->
        <!-- v-if : 태그 자체가 존재하지 않음 -->
    </div>
</template>

<script>
    // 화면이랑 관련 없으면 data에 안넣음
    let startTime = 0;
    let endTime = 0;
    let timeout = null;
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭하여 시작하세요.'
            }
        },
        // 일반 데이터를 가공해서 쓸 때 computed를 씀
        // computed는 캐싱이 됨.
        // ex) message data가 변경되면 template 안에 있는 내용을 다시 그린다.
        //     이 때 계산도 다시 수행해버린다. 계산을 computed 를 사용해서 하면 캐싱되어 있어 
        //     message data만 변햇을 때는 계산을 다시 수행하지 않는다.
        computed: {
            average() {
                return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
            }
        },
        methods: {
            onReset() {
                this.result = [];
            },
            onClickScreen() {
                if (this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.';
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
                } else if (this.state === 'ready') {
                    clearTimeout(timeout);
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 선택하세요.';
                } else if (this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.';
                    this.result.push(endTime - startTime);
                }
            }
        }
    };
    /* scoped : 이 컴포넌트 안에서만 사용하고 싶을 때 붙임 */
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>