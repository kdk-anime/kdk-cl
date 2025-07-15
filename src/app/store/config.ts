import type { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import {
	FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import { storeConfig } from '@/shared/config';

type DefaultMiddlewareConfig = Parameters<Parameters<Required<ConfigureStoreOptions>['middleware']>[0]>[0];

export const persistorConfig = {
	key: storeConfig.persistKey,
	storage,
} satisfies PersistConfig<unknown>;

export const defaultMiddlewareConfig = {
	serializableCheck: {
		ignoredActions: [
			FLUSH,
			REHYDRATE,
			PAUSE,
			PERSIST,
			PURGE,
			REGISTER,
		],
	},
} satisfies DefaultMiddlewareConfig;
