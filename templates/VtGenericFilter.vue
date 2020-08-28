<template>
    <div class="VueTables__search-field">
        <label :for="`VueTables__search_${props.id}`" :class="props.theme.label">
            {{props.display("filter")}}
        </label>

        <input :class="`VueTables__search__input ${props.theme.input} ${props.theme.small}`"
               type="text"
               ref="filter"
               :placeholder="props.display('filterPlaceholder')"
               @keyup="e=>props.search(props.opts.debounce)(e)"
               :id="`VueTables__search_${props.id}`"
               autocomplete="off"
        />
    </div>
</template>

<script>
    export default {
        name: "MyGenericFilter",
        props: ['props'],
        methods: {
            focus() {
                this.$refs.filter.focus()
            },
            blur() {
                this.$refs.filter.blur()
            }
        }
    }
</script>
