<template>
	<view class="uni-flex uni-column">
		<view class="content">
			<button type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" withCredentials="true" v-show="showAuthBtn">授权登录</button>

			<!-- <image class="logo" src="/static/avatar1.jpg"></image> -->
			<image class="logo" :src="userInfo.avatarUrl"></image>
			<text v-if="userInfo">{{userInfo.nickName}}</text>

			<!-- <button type="primary" @click="wechetLogin">微信登录</button> -->

		</view>

		<view class="text-box">{{food}}</view>

		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="bindClickTap">{{btnText}}</button>
		</view>


		<view class="uni-flex uni-row">
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							消费类型
						</view>
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="xiaofeiIndex" :range="xiaofeiType" range-key="name">
								<view class="uni-input">{{xiaofeiType[xiaofeiIndex].name}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>

			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							就餐类型
						</view>
						<view class="uni-list-cell-db">
							<picker @change="bindJiucanPickerChange" :value="jiucanIndex" :range="jiucanType" range-key="name">
								<view class="uni-input">{{jiucanType[jiucanIndex].name}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-flex uni-row">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in dishesObjects" :key="index"
			 @tap="openInfo(item.post_id)">
				<view class="uni-media-list" newid="item.post_id">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import config from './config.js'

	export default {
		components: {},
		data() {
			return {
				userInfo: {
					"nickName": '',
					"avatarUrl": '',
				},
				dishesObjects: [],
				config: config,
				showAuthBtn: false,
				btnText: '开始',
				xiaofeiIndex: 0,
				xiaofeiType: [{
						name: "不限"
					},
					{
						name: "随便吃点"
					},
					{
						name: "吃顿好的"
					}
				],
				jiucanIndex: 0,
				jiucanType: [{
						name: "不限"
					},
					{
						name: "早餐"
					},
					{
						name: "中餐"
					},
					{
						name: "晚餐"
					},
					{
						name: "夜宵"
					}
				],
				food: "包子",
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
			console.log("onload");
			try {
				const userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					console.log(userInfo);
					this.userInfo = JSON.parse(userInfo);
				} else {
					// 自动点击按钮去授权
					this.showAuthBtn = true;
				}
			} catch (e) {
				// error
				console.log(e);
				this.showAuthBtn = true;
			}
			// this.wechetLogin();
			this.getDishesObjects();
		},
		// 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		onShow() {
			console.log("onshow");
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
			bindGetUserInfo(e) {
				if (e.detail.userInfo) {
					//用户按了允许授权按钮
					console.log("用户按了允许授权按钮");
					var userInfo = e.detail.userInfo;
					console.log(userInfo);
					this.userInfo = userInfo;
					// 同步存储
					try {
						uni.setStorageSync('userInfo', JSON.stringify(userInfo));
						console.log('success');
						this.showAuthBtn = false;
					} catch (e) {
						// error
						this.showAuthBtn = true;
					}
				} else {
					//用户按了拒绝按钮
					console.log("用户按了拒绝按钮")
				}
			},
			wechetLogin() {
				uni.login({
					provider: 'weixin',
					success: function(res2) {
						console.log(res2);
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes);
								//infoRes里面有用户信息需要的话可以取一下
								let username = infoRes.userInfo.nickName; //用户名
								let gender = infoRes.userInfo.gender; //用户性别
								let formdata = {
									code: res2.code,
									username: username,
									sex: gender
								};
								console.log("执行openId");
								uni.request({
									url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx163ab0518b9f64e5&secret=14e53aa7a8761824d1a83bfa3210fa22&js_code=' +
										res2.code + '&grant_type=authorization_code', //仅为示例，并非真实接口地址。
									data: {
										text: 'uni.request'
									},
									header: {},
									success: (res) => {
										console.log(res.data);
									}
								});
							},
							fail: function(res) {
								console.log(res);
							}
						})
					},
				})
			},
			bindPickerChange(e, val) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.xiaofeiIndex = e.target.value;
			},
			bindJiucanPickerChange(e, val) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.jiucanIndex = e.target.value;
			},
			getDishesObjects() {
				console.log("getDishesObjects...");
				
				// uni.getStorage({
				// 	key: 'dishesObjects',
				// 	success: function(res) {
				// 		console.log("成功获取到数据...")
				// 		console.log(res)
				// 		this.dishesObjects = res.data;
				// 		// this.dishesObjects = res.data;
				// 	},
				// 	fail: function(e) {
				// 		console.log(e, "没有找到，从配置中加载默认数据")
				// 		//没有找到，从配置中加载默认数据
				// 		uni.setStorage({
				// 			key: "dishesObjects",
				// 			data: this.config.dishesObjects,
				// 			success: function(res) {
				// 				console.log("存储成功，重新读取...");
				// 				this.getDishesObjects();
				// 			},
				// 			fail: function() {
				// 				console.log("存储失败，提示用户...");
				// 			}
				// 		})
				// 	}
				// })

				try {
					const value = uni.getStorageSync('dishesObjects');
					if (value) {
						console.log("成功获取到数据...")
						this.dishesObjects = value;
					} else {
						try {
							uni.setStorageSync('dishesObjects', this.config.dishesObjects);
							console.log("存储成功，重新读取...");
							this.getDishesObjects();
						} catch (e) {
							// error
							console.log("存储失败，提示用户...");
						}
					}
				} catch (e) {
					// error
					console.log(e, "没有找到，从配置中加载默认数据")
					//没有找到，uni.setStorage从配置中加载默认数据
					try {
						uni.setStorageSync('dishesObjects', this.config.dishesObjects);
						console.log("存储成功，重新读取...");
						this.getDishesObjects();
					} catch (e) {
						// error
						console.log("存储失败，提示用户...");
					}
				}

			},
			bindClickTap() {}
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
		margin-top: 50rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 50%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.text-box {
		margin-top: 20upx;
		align-items: center;
		text-align: center;
		font-size: 60upx;
		color: #353535;
		line-height: 1;
	}
</style>
