import React from 'react';

const Inputs = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="이름을 입력하세요."
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력하세요."
        onChange={onChange}
      />
    </>
  );
};
export default Inputs;
