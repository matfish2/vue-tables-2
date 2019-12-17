<template>
    <thead>
    <vnodes :vnodes="props.slots.prependHead"/>
    <vt-headings-row/>
    <vnodes :vnodes="props.slots.beforeFilters"/>
    <vt-filters-row v-if="props.opts.filterByColumn && props.opts.filterable"/>
    <vnodes :vnodes="props.slots.afterFilters"/>
    </thead>
</template>

<script>
    import VtHeadingsRow from "vue-tables-2/compiled/components/VtHeadingsRow";
    import VtFiltersRow from "vue-tables-2/compiled/components/VtFiltersRow";

    export default {
        name: "VtTableHead",
        props:['props'],
        components:{
            VtHeadingsRow,
            VtFiltersRow,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            }
        }
    }
</script>
