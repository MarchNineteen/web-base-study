<!-- 应用生命周期监听 应用生命周期仅可在App.vue中监听，在其它页面监听无效。 -->
<script>
	export default {
		// 当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			console.log('App Launch')
		},
		// 当 uni-app 启动，或从后台进入前台显示
		onShow: function() {
			console.log('App Show')
		},
		//	当 uni-app 从前台进入后台 
		onHide: function() {
			console.log('App Hide')
		},
		// 当 uni-app 报错时触发
		onError: function() {
			console.log('App error')
		},
		// 对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
		onUniNViewMessage: function() {
			console.log('App uniNViewMessage')
		}
	}
</script>
<!-- 公共样式 -->
<style>
	@import './common/uni.css';
	
	/*每个页面公共css */
</style>
