<template>
    <tr class="VueTables__no-results">
        <td class="text-center" tabindex="0"
            :colspan="props.colspan">
            {{props.display(props.loading ? 'loading' : 'noResults')}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: "VtNoResultsRow",
        props: ['props']
    }
</script>
