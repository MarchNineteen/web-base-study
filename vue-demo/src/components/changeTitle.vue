<template>
	<button @click="changeTitle($event)" >
		{{title}}
	<!-- {{fullname}}- -->
	<!-- <slot name="default" v-bind:user="user">{{user.lastName}}</slot> -->
	<slot name="header"></slot>
	<slot name="body"></slot>
	</button>
</template>

<script>
export default  {
	name : 'change-title',
	// 通过 Prop 向子组件传递数据
	props: {
		title : '',
		user : {
			firstName : '',
			lastName  : '',
		},
	},
	data: function () {
		return {
		  count: 0
		}
	},
	methods:{
		changeTitle : function (e) {
			// e.stopPropagation();
			// console.log(this.$parent.$data.title1)
			// this.$parent.pChangeTitle("I am child.vue");
			this.$emit('pChangeTitle', "I am child.vue");
		}
	},
	watch:{
		title : function (val, oldVal) {
			console.log('当前值为：' + val, '旧值为：' + oldVal)
		}
	},
	computed: {
	    fullname() {
	      return this.title + '.' + this.title
	   }
	}
}
</script>

<style>
	
</style>
