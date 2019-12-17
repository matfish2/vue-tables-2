<template>
    <td tabindex="0" @keypress.enter="props.toggle" @click="props.toggle">
        <span :class="`VueTables__child-row-toggler ${props.class()}`"></span>
    </td>
</template>

<script>
    export default {
        name: "CustomChildRowToggler",
        props: ['props']
    }
</script>
