<template>
	<div class="song">
		<div v-if="sc">收藏成功</div>
		<p>
			<myInput type="text" :value="w" @change="changeVal" />
			<myInput type="text" :value="w" @change="changeVal" />
			<myInput type="text" :value="w" @change="changeVal" />
		</p>
		<p><b>查找“<span style="color: #f00;">{{w}}</span>”</b></p>
		<ul>
			<li v-for="(song, index) in songs" :key="index">{{song.songname}}</li>
		</ul>
		
	</div>
</template>

<script>
	import myInput from '../../components/myInput';
	
	export default {
		name: 'songs',
		components: {
			myInput
		},
		data() {
			return {
				p: 1,
				n: 20,
				w: '张学友',
				songs: [],
				sc: false
			}
		},
		created() {
			this.searchSongs();
		},
		updated() {
			
		},
		watch: {
			w(val) {
				console.log(val);
				this.searchSongs();
			}
		},
		methods: {
			changeVal(e) {
				// console.log(e);
				this.w = e;
			},
			searchSongs() {
				this.$api.songs.songSearch({
					p: this.p,
					n: this.n,
					w: this.w,
					format: 'json'
				})
				.then(res => {
					// console.log(res);
					this.songs = res.data.data.song.list;
				})
				.catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.song {
		width: 300px;
		margin: auto;
		text-align: left;
	}
</style>
