<template>
	<div>
		<p>
			<label for="user">用户名：</label>
			<input type="text" name="user" v-model="user">
		</p>
		<p>
			<label for="user">密码：</label>
			<input type="password" name="password" v-model="password">
		</p>
		<p>
			<button @click="login">登录</button>
		</p>
		
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	
	export default {
		name: 'login',
		data() {
			return {
				user: 'peakchao',
				password: '123456',
				apikey: 'd0058f79caae5300dcba65f128e52855'
			}
		},
		computed: {
			...mapState(['token'])
		},
		methods:{
			login() {
				this.$api.login.login({
					name: this.user,
					passwd: this.$md5(this.password),
					apikey: this.apikey
				})
				.then(res => {
					console.log(res);
					// 登录成功，跳转到内部页面
					this.$router.push({
						path: '/songs'
					});
					// 登录成功,存储token
					// this.$store.commit('changeToken','t7887787887');
					this.changeToken('t999999999'); // 使用mapMutations简化代码
				})
				.catch(err => {
					console.log(err);
				});
			},
			...mapMutations(['changeToken'])
		}
		
	}
</script>

<style lang="scss">
</style>
