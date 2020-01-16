<template>
	<view>
		<text class="title" @click="changeTitle()">{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:{
			title : ''
		},
		methods: {
			emitFn() {
				
			}
		}
	}
</script>

<style>

</style>
