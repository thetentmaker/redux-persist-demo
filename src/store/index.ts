import { configureStore } from '@reduxjs/toolkit';
// 슬라이스들을 나중에 import할 예정
// import counterSlice from './counterSlice';
// import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // user: userSlice,
  },
});

// TypeScript 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;