import { useReducer } from 'react';

const reducer = (state, action) => {
  // 리듀서 함수는 객체를 반환
  return {
    ...state, // 기존 state의 상태를 복사 (불변성 유지)
    [action.name]: action.value, // 복사한 state에 변경 사항을 추가하여 새로운 객체 리턴
  };
};

const useInput = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChage = (e) => {
    dispatch(e.target);
  };
  return [state, onChage];
};

export default useInput;
