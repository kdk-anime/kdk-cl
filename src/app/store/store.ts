import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { middlewares, storeReducer } from './reducers';
import { defaultMiddlewareConfig } from './config';

export const createStore = () => {
	const store = configureStore({
		reducer: storeReducer(),
		middleware: (getDefaultMiddleware) => (
			getDefaultMiddleware(defaultMiddlewareConfig).concat(...middlewares)
		),
	});

	persistStore(store);

	return store;
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
