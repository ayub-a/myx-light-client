export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            items: [
                { title: 'Light', value: 'light', icon: 'sun' },
                { title: 'Dark', value: 'dark', icon: 'moon' },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
    locale: {
        name: 'locale',
        description: 'Internationalization locale',
        defaultValue: 'ru',
        toolbar: {
            icon: 'globe',
            items: [
                { title: 'Русский', value: 'ru', right: '🇷🇺' },
                { title: 'English', value: 'en', right: '🇺🇸' },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
}
