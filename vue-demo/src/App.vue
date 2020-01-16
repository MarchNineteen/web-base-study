<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  
    <!-- <div> -->
    <div @click="pChangeTitle($event)">
		<change-title :title="title1" data-id="title1">
			<!-- 自定义方法只接受子组件传参 无事件 如果要带括号必须加$event -->
		<!-- <change-title :title="title1" data-id="title1"  @sChangeTitle='pChangeTitle($event)'> -->
			
			<!-- <div>{{user.firstName}}</div> -->
			<!-- <template v-slot:default="{user }">
				{{ user.firstName }}
			</template> -->
			<template v-slot:header>
				<p>header-slot</p>
			</template>
			<template v-slot:body>
				<p>body-slot</p>
			</template>
		</change-title>

		<change-title :title="title2" data-id="title2" :user="user">
			<template v-slot>
				<p>slot</p>
			</template>
		</change-title>
	</div>

	<myTitle :title="myTitle"></myTitle>

	<!-- <button @click="changTitle()">点击修改title</button> -->

	<!-- <view :id="vid1" class="text-area"> -->
	<!-- <text class="title">{{title1}}</text> -->
	<!-- </view> -->
	<!-- <view :id="vid2" class="text-area"> -->
	<!-- <text class="title">{{title2}}</text> -->
	<!-- </view> -->

	<!-- 表单 -->
	<input type="text" style="border: 1px solid #FF3333;" v-model="msg" ref="text"/>
	<p>Message is: {{ msg }}</p>

	<textarea v-model="textAreaMsg" style="border: 1px solid #007AFF; width: 200px; height: 100rpx;"></textarea>
	<p>textAreaMsg is: {{ textAreaMsg }}</p>

	<div>
		<!-- <input type="r" id="radio" value="One" v-model="picked" />
		<label for="one">One</label>
		<input type="radio" id="radio" value="Two"  v-model="picked" />
		<label for="two">Two</label> -->

	</div>
	<button type="button" @click="submit">提交</button>

  </div>
</template>

<script>
import changeTitle from './components/changeTitle';
import myTitle from './components/myTitle';
  
export default {
  name: 'app',
  components: {
		changeTitle,
		myTitle
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title1: 'Hello',
      title2: 'Hello22',
      myTitle: 'myTitlemyTitle',
      slot: 'slot111',
      textAreaMsg: 'textAreaMsg',
      picked: 'true',
      user : {
        firstName : 'firstName',
        lastName  : 'lastName',
      },
    }
  },
  methods: {
    pChangeTitle: function(e) {
		// console.log(e)
		// console.log(e.target)
		// console.log(e.target.dataset)
		console.log(e.target.dataset.id);
		// console.log(data);
		// console.log(e);
		// this.title1 = e.target.dataset.id;
		// if (e.target.dataset.id === 'title1') {
		// 	this.title1 = e.target.dataset.id;
		// } else {
		// 	this.title2 = e.target.dataset.id;
		// }
	},
	// changeTitle: function(data) {
	// 	this.title1 = data.data;
	// }
	submit: function() {
		console.log(this.msg)
	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
