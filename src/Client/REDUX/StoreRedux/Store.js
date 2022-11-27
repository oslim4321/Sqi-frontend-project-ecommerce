import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import RegistrationSlice from '../ReduxMain.js/Registration'
// import LoginSlice from '../ReduxMain.js/Login'
import cartSlice from '../ReduxMain.js/AddToCart'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, RegistrationSlice)

export const Store = configureStore({
    reducer: {
        register: persistedReducer,
        cart: cartSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(Store)
// export default Store