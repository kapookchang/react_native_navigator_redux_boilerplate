import {
    combineReducers,
    createStore,
} from 'redux'
import {
    persistStore,
    persistCombineReducers,
} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import rootReducer from './rootReducer'

const middleware = []
const config = {
    key: 'root',
    storage,
}
const reducer = persistCombineReducers(config, rootReducer) 

export default function configureStore () {
    let store = createStore(reducer)
    let persistor = persistStore(store)
    return { persistor, store}
}
