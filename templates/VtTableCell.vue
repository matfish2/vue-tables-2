<template>
    <td :tabindex="props.tabIndex" :class="props.classes">
        <vnodes :vnodes="props.content"/>
    </td>
</template>

<script>
    export default {
        name: "MyTableCell",
        props: ['props'],
        components: {
            vnodes: {
                functional: true,
                render: (h, ctx) => typeof ctx.props.vnodes === 'object' ? ctx.props.vnodes : [ctx.props.vnodes]
            }
        }
    }
</script>

<style scoped>

</style>
