export default {
	// 严格模式：防止直接修改state，只能用Mutations操作，由于strict模式是通过对象深度匹配进行，生产模式打开会严重影响性能。
	strict: process.env.NODE_ENV !== 'production',
	
	// 核心：数据
	state: {
		token: '',
		network: true,
		success: false
	},
	
	mutations: {
		changeToken: (state, val) => state.token = val,
		changeNetwork: (state, val) => state.network = val,
		loginSuccess: (state, val) => state.success = val,
	},
}