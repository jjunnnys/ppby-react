import React, { useState } from 'react';
import './styles.css';
import Info from './components/Info';

function App() {
  const [info, setInfo] = useState({
    username: '',
    email: '',
  });

  const onChage = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const onCreate = () => {
    const { username, email } = info;
    console.log(username, email);
  };

  return (
    <>
      <section className="inputSection">
        <Info onChange={onChage} onCreate={onCreate} />
      </section>
    </>
  );
}

export default App;
