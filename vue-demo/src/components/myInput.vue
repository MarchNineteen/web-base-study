<template>
	<input :type="type" :value="value" @change="changeValue" />
</template>

<script>
	export default {
		name: 'myInput',
		props:{
			type: {
				type: String,
				default: 'text'
			},
			value: {
				type: String
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			changeValue(e) {
				this.$emit('change', e.target.value);
			}
		}
	}
</script>

<style>
</style>
