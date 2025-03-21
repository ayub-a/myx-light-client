import type { StorybookConfig } from '@storybook/react-webpack5'

import { storybookWebpackConfig } from './storybookWebpackConfig'

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(ts|tsx)'],
    staticDirs: ['../../public'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {},
    },

    webpackFinal: async (config, { configType }) =>
        storybookWebpackConfig(config, configType),
}

export default config
