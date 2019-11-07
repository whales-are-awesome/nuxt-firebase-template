<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: `container`
	}
</script>

<style lang="stylus"
       scoped>
	.container
		container()
</style>