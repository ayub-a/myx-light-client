import { DefinePlugin, HotModuleReplacementPlugin, WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

// @ts-ignore
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { BuildConfig } from './types'

export function buildPlugins({ paths, analyzer, isDev }: BuildConfig): WebpackPluginInstance[] {
    return [
        new ReactRefreshPlugin(),
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:7].css',
        }),
        new SpriteLoaderPlugin(),
        analyzer
            ? new BundleAnalyzerPlugin({
                  openAnalyzer: false,
              })
            : undefined,
    ]
}
