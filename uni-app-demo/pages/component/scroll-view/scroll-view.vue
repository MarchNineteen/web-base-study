<template>
	<view>
		<scroll-view :scroll-top="scrollTop" @scroll="scroll" @scrolltoupper="upper" @scrolltolower="lower" scroll-y="true">
			<view class="scroll-item" style="background: #007AFF;"></view>
			<view class="scroll-item" style="background: #4CD964;"></view>
			<view class="scroll-item" style="background: #F0AD4E;"></view>
		</scroll-view>
		
		<view @tap="goTop" class="uni-link uni-center uni-common-mt">
			点击这里返回顶部
		</view>
		
		<view>{{old.scrollTop}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper(e) {
				console.log(e);
			},
			lower(e) {
				console.log(e);
			},
			scroll(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			goTop(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style>
	scroll-view {
		height: 400rpx;
	}

	.scroll-item {
		height: 300rpx;
	}
</style>
