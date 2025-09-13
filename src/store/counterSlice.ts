import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 초기 상태 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태
const initialState: CounterState = {
  value: 0,
};

// 슬라이스 생성
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 증가
    increment: (state) => {
      state.value += 1;
    },
    // 감소
    decrement: (state) => {
      state.value -= 1;
    },
    // 특정 값으로 증가
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // 리셋
    reset: (state) => {
      state.value = 0;
    },
  },
});

// 액션들을 export
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// 리듀서를 export
export default counterSlice.reducer;