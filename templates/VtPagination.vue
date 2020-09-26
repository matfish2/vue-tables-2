<template>
        <pagination
                :options="props.optionsObj"
                :records="props.records"
                :per-page="props.perPage"
                :value="props.page"
                @input="page => props.setPage(page)"/>
</template>

<script>
    import Pagination from 'vue-pagination-2'

    export default {
        name: "MyPagination",
        components: {
            Pagination
        },
        props: ['props']
    }
</script>
