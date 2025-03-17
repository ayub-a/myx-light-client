import path from 'path'
import { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build'
import { BuildEnv, BuildPaths } from './config/build/types'

export default (env: BuildEnv): Configuration => {
    const analyzer = env.analyzer
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpackConfig({
        paths,
        isDev,
        port,
        mode,
        analyzer,
    })
}
