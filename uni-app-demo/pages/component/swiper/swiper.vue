<template>
	<view>
		<view>
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :previous-margin="margin" :next-margin="margin">
				<swiper-item>
					<view class="swiper-item" style="background: #007AFF;"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background: #4CD964;"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" style="background: #F0AD4E;"></view>
				</swiper-item>
			</swiper>
		</view>
		
		<view style="margin-top: 100rpx;">
			<uni-list>
				<uni-list-item title="显示指示点" :showArrow="false" :showSwitch="true" :switchChecked="true" @switchChange="changeIndicatorDots"></uni-list-item>
				<uni-list-item title="自动播放" :showArrow="false" :showSwitch="true" :switchChecked="true" @switchChange="changeAutoplay"></uni-list-item>
				<uni-list-item title="前后间距" :showArrow="false" :showSwitch="true" :switchChecked="false" @switchChange="changeMargin"></uni-list-item>
			</uni-list>
			<view class="range">
				<view class="range-item">
					<view class="clearfix">
						<text class="range-item-title">幻灯片切换时长(ms)</text>
						<text class="range-item-info">{{ duration }}</text>
					</view>
					<slider class="range-item-slider" @change="changeDuration" :value="duration" min="500" max="2000" />
				</view>
				<view class="range-item">
					<view class="clearfix">
						<text class="range-item-title">自动播放间隔时长(ms)</text>
						<text class="range-item-info">{{ interval }}</text>
					</view>
					<slider class="range-item-slider" @change="changeInterval" :value="interval" min="2000" max="10000" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				margin: '',
				duration: 1000,
				interval: 3000
			}
		},
		methods: {
			changeIndicatorDots() {
				this.indicatorDots = !this.indicatorDots;
			},
			changeAutoplay() {
				this.autoplay = !this.autoplay;
			},
			changeMargin() {
				this.margin = !this.margin ? '100rpx' : '';
			},
			changeDuration(e) {
				this.duration = e.target.value;
			},
			changeInterval(e) {
				this.interval = e.target.value;
			}
			
			
		}
	}
</script>

<style lang="scss">
uni-swiper {
	height: 400rpx;
}
.swiper-item {
	height: 400rpx;
}

.uni-list {
	&:before,
	&:after {
		display: none;
	}
}
.range {
	position: relative;
	
	&:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		display: block;
		content: '';
		height: 1px;
		background-color: #c8c7cc;
		transform: scaleY(0.5);
	}
	
	&-item {
		position: relative;
		padding: 24rpx 30rpx;
		
		&:after {
			position: absolute;
			z-index: 10;
			right: 0;
			bottom: 0;
			left: 24rpx;
			display: block;
			content: '';
			height: 1px;
			background-color: #c8c7cc;
			transform: scaleY(0.5);
		}
		
		&-title {
			font-size: 16px;
		}
		
		&-info {
			float: right;
			font-size: 14px;
		}
		
		&-slider {
			margin-top: 30rpx !important;
		}
	}
}
</style>
