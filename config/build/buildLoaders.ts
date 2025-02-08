import { RuleSetRule } from 'webpack'
import { BuildConfig } from './types'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders({ isDev }: BuildConfig): RuleSetRule[] {
	const fileLoader = {
		test: /\.png$/,
		use: ['file-loader'],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const cssLoader = {
		test: /\.scss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\.scss/,
						localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
						namedExport: false,
						exportLocalsConvention: 'dashes',
					},
				},
			},
			'sass-loader',
		],
	}

	const babelLoader = {
		test: /\.(ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
		},
	}

	const tsLoader = {
		test: /\.tsx$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader]
}
