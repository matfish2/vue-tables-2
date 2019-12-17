<template>
        <div class="VueTables__limit-field">
            <label :class="props.labelClass" :for="`VueTables__limit_${props.id}`">
                {{props.display('limit')}}
            </label>
            <select :id="props.selectAttrs.id"
                    :class="props.selectAttrs.class"
                    :value="props.selectAttrs.value"
                    @change="props.selectEvents.change">
                <option v-for="val in props.perPageValues" :value="val">{{val}}</option>
            </select>
        </div>
</template>

<script>
    export default {
        name: "VtPerPageSelector",
        props: ['props']
    }
</script>
