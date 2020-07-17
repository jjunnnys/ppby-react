import React, { useState } from 'react';
import './styles.css';
import Info from './components/Info';
import UserList from './components/UserList';

function App() {
  const [info, setInfo] = useState({
    username: '',
    email: '',
  });
  const [infoList, setInfoList] = useState([]);

  const onChage = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

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
