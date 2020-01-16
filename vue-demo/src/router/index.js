export default {
	routes: [
		{
			path: '',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: r => require.ensure([], () => r(require('../pages/login/login')), 'login'),  //webpack按需加载
			meta: {
				title: '登录'
			},
		},
		{
			path: '/news',
			name: 'news',
			component: r => require.ensure([], () => r(require('../pages/news/news')), 'news'),
			meta: {
				title: '新闻',
				requiresAuth: true
			},
		},
		{
			path: '/songs',
			name: 'songs',
			component: r => require.ensure([], () => r(require('../pages/songs/songs')), 'songs'),
			meta: {
				title: '歌曲',
				requiresAuth: true
			},
		},
		{
			path: '/weather',
			name: 'weather',
			component: r => require.ensure([], () => r(require('../pages/weather/weather')), 'weather'),
			meta: {
				title: '天气',
				requiresAuth: true
			},
		}
	]
}
