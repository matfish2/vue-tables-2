<template>
     <span v-if="props.sortable" :class="props.class">
     </span>
</template>

<script>
    export default {
        name: "MySortControl",
        props: ['props']
    }
</script>
