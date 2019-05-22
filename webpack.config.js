const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';
	return {
		entry: [ 'babel-polyfill', './src/app.tsx' ],
		output: {
			path: path.resolve(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'babel-loader',
				  },
				  {
					test: /\.js$/,
					use: ["source-map-loader"],
					enforce: "pre"
				  },
				{
					test: /\.s?css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: { sourceMap: true }
						}
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css'
			})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/dist/',
			historyApiFallback: true
		}
	};
};
