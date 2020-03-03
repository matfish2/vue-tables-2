<template>

    <div :class="`VueTables VueTables--${props.source}`" slot-scope="props">

        <div :class="props.theme.row">
            <div :class="props.theme.column">
                <div v-if="!props.opts.filterByColumn && props.opts.filterable"
                     :class="`${props.theme.field} ${props.theme.inline} ${props.theme.left} VueTables__search`">
                    <vnodes :vnodes="props.slots.beforeFilter"/>
                    <vt-generic-filter/>
                    <vnodes :vnodes="props.slots.afterFilter"/>
                </div>
                <vnodes :vnodes="props.slots.afterFilterWrapper"/>

                <div v-if="props.perPageValues.length > 1"
                     :class="`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__limit`">
                    <vnodes :vnodes="props.slots.beforeLimit"/>
                    <vt-per-page-selector/>
                    <vnodes :vnodes="props.slots.afterLimit"/>

                </div>

                <div class="VueTables__pagination-wrapper" v-if="props.opts.pagination.dropdown && props.totalPages > 1">
                    <div :class="`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`">
                        <vt-dropdown-pagination/>
                    </div>
                </div>

                <div v-if="props.opts.columnsDropdown"
                     :class="`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`">
                    <vt-columns-dropdown/>
                </div>
            </div>
        </div>

        <vnodes :vnodes="props.slots.beforeTable"/>
        <div class="table-responsive">
            <vt-table ref="vt_table"/>
        </div>
        <vnodes :vnodes="props.slots.afterTable"/>

        <vt-pagination/>

    </div>
</template>

<script>
    import VtColumnsDropdown from 'vue-tables-2/compiled/components/VtColumnsDropdown'
    import VtDropdownPagination from 'vue-tables-2/compiled/components/VtDropdownPagination'
    import VtGenericFilter from 'vue-tables-2/compiled/components/VtGenericFilter'
    import VtPerPageSelector from 'vue-tables-2/compiled/components/VtPerPageSelector';
    import VtPagination from 'vue-tables-2/compiled/components/VtPagination'
    import VtTable from 'vue-tables-2/compiled/components/VtTable';

    export default {
        name: "MyDataTable",
        props: ['props'],
        components: {
            VtGenericFilter,
            VtPerPageSelector,
            VtColumnsDropdown,
            VtDropdownPagination,
            VtTable,
            VtPagination,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            }
        }
    }
</script>
