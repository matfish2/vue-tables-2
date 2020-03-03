<template>
    <tbody>
    <vnodes :vnodes="props.slots.prependBody"/>
    <vt-no-results-row v-if="props.data.length === 0"/>
    <table-rows v-for="(row,index) in props.data"
                :row="row"
                :index="props.initialIndex + index + 1"
                :renderChildRow="props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])"
                :key="index"
    />
    <vnodes :vnodes="props.slots.appendBody"/>
    </tbody>
</template>

<script>
    import VtNoResultsRow from 'vue-tables-2/compiled/components/VtNoResultsRow'
    import VtTableRow from 'vue-tables-2/compiled/components/VtTableRow'
    import VtChildRow from 'vue-tables-2/compiled/components/VtChildRow'

    export default {
        name: "MyTableBody",
        props: ['props'],
        components: {
            VtNoResultsRow,
            VtTableRow,
            VtChildRow,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            },
            TableRows: {
                functional: true,
                render(h, ctx) {
                    var props = ctx.data.attrs;

                    // TODO: add group row

                    var data = [
                        h('vt-table-row', {
                            props
                        })
                    ];

                    if (props.renderChildRow) {
                        data.push(h('vt-child-row', {
                            props
                        }))
                    }

                    return data
                }
            }
        }
    }
</script>
