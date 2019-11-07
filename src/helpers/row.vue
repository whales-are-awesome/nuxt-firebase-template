<template>
	<div class="row">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: `row`
	}
</script>

<style lang="stylus"
       scoped>
	.row
		row-flex()
</style>