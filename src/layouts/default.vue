<template>
	<div class="page">
		<app-header/>
		<nuxt/>
		<app-footer/>
	</div>
</template>

<script>
	import AppHeader from '%components/app-header'
	import AppFooter from '%components/app-footer'

	export default {
		components: {
			AppFooter,
			AppHeader
		},
		head() {
			return {
				link: [
					{
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,300,300italic,600,600italic,700,700italic,800,800italic&subset=latin,cyrillic'
					}
				]
			}
		}
	}
</script>

<style lang="stylus">
	body, html
		font-family $default-font
		font-size $default-font-size
		font-weight $default-font-weight
		line-height $default-line-height
		letter-spacing $default-letter-spacing

	.page
		min-height 100vh

		display flex
		flex-direction column

		position relative
		z-index 1

		overflow hidden
</style>