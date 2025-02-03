import path from 'path'
import { Configuration } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import 'webpack-dev-server'

export default (env: any): Configuration => {
	return {
		mode: env.production ? 'production' : 'development',

		entry: path.resolve(__dirname, 'src', 'index.ts'),

		output: {
			filename: '[name].[contenthash:7].js',
			path: path.resolve(__dirname, 'build'),
			clean: true,
		},

		plugins: [
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		],

		module: {
			rules: [
				{
					test: /\.(js|ts)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: 'ts-loader',
				},
			],
		},

		resolve: {
			extensions: ['.js', '.ts'],
		},

		devServer: {
			static: {
				directory: path.resolve(__dirname, 'build'),
			},
			port: 3000,
			hot: true,
			open: false,
		},

		devtool: 'inline-source-map',
	}
}
