import React from 'react';
import styled from 'styled-components';

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

const UserList = ({ infoList }) => {
  return (
    <ul>
      {infoList.map((info) => (
        <InfoLi>
          <dt>{info.username}</dt>
          <dl>{info.email}</dl>
        </InfoLi>
      ))}
    </ul>
  );
};

export default UserList;
