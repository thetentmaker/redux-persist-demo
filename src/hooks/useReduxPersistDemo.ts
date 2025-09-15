import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../src/store/counterSlice';
import { AppDispatch, RootState } from '../../src/store/store';

export const useReduxPersistDemo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const onPressPlus = () => {
    dispatch(increment());
  };

  const onPressMinus = () => {
    dispatch(decrement());
  };

  return {
    count,
    onPressPlus,
    onPressMinus,
  };
};