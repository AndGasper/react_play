const path = require('path');
module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./client/index.js'
	],
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
		{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
		{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/} 
		]
	}
}

