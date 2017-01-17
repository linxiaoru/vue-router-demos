<template>
	<nav class="navbar">
		<div class="navbar-inner">
			<a href="#" @click="Back">Back</a>
			<div>{{$route.name}}</div>
			<router-link to="/more">More</router-link>

		</div>
	</nav>
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
	
export default {
	methods: {
		Back(){
			this.$router.go(-1);
		}
	}
}

</script>

