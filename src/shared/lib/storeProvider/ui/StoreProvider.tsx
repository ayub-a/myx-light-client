import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { DeepPartial } from '../config/types'

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: PropsWithChildren<StoreProviderProps>) => {
    const store = createReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
