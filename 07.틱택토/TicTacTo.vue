<template>
    <div>
        <table-component :table-data="tableData"></table-component>
        <div>{{turn}}님의 턴입니다.</div>
    </div>
</template>

<script>
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
            }
        },
        computed: {
            
        },
        methods: {
           
        },
        mounted() {
        },
        beforeDestroy() {
            
        },
    };
</script>

<style scoped>
</style>