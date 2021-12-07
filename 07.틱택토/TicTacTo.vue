<template>
    <div>
        <table-component :table-data="tableData"></table-component>
        <div>{{turn}}님의 턴입니다.</div>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import TableComponent from './TableComponent.vue';
    
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
            }
        },
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