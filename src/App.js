import React, { useState } from 'react';
import './styles.css';

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
        <input
          name="name"
          type="text"
          placeholder="이름을 입력하세요."
          onChange={onChage}
        />
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요."
          onChange={onChage}
        />
        <p>이름 : {inputs.name}</p>
        <p>이메일 : {inputs.email}</p>
      </main>
    </>
  );
}

export default App;
