import React, { useState } from 'react';
import './styles.css';
import Inputs from './components/Inputs';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const onChage = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <main className="inputMain">
        <Inputs onChange={onChage} />
        <p>이름 : {inputs.name}</p>
        <p>이메일 : {inputs.email}</p>
      </main>
    </>
  );
}

export default App;
