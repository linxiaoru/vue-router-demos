<template>
  <div class="container text-center">
    <h2>Hello World</h2>
    
    <ul class="box">
    	<router-link to="/home">
    		<p>点这也可以跳到 Home 页</p>
    	</router-link>
    	<router-link to="/about">
    		<p>点这也可以跳到 About 页</p>
    	</router-link>
    	<router-link to="/more">
    		<p>点这也可以跳到 More 页</p>
    	</router-link>
    </ul>

    <div class="tips">
    	这一页是由顶部的 Navbar 组件和下面的这个 Hello 组件组成，这两个组件分别插入在两个 router-view 中，
    	Navbar 和上面的这个框中的链接都是用 router-link 标签写的，然后用 to 来指定链接的地址，而这个路由信息是要在 main.js 中配置的
    </div>

  </div>

</template>

<style lang="stylus">
	.box
		padding 10px
		margin 10px 20px
		height 90px 
		border 1px solid #333
		border-radius 10px
		a 
			color #333
			text-decoration none
		p
			line-height 30px
	.tips 
		margin 20px
		color #999
		font-size 14px
		text-align justify
		line-height 20px		
				
</style>