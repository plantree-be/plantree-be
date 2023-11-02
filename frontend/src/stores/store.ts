import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootSaga from '@/stores/services/rootSaga'
import { branchReducer, userReducer } from '@/stores/features'

const persistConfig = {
  key: 'user',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer)

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    branch: branchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch