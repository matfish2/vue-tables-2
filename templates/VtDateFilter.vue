<template>
    <div class="VueTables__date-filter"
         :id="`VueTables__${props.column}-filter`">
    <span class="VueTables__filter-placeholder">
        {{props.placeholder}}
    </span>
    </div>
</template>

<script>
    export default {
        name: "MyDateFilter",
        props: ['props']
    }
</script>
