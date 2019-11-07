export function loadModule(name) {
	return () => import(`@/pages/${name}`).then(m => m.default)
}