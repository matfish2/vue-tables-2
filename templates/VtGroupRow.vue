<template>
    <tr :class="props.theme.groupTr" @click="props.toggleGroupDirection">
        <td :colspan="props.colspan">
            <!-- Togglable group (toggleGroups: true)-->
            <button v-if="props.canToggleGroup"
                    :class="props.theme.button"
                    @click="props.toggleGroup.bind(this, props.groupValue)">{{props.groupValue}}
                <span :class="props.groupToggleIcon(props.groupValue)"></span>
            </button>
            <!--  Non-togglable group (toggleGroups: false) -->
            <span v-else>{{props.groupValue}}</span>
            <!--  Meta data slot -->
            <vnodes :vnodes="props.slot"/>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "VtGroupRow",
        props: ['props'],
        components:{
             vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            },
        }
    }
</script>
