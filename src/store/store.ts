import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { counterSlice } from './counterSlice';

// 느린 네트워크 시뮬레이션을 위한 Storage Wrapp
type StorageLike = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

const createSlowStorage = (delay: number = 2000): StorageLike => ({
  getItem: async (key: string) => {
    console.log(`[SlowStorage] Reading ${key}... (${delay}ms delay)`);
    await new Promise(resolve => setTimeout(resolve, delay));
    const result = await AsyncStorage.getItem(key);
    console.log(`[SlowStorage] Read complete:`, result);
    return result;
  },
  setItem: async (key: string, value: string) => {
    console.log(`[SlowStorage] Writing ${key}...`);
    // 저장은 지연 없이 (UX를 위해)
    return AsyncStorage.setItem(key, value);
  },
  removeItem: async (key: string) => {
    console.log(`[SlowStorage] Removing ${key}...`);
    return AsyncStorage.removeItem(key);
  },
});

const persistConfig = {
  key: 'root',
  storage: createSlowStorage(2000) // or AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

// TypeScript 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;