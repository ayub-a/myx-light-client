import { Configuration } from 'webpack'
import { BuildConfig } from './types'

import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(config: BuildConfig): Configuration {
	const { paths, isDev, mode } = config

	return {
		mode,

		entry: paths.entry,

		output: {
			publicPath: '/',
			filename: '[name].[contenthash:7].js',
			path: paths.output,
			clean: true,
		},

		plugins: buildPlugins(config),

		module: {
			rules: buildLoaders(config),
		},

		resolve: buildResolvers(config),

		devServer: isDev ? buildDevServer(config) : undefined,

		devtool: isDev ? 'inline-source-map' : undefined,
	}
}
