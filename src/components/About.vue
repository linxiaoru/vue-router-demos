<template>
	<div class="container">
		<navbarSub></navbarSub>
		<h2 class="text-center">
			这里是About页
		</h2>
		<div class="tips">
			这一页呢，整个是个组件，然后在其中插入了顶栏的这个 navbarSub 组件，这个顶栏在 Home 页和 More 页中也都用到了，中间的 title 文字是在用了路由配置里的 $route.name 信息，就是在 main.js 中配置路由时加入了 name 参数，然后进入该页时直接读取。
			<p>这边的 Back 是用了编程式导航 this.$router.go(-1);方法</p>
			<p>点击 More 时呢，由于我在路由中加了 beforeEnter 方法，所以会弹出一个 confirm 框，这其实可以用作应用在跳转的提示啊，或者跳转前的一些动效方法等吧，而且除了 beforeEnter 还有其他的一些方法，具体可以看文档</p>
		</div>
	</div>
</template>


<script>
	import NavbarSub from 'components/NavbarSub.vue';
	export default {
		components: { 'navbarSub': NavbarSub }
	}	
</script>