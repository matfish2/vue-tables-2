<template>
    <div class="VueTables__columns-dropdown-wrapper">

        <div :class="`${props.theme.dropdown.container} ${props.theme.right} VueTables__columns-dropdown`">
            <button type="button" :class="`${props.theme.button} ${props.theme.dropdown.trigger}`"
                    @click="props.toggleColumnsDropdown">
                {{props.display('columns')}}
                <span :class="`${props.theme.icon} ${props.theme.small}`">
                    <i :class="props.theme.dropdown.caret"></i>
               </span>
            </button>
            <ul :class="props.theme.dropdown.menu" :style="props.displayColumnsDropdown ?'display:block':'display:none'">
                <li v-for="column in props.origColumns">
                    <a :class="props.theme.dropdown.item"
                       href="#"
                       @click="props.toggleColumn(column)">
                        <input type="checkbox" :value="column"
                               :disabled="props.onlyColumn(column)"
                               :checked="props.columns.includes(column)"/>
                        {{props.getHeading(column)}}
                    </a>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MyColumnsDropdown",
        props: ['props']
    }
</script>
