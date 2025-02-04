import { RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	}

	const tsLoader = {
		test: /\.ts$/,
		exclude: /node_modules/,
		use: 'ts-loader',
	}

	return [babelLoader, tsLoader]
}
