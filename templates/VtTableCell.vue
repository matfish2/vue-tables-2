<template>
    <td tabindex="0" :class="props.classes">
        <vnodes :vnodes="props.content"/>
    </td>
</template>

<script>
    export default {
        name: "VtTableCell",
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
