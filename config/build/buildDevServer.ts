import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildConfig } from './types'

export function buildDevServer({ port, paths }: BuildConfig): DevServerConfiguration {
	return {
		static: {
			directory: paths.output,
		},
		port,
		hot: true,
		open: false,
	}
}
