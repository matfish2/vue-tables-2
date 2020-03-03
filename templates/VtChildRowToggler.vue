<template>
    <td :tabindex="props.tabIndex" @keypress.enter="props.toggle" @click="props.toggle">
        <span :class="`VueTables__child-row-toggler ${props.class()}`"></span>
    </td>
</template>

<script>
    export default {
        name: "MyChildRowToggler",
        props: ['props']
    }
</script>
