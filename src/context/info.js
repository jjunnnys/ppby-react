import React, { createContext, useState } from 'react';

const InfoContext = createContext({
  state: {
    username: '',
    email: '',
    userList: [{ username: 'ppby', email: 'salswnss@gmail.com' }],
  },
  actions: {
    setUsername: () => {},
    setEmail: () => {},
    setUserList: () => {},
  },
});

const InfoProvider = ({ children }) => {
  // 기본 값을 맞춰 줌
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);

  const value = {
    state: { username, email, userList },
    actions: { setUsername, setEmail, setUserList },
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

const { Consumer: InfoConsumer } = InfoContext;

export { InfoProvider, InfoConsumer };

export default InfoContext;
