<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import TableComponent from './TableComponent';
    //Event를 중앙에서 통제하는 시스템 : EventBus
    import EventBus from './EventBus';
    
    export default {
        
        components: { TableComponent },
        data() {
            return {
                tableData: [
                    ['', '', ''], 
                    ['', '', ''], 
                    ['', '', '']
                ],
                turn: 'O',
                winner: '',
            }
        },
        methods: {
            onChangeData() {
                // vue의 배열이 있고 index로 배열의 값을 바꾸면 화면에 반영되지 않는다.
                this.tableData[0][1] = 'O';
                // 배열의 메소드를 통해 바꾸는거는 바뀜.
                this.tableData.push('O');

                // vue 배열에서는 set을 사용해야 함.
                Vue.set(this.tableData[1], 0, 'X');
                this.$set(this.tableData[1], 0, 'X'); // Vue.set과 동일
            },
            onClickTd(rowIndex, cellIndex) {
                console.log(rowIndex, cellIndex);
                // vue에서 index를 사용할때는 반드시 vue.set을 사용해준다.
                this.$set(this.tableData[rowIndex], cellIndex ,this.turn);

                let win = false;
                if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if (win) { // 이긴 경우: 3줄 달성
                    this.winner = this.turn;
                    this.turn = 'O';
                    this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                } else { // 무승부
                    let all = true; // all이 true면 무승부라는 뜻
                    this.tableData.forEach((row) => { // 무승부 검사
                        row.forEach((cell) => {
                        if (!cell) {
                            all = false;
                        }
                        });
                    });
                    if (all) { // 무승부
                        this.winner = '';
                        this.turn = 'O';
                        this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                    } else {
                        this.turn = this.turn === 'O' ? 'X' : 'O';
                    }
                }
            
            }
        },
        created() {
            EventBus.$on('clickTd', this.onClickTd);
        }
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>