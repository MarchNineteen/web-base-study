<!-- 应用生命周期监听 应用生命周期仅可在App.vue中监听，在其它页面监听无效。 -->
<script>
	export default {
		// 当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			console.log('App Launch')
		},
		// 当 uni-app 启动，或从后台进入前台显示
		onShow: function() {
			console.log('App Show');
		},
		//	当 uni-app 从前台进入后台 
		onHide: function() {
			console.log('App Hide')
		},
		// 当 uni-app 报错时触发
		onError: function(e) {
			console.log('App error')
			console.log(e)
		},
		// 对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
		onUniNViewMessage: function() {
			console.log('App uniNViewMessage')
		},
		isLogin : function() {
			try {
				var suid = uni.getStorageSync('suid');
				var srand = uni.getStorageSync('srand');
			} catch (e) {
				//TODO handle the exception
			}
			if (suid == '' || srand == '') {
				return false;
			} else {
				return [suid, srand];
			}
		}
	}
</script>
<!-- 公共样式 -->
<style>
	/* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	
	/* 以下样式用于 hello uni-app 演示所需 */
	page {
	    background-color: #F4F5F6;
	    height: 100%;
	    font-size: 28upx;
	    line-height: 1.8;
	}
	
	.uni-header-logo {
	    padding: 30upx;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    margin-top: 10upx;
	}
	
	.uni-header-image {
	    width: 100px;
	    height: 100px;
	}
	
	.uni-hello-text {
	    color: #7A7E83;
	}
	
	.uni-hello-addfile {
	    text-align: center;
	    line-height: 300upx;
	    background: #FFF;
	    padding: 50upx;
	    margin-top: 10px;
	    font-size: 38upx;
	    color: #808080;
	}
	
	/* #endif*/
</style>
