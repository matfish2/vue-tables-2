<template>
    <input
            @keyup="e => props.search(props.debounce)(e)"
            :class="props.theme.input"
            :name="props.getColumnName(props.column)"
            type="text"
            :placeholder="props.display('filterBy', {column: props.getHeading(props.column)})"
            autocomplete="off"
    />
</template>

<script>
    export default {
        name: "MyTextFilter",
        props: ['props']
    }
</script>
