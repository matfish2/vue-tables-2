<template>
    <th slot-scope="props"
        v-on="props.thEvents"
        v-bind="props.thAttrs"
    >
        <span class="VueTables__heading" :title="props.title">{{props.heading}}</span>
       <vt-sort-control/>
    </th>
</template>

<script>
    import VtSortControl from "vue-tables-2/compiled/components/VtSortControl";

    export default {
        name: "MyTableHeading",
        components:{ VtSortControl },
        props: ['props']
    }
</script>
