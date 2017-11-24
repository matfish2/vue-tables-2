<template>
	<div>
		My Child Row {{data.code}}
	</div>
</template>

<script>
	
	export default {
		name:'ChildRow',
		props:['data'],
		mounted() {
			this.$parent.$emit(`mounted_child_row`, this.data.id);
		}
	}	
</script>