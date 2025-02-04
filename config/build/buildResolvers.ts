import { ResolveOptions } from 'webpack'
import { BuildConfig } from './types'

export function buildResolvers({ paths }: BuildConfig): ResolveOptions {
	return {
		extensions: ['.js', '.ts', '.tsx'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	}
}
