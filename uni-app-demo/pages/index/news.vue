<template>
	<view class="content">
		<view>
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
			 :previous-margin="margin" :next-margin="margin">
			 <div  v-for="(item,key) in banner" :key="key">
				<swiper-item>
					<!-- <view class="swiper-item" style="background: #007AFF;"></view> -->
					 <navigator url="">  
						   <image :src="item" style="height: 400upx;"/>   
					 </navigator> 
				</swiper-item>
			 </div>
			</swiper>
		</view>

		<view class="uni-list">
			<!-- <navigator url=""></navigator> -->
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="openInfo(item.post_id)">
				<view class="uni-media-list" newid="item.post_id">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: {},
				banner: [
					'/static/image/api.png',
					'/static/image/component.png',
					'/static/image/news.png',
				],
				indicatorDots: true,
				autoplay: true,
				margin: '',
				duration: 1000,
				interval: 3000
			}
		},
		onLoad: function() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.news = res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openInfo: function(attribute) {
				uni.navigateTo({
					url: '../info/newsDetail?newsid=' + attribute,
				});
			},
		}
	}
</script>

<style>
	.uni-media-list-body {
		height: auto;
	}
</style>
