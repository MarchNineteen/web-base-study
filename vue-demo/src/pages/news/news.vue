<template>
	<ul>
		<li v-for="(item, index) in news" :key="index">{{item.title}}</li>
	</ul>
</template>

<script>
	export default {
		name: 'news',
		data() {
			return {
				news: []
			}
		},
		created() {
			this.$api.news.newsList({
				count: 10,
				page: 100
			})
			.then(res => {
				// console.log(res);
				this.news = res.data.result;
			})
			.catch(err => {
				console.log(err);
			});
		}
	}
</script>

<style>
</style>
