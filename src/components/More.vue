<template>
	<div class="container">
		<nav class="navbar">
			<div class="navbar-inner">
				<!-- <router-link to="../">Back</router-link> -->
				<a href="#" @click="Back">Back</a>
				<div>{{$route.name}}</div>	
				<router-link to=""></router-link>		
			</div>
		</nav>
		<h2 class="text-center">
			More.vue
		</h2>
	</div>
</template>
<style lang="stylus">
	.navbar 
		height 54px
		background-color #5f85d3
		
		.navbar-inner		
			display flex
			justify-content space-between
			align-items center
			line-height 24px
			div,a
				padding: 15px 20px
				color white
				text-decoration none
		
			
</style>

<script>
export default{
	methods: {
		Back: function(){
			console.log("back");
			this.$router.go(-1);
		}
	}
}

	
</script>
