<template>
	<nav class="navbar">
		<div class="navbar-inner">
			<router-link to="/about">About</router-link>
			<div>vue-router</div>
			<router-link to="/home">Home</router-link>
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