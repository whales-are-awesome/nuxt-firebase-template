import Vue    from 'vue'
import Router from 'vue-router'

import {loadModule} from '%js/helpers/utils'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: `history`,
		routes: [
			{
				path: '/',
				component: loadModule('index')
			}
		]
	})
}