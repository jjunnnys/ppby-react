import React, { useState } from 'react';
import './styles.css';
import Info from './components/Info';
import UserList from './components/UserList';
import useInput from './hooks/useInput';

function App() {
  const [info, onChage] = useInput({
    username: '',
    email: '',
  });
  const [infoList, setInfoList] = useState([]);

  const onCreateInfo = () => {
    const { username, email } = info;
    setInfoList([
      ...infoList,
      {
        username,
        email,
      },
    ]);
  };

  return (
    <>
      <section className="inputSection">
        <Info onChange={onChage} onCreateInfo={onCreateInfo} />
        <UserList infoList={infoList} />
      </section>
    </>
  );
}

export default App;
