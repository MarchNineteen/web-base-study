<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<rich-text class="richText" :nodes="content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title : "",
				content : "",
			};
		},
		onLoad:function(e){
			uni.showLoading({
				title: '加载中',
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					this.title = res.data.title;
					this.content = res.data.content;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{padding: 10px 2%; width: 96%; flex-wrap: wrap;}
.title{line-height: 2em;font-weight: 700;font-size: 38upx;}
.richText{}
</style>
