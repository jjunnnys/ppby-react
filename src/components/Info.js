import React from 'react';
import styled from 'styled-components';
import { InfoConsumer } from '../context/info';

const Button = styled.button`
  margin: 1rem 0;
  width: 15rem;
  height: 5rem;
  border: 5px solid #fff;
  background-color: #ffd8a6;
  border-radius: 5px;

  font-size: 2rem;
  font-weight: 700;

  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #fc8210;
  }
`;

const Info = () => {
  // consumer 은 한가기 태그만 관리
  return (
    <>
      <InfoConsumer>
        {({ state, actions }) => (
          <input
            type="text"
            name="username"
            placeholder="이름을 입력하세요."
            value={state.username}
            onChange={(e) => actions.setUsername(e.target.value)}
          />
        )}
      </InfoConsumer>
      <InfoConsumer>
        {({ state, actions }) => (
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요."
            value={state.email}
            onChange={(e) => actions.setEmail(e.target.value)}
          />
        )}
      </InfoConsumer>
      <InfoConsumer>
        {({ state: { username, email, userList }, actions }) => (
          <Button
            //  onClick에 함수가 들어와야 함
            onClick={() => {
              actions.setUserList([
                ...userList,
                {
                  username: username,
                  email: email,
                },
              ]);
            }}
          >
            추가
          </Button>
        )}
      </InfoConsumer>
    </>
  );
};
export default Info;
