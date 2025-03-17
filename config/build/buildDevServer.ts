import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildConfig } from './types'

export function buildDevServer({ port }: BuildConfig): DevServerConfiguration {
    return {
        historyApiFallback: true,
        hot: true,
        port,
    }
}
