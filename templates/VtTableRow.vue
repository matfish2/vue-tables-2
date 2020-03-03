<template>
    <tr :class="`VueTables__row ${props.rowAttrs.class}`"
        v-bind="props.rowAttrs.attrs"
        @click="props.rowEvents.click">
        <vt-child-row-toggler :row-id="props.rowId" v-if="props.childRowTogglerFirst"/>
        <vt-table-cell v-for="(column, i) in props.columns" :key="i" :column="column"/>
        <vt-child-row-toggler :row-id="props.rowId" v-if="props.childRowTogglerLast"/>
    </tr>
</template>

<script>
    import VtTableCell from "vue-tables-2/compiled/components/VtTableCell";
    import VtChildRowToggler from "vue-tables-2/compiled/components/VtChildRowToggler";

    export default {
        name: "MyTableRow",
        props: ['props'],
        components: {VtTableCell, VtChildRowToggler}
    }
</script>

<style scoped>

</style>
