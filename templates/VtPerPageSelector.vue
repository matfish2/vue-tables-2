<template>
        <div class="VueTables__limit-field">
            <label :class="props.labelClass" :for="`VueTables__limit_${props.id}`">
                {{props.display('limit')}}
            </label>
            <select :id="props.selectAttrs.id"
                    :class="props.selectAttrs.class"
                    @change="props.selectEvents.change">
                <option v-for="val in props.perPageValues"
                        :key="val"
                        :value="val"
                        :selected="val===props.selectAttrs.value">{{val}}</option>
            </select>
        </div>
</template>

<script>
    export default {
        name: "MyPerPageSelector",
        props: ['props']
    }
</script>
