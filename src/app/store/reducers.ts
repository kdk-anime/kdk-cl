import type { Middleware, Reducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistorConfig } from './config';

const persistedReducers = combineReducers({
	// empty reducers
});

const reducers = () => ({
	[persistorConfig.key]: persistReducer(persistorConfig, persistedReducers),
} satisfies Record<string, Reducer>);

export const middlewares = [
	// empty middlewares
] satisfies Middleware[];

export const storeReducer = () => combineReducers(reducers());
