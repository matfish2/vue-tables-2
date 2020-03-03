<template>
    <select :class="`${props.theme.select} dropdown-pagination`"
            name="page"
            ref="page"
            :value="props.page"
            @change="e => props.setPage(e.target.value)"
            :id="`VueTables__dropdown-pagination_${props.name}`"
    >
        <option v-for="page in props.totalPages" :value="page">
            {{page}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "MyDropdownPagination",
        props: ['props']
    }
</script>
