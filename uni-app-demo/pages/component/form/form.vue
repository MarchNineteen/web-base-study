<template>
	<view>

		<view class="form-item">
			<view class="form-item-header">
				<text>form</text>
			</view>
			<view class="form-item-body">
				<form @submit="formSubmit" @reset="formReset" class="uni-form">
					<view class="uni-form-item">
						<view class="title">姓名：</view>
						<view class="des">
							<input type="text" v-model="userName" confirm-type="search" value="" placeholder="请输入姓名" placeholder-style="color:#f50" focus name="userName" />
						</view>
					</view>

					<view class="uni-form-item">
						<view class="title">性别：</view>
						<view class="des">
							<radio-group name="sex">
								<label v-for="item in sex">
									<radio :value="item.value" :checked="item.checked" /><text>{{item.name}}</text>
								</label>
							</radio-group>
						</view>
					</view>

					<view class="uni-form-item">
						<view class="title">籍贯：</view>
						<view class="des">
							<picker mode="selector" :range="placeList" @change="changePlace" class="uni-picker" name="place">
								<view>{{place}}</view>
							</picker>
						</view>
					</view>

					<view class="uni-form-item">
						<view class="title">生日：</view>
						<view class="des">
							<picker mode="date" @change="changeBirthday" class="uni-picker" name="birthday">
								<view>{{birthday}}</view>
							</picker>
						</view>
					</view>

					<view class="uni-form-item">
						<view class="title">体重：</view>
						<view class="des">
							<slider @change="changeWeight" :min="40" :max="100" :value="weight" name="weight" />
						</view>
					</view>

					<view class="uni-form-item">
						<view class="title">婚否：</view>
						<view class="des">
							<switch :checked="marry" @change="changeMarry" name="marry" />
						</view>
					</view>

					<view class="uni-form-item block">
						<view class="title">简介：</view>
						<view class="des">
							<textarea value="" placeholder="请输入简介" auto-height v-model="introduction" name="introduction" />
							</view>
					</view>
					
					<view class="uni-form-item">
						<button type="primary" size="mini" form-type="submit">提交</button>
						<button type="default" size="mini" form-type="reset">重置</button>
					</view>
				</form>
			</view>
		</view>


		<view class="form-item">
			<view class="form-item-header">
				<text>button</text>
			</view>
			<view class="form-item-body">
				<button type="primary" size="mini">主按钮</button>
				<button type="default" size="mini">次按钮</button>
				<button type="warn" size="mini">警告按钮</button>
				<button type="primary" size="mini" disabled="true">禁用按钮</button>
				<button type="primary" size="mini" plain="true">幽灵按钮</button>
				<button type="primary" size="mini" loading="true">loading按钮</button>
				<button type="primary" open-type="share">开放能力按钮</button>
			</view>
		</view>

		<view class="form-item">
			<view class="form-item-header">
				<text>checkbox</text>
			</view>
			<view class="form-item-body">
				<view>
					<checkbox-group name="" @change="changeCheckAll">
						<label>
							<checkbox value="全选" :checked="checkAll" color="#f00" style="transform:scale(1.2)" /><text>全选 {{checkAll}}</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-list" style="margin-top:20rpx">
					<checkbox-group name="" @change="changeCheckbox">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="item in items" :key="item.value">
							<label>
								<checkbox :value="item.value" :checked="item.checked" /><text>{{item.name}} - {{item.checked}}</text>
							</label>
						</view>
					</checkbox-group>
				</view>
			</view>
		</view>

		<view class="form-item">
			<view class="form-item-header">
				<text>radio</text>
			</view>
			<view class="form-item-body">
				<view class="uni-list" style="margin-top:20rpx">
					<radio-group name="" @change="changeRadio">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, index) in items" :key="item.value">
							<label>
								<radio :value="item.value" :checked="index === current" /><text>{{item.name}} - {{item.checked}}</text>
								<!-- <radio :value="item.value" :checked="item.checked" /><text>{{item.name}} - {{item.checked}}</text> -->
							</label>
						</view>
					</radio-group>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkAll: false,
				current: 0,
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: true
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					}
				],
				
				
				userName: '',
				sex: [
					{
						name: '男',
						value: 'man'
					},
					{
						name: '女',
						value: 'woman'
					}
				],
				place: '请选择籍贯',
				placeList: ['浙江杭州', '浙江丽水', '江苏南通'],
				birthday: '请选择生日',
				weight: 40,
				marry: false,
				introduction: ''
			}
		},
		methods: {
			changeBirthday(e) {
				console.log(e);
				this.birthday = e.detail.value;
			},
			changePlace(e) {
				console.log(e);
				this.place = this.placeList[e.detail.value];
			},
			changeWeight(e) {
				console.log(e);
				this.weight = e.detail.value;
			},
			changeMarry(e) {
				console.log(e);
				this.marry = e.detail.value;
			},
			formSubmit: function(e) {
				// console.log(e);
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
						content: '表单数据内容：' + JSON.stringify(formdata),
						showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			
			
			changeCheckAll(e) {
				this.checkAll = !this.checkAll;
				if (this.checkAll) {
					this.items.forEach((item, index, arr) => {
						item.checked = true;
					});
				} else {
					this.items.forEach((item, index, arr) => {
						item.checked = false;
					});
				}
			},
			changeCheckbox(e) {
				let items = this.items;
				let values = e.detail.value;
				if (items.length === values.length) {
					this.checkAll = true;
				} else {
					this.checkAll = false;
				}
				for (let i = 0; i < items.length; i++) {
					const item = items[i]
					if (values.includes(item.value)) {
						item.checked = true;
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			changeRadio(e) {
				console.log(e);
				// 借助另外一个选中参数current
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === e.detail.value) {
						this.current = i;
						break
					}
				}

				// let items = this.items;
				// for (let i = 0; i < items.length; i++) {
				// 	const item = items[i]
				// 	if (e.detail.value === item.value) {
				// 		this.$set(item, 'checked', true)
				// 	} else {
				// 		this.$set(item, 'checked', false)
				// 	}
				// }

			}


		}
	}
</script>

<style lang="scss">
	.form-item {
		position: relative;
		margin-bottom: 40rpx;
		padding: 24rpx 30rpx;

		&:after {
			position: absolute;
			z-index: 10;
			right: 0;
			bottom: 0;
			left: 24rpx;
			display: block;
			content: '';
			height: 1px;
			background-color: #c8c7cc;
			transform: scaleY(0.5);
		}

		&-header {
			font-size: 18px;
			color: 3px;
		}

		&-body {
			padding: 30rpx 0px;
			font-size: 14px;

			label {
				display: block;
			}
		}

	}

	button+button,
	uni-button+uni-button {
		margin-left: 20rpx;
	}

	.uni-list-cell {
		position: relative;

		label {
			display: block;
			padding: 20rpx 30rpx;
		}

		&:after {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 15rpx;
			display: block;
			content: '';
			height: 2rpx;
			background-color: #eee;
		}

		&-hover {
			background-color: #fcfcfc;
		}
	}
	
	// form
	.uni-form {
		
		&-item {
			position: relative;
			padding: 24rpx 30rpx;
			display: flex;
			flex-direction: row;
			
			&.block {
				display: block;
			}
			
			&:after {
				position: absolute;
				right: 0;
				bottom: 0;
				left: 15rpx;
				display: block;
				content: '';
				height: 2rpx;
				background-color: #eee;
			}
			
			.title {
				display: inline-block;
				font-size: 16px;
				font-weight: 700;
			}
			
			.des {
				flex: 1;
			}
			
			label {
				display: inline-block;
				margin-right: 30rpx;
			}
			
		}
		
		.uni-picker {
			height: 40rpx;
		}
	}
</style>
