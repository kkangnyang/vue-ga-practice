<template>
    <table>
        <slot />
    </table>
</template>

<script>
import  TrComponent from './TrComponent';

export default {
    components: {
        TrComponent,
    },
    computed: {
        tableData() {
            return this.$store.state.tableData;
        },
        turnMessage() {
            return this.$store.getters.turnMessage;
        }
    }
}
</script>

