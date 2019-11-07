<template>
	<picture>
		<source
			:srcset="srcWebp"
			type="image/webp">
		<img
			:class="imgClass"
			:src="srcNormal"
			:alt="alt">
	</picture>
</template>

<script>
	export default {
		name: `pic`,
		props: {
			src: String,
			alt: String,
			imgClass: {
				type: String,
				default: `img`
			}
		},
		computed: {
			srcWebp() {
				let src = this.src.split(`.`).slice(0, -1).join(`.`)

				return `${src}.webp`
			},
			srcNormal() {
				return `${this.src}`
			}
		}
	}
</script>

<style scoped>

</style>