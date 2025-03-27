export type ModeOptions = 'production' | 'development'

export interface BuildEnv {
    analyzer: boolean
    mode: ModeOptions
    port: number
}

export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
    env: string
}

export interface BuildConfig {
    paths: BuildPaths
    isDev: boolean
    mode?: ModeOptions
    port?: number
    analyzer?: boolean
}
