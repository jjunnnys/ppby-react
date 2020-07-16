import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1rem 0;
  width: 5rem;
  height: 3rem;
  border: none;
  background-color: #bac8ff;
  border-radius: 5px;

  font-size: 2rem;
  font-weight: 700;

  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #4c6ef5;
  }
`;

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
      <Button>추가</Button>
    </>
  );
};
export default Inputs;
