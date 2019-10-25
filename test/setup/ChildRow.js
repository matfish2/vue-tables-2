export default {
		render(h) {
			return h('div',[
				'My Child Row ' + this.data.code
			])
		},
		name:'ChildRow',
		props:['data'],
		mounted() {
			this.$parent.$emit(`mounted_child_row`, this.data.id);
		}
	}
