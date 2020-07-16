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

  return (
    <>
      <section className="inputSection">
        <Info onChange={onChage} />
      </section>
    </>
  );
}

export default App;
