<template>
    <tr>
        <th v-if="props.childRowTogglerFirst"></th>
        <vt-table-heading v-for="(column, i) in props.columns" :key="i" :column="column"/>
        <th v-if="props.childRowTogglerLast"></th>
    </tr>
</template>

<script>
    import VtTableHeading from 'vue-tables-2/compiled/components/VtTableHeading'

    export default {
        name: "VtHeadingsRow",
        props: ['props'],
        components: {
            VtTableHeading
        }
    }
</script>

<style scoped>

</style>
