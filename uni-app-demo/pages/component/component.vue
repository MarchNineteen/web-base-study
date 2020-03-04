<template>
	<view>

		<uni-list>
			<uni-list-item :title="item.title" :note="item.des" :show-badge="item.showBadge" :badge-text="item.badgeText" v-for="(item, index) in items"
			 :key="index" :data-url="item.url" @tap="openItem(index)"></uni-list-item>
		</uni-list>

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
				items: [{
						title: 'swiper',
						des: '',
						url: '../component/swiper/swiper',
						showBadge: true,
						badgeText: '12'
					},
					{
						title: 'scroll-view',
						des: '',
						url: '../component/scroll-view/scroll-view',
						showBadge: false,
						badgeText: ''
					},
					{
						title: 'form表单',
						des: '',
						url: '../component/form/form',
						showBadge: false,
						badgeText: ''
					},
					{
						title: 'web-viwe',
						des: '',
						url: '../component/web-view/web-view',
						showBadge: false,
						badgeText: ''
					}
				]
			}
		},
		methods: {
			openItem(id) {
				// console.log(id);
				uni.navigateTo({
					url: this.items[id].url
				});
			}
		}
	}
</script>

<style>

</style>
