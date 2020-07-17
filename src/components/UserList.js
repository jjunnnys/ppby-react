import React from 'react';
import styled from 'styled-components';
import { InfoConsumer } from '../context/info';

const InfoLi = styled.li`
  list-style: none;
  dt {
    font-size: 5rem;
  }
  dl {
    font-size: 3rem;
  }
  & + & {
    margin-top: 2rem;
  }
`;

const UserList = () => {
  return (
    <InfoConsumer>
      {({ state: { userList } }) => (
        <ul>
          {userList.map((info, index) => (
            <InfoLi key={index}>
              <dt>{info.username}</dt>
              <dl>{info.email}</dl>
            </InfoLi>
          ))}
        </ul>
      )}
    </InfoConsumer>
  );
};

export default UserList;
