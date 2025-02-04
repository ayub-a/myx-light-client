import { WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildConfig } from './types'

export function buildPlugins({ paths, isDev }: BuildConfig): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		isDev
			? new BundleAnalyzerPlugin({
					openAnalyzer: false,
			  })
			: undefined,
	]
}
