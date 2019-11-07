module.exports = {
	srcDir: 'src',
	/*
	 ** Headers of the page
	 */
	head: {
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	plugins: [
		'@/plugins/font-awesome',
		'@/plugins/global'
	],
	modules: [
		'@nuxtjs/style-resources',
		[
			'@nuxtjs/router',
			{
				path: './src/router',
				fileName: 'index.js'
			}
		]
	],
	styleResources: {
		stylus: [
			'@/assets/styles/common.styl'
		]
	},
	css: [
		'normalize.css/normalize.css',
		'reset.css/reset.css'
	],
	/*
	 ** Customize the progress bar color
	 */
	loading: {color: '#3B8070'},
	/*
	 ** Build configuration
	 */
	render: {
		resourceHints: true
	},
	build: {
		/*
		 ** Run ESLint on save
		 */
		vendor: [
			'@/plugins/firebase'
		],
		extend(config, {isDev, isClient}) {
			config.resolve.alias['%components'] = '@/components';
			config.resolve.alias['%js'] = '@/assets/js';
			config.resolve.alias['%mixins'] = '@/assets/js/mixins';
			
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
}

