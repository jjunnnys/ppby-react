import React from 'react';
import './styles.css';
import Info from './components/Info';
import UserList from './components/UserList';
import { InfoProvider } from './context/info';

function App() {
  return (
    <InfoProvider>
      <section className="inputSection">
        <Info />
        <UserList />
      </section>
    </InfoProvider>
  );
}

export default App;
