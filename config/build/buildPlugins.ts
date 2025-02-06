import { WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildConfig } from './types'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({ paths, analyzer }: BuildConfig): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:7].css',
		}),
		analyzer
			? new BundleAnalyzerPlugin({
					openAnalyzer: false,
			  })
			: undefined,
	]
}
