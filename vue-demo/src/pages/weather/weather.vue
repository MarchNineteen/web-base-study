<template>
	<div>
		<p>24小时分时天气预报</p>
		<ul>
			<li v-for="(item, index) in weather" :key="index">
				<p>{{item.computed_time}}</p>
				<p><img :src="`//mat1.gtimg.com/pingjs/ext2020/weather/pc/icon/weather/day/${item.weather_code}.png`" alt=""></p>
				<p>{{item.weather_short}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'weather',
		data() {
			return {
				weather: []
			}
		},
		mounted() {
			this.$api.weather.weather({
				province: '浙江',
				city: '杭州',
				source: 'xw',
				weather_type: 'forecast_1h|forecast_24h|index|alarm|limit|tips'
			})
			.then(res => {
				let weather = [];
				let forecast = res.data.data.forecast_1h;
				for (let i = 0; i < 24; i++) {
					let time = new Date().getHours() - 1 + i;
					if (time === 24) {
						time = '明天';
					} else if (time > 24) {
						time = time - 24 + ':00';
					} else {
						time = time + ':00';
					}
					forecast[i].computed_time = time;
					weather.push(forecast[i]);
				}
				this.weather = weather;
			})
			.catch(err => {
				console.log(err);
			});
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
		
		li {
			float: left;
			width: 100px;
			margin-bottom: 30px;
			text-align: center;
		}
	}
</style>
