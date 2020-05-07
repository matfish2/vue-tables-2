<template>
    <th slot-scope="props"
        v-on="props.thEvents"
        v-bind="props.thAttrs"
    >
        <span class="VueTables__heading" :title="props.title">
            <vnodes :vnodes="props.heading"/>
        </span>
        <vt-sort-control/>
    </th>
</template>

<script>
    import VtSortControl from "vue-tables-2/compiled/components/VtSortControl";

    export default {
        name: "VtTableHeading",
        components: {
            VtSortControl,
            vnodes: {
                functional: true,
                render: (h, ctx) => typeof ctx.props.vnodes === 'object' ? ctx.props.vnodes : [ctx.props.vnodes]
            }
        },
        props: ['props']
    }
</script>
