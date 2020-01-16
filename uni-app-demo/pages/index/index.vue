<template>
	<view class="content">
		<image class="logo" src="/static/avatar1.jpg"></image>

		<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
			<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon" :class="item.open ? 'uni-panel-icon-on' : ''">&#xe581;</text>
			</view>
			<view class="uni-panel-c" v-if="item.open">
				<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" :url="item.url" @click="goDetailPage(item2.url)">
					<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
					<text class="uni-navigate-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				title1: 'Hello',
				title2: 'Hello22',

				apps: [{
						name: '组件',
						img: '../../static/image/component.png',
						url: '../component/component'
					},
					{
						name: 'API接口',
						img: '../../static/image/api.png',
						url: '../api/api'
					},
					{
						name: '新闻中心',
						img: '../../static/image/news.png',
						url: '../news/news'
					}
				]
			}
		},
		// 页面生命周期
		// 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
		onLoad() {
			console.log("onload")

		},
		// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() {
			console.log("onshow")
		},
		// 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady() {

		},
		// 监听页面隐藏
		onHide() {

		},
		// 监听页面卸载
		onUnload() {

		},
		// 监听窗口尺寸变化
		onResize() {

		},
		onShareAppMessage() {

		},
		mounted() {
		      console.log(this.$refs.text.value); //获取到元素
		},
		methods: {
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
