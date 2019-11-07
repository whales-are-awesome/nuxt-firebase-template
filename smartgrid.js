const smartgrid = require('smart-grid');

const settings = {
	filename: "smartgrid",
	outputStyle: "styl",
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1140px",
		fields: "15px"
	},
	mixinNames: {
		container: "container"
	}
};

smartgrid("./src/assets/styles/vendor", settings);