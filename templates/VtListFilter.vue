<template>
    <div class="VueTables__list-filter"
         :id="`VueTables__${props.column}-filter`">
    <select :class="props.theme.select"
            @change="props.search(false)"
            :name="props.name"
            :value="props.value">
        <option value="">
            {{props.defaultOption}}
        </option>
        <option v-for="option in props.items" :value="option.id">
            {{option.text}}
        </option>
    </select>
    </div>
</template>

<script>
    export default {
        name: "MyListFilter",
        props: ['props']
    }
</script>
