<template>
    <tr class="VueTables__no-results">
        <td class="text-center" :tabindex="props.tabIndex"
            :colspan="props.colspan">
            {{props.display(props.message)}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: "MyNoResultsRow",
        props: ['props']
    }
</script>
