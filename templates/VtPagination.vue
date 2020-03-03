<template>
        <pagination
                :options="props.optionsObj"
                :for="props.name"
                :vuex="props.vuex"
                :records="props.records"
                :per-page="props.perPage"
                v-model="props.page"
                @paginate="page => props.setPage(page)"/>
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
