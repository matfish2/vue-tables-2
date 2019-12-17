<template>
     <span v-if="props.sortable" :class="props.class">
     </span>
</template>

<script>
    export default {
        name: "VtSortControl",
        props: ['props']
    }
</script>
