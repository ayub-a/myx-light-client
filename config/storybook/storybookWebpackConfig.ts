import path from 'path'

import { Configuration, DefinePlugin } from 'webpack'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { buildResolvers } from '../build/buildResolvers'
import { buildLoaders } from '../build/buildLoaders'

export const storybookWebpackConfig = (config: Configuration, configType) => {
    const isDev = configType === 'DEVELOPMENT'

    const configParams = {
        isDev,
        paths: {
            entry: '',
            html: '',
            output: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        },
    }

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            if (rule && typeof rule !== 'string' && rule.test?.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/ }
            }

            return rule
        })
    }

    config.resolve = buildResolvers(configParams)

    config.module?.rules?.push(...buildLoaders(configParams))

    config.plugins?.push(
        ...[
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
            }),
            new SpriteLoaderPlugin(),
        ]
    )

    return config
}
