export type ModeOptions = 'production' | 'development'

export interface BuildEnv {
	mode: ModeOptions
	port: number
}

export interface BuildPaths {
	entry: string
	output: string
	html: string
	src: string
}

export interface BuildConfig {
	paths: BuildPaths
	isDev: boolean
	mode: ModeOptions
	port: number
}
