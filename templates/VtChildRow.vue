<template>
    <tr :class="`VueTables__child-row ${props.class}`">
        <td :colspan="props.colspan">
            <vnodes :vnodes="props.childRow"/>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "MyChildRow",
        props:['props'],
        components:{
          vnodes: {
              functional: true,
              render: (h, ctx) => ctx.props.vnodes
          }
        }
    }
</script>
